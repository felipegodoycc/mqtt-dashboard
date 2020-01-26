import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';
import { map } from 'rxjs/operators';
import { LoginDTO } from 'src/app/shared/interface/login.interface';
import SimpleCrypto from 'simple-crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {
  private authUrl = `${ environment.apiURL }/auth`;
  private token: string;
  user: UsuarioAPI;
  private helperJWT;
  private simpleCrypto;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.helperJWT = new JwtHelperService();
    this.simpleCrypto = new SimpleCrypto(environment.cryptoKey);
    this.leerToken();
    this.readUser();
    if (!this.isLogged()) { this.isUserLoggedIn.next(false); }
  }

  logout() {
    localStorage.removeItem('idToken');
    localStorage.removeItem('user');
    this.isUserLoggedIn.next(false);
  }

  login(usuario: UsuarioAPI) {
    console.log(usuario);
    const body = new HttpParams()
      .set(`username`, usuario.username)
      .set(`password`, usuario.password);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(`${this.authUrl}/login`, body.toString(), { headers })
                    .pipe( map( (res: LoginDTO) => {
                      if( res.reset_password ) {
                        console.log('Debe reiniciar ');
                        return res;
                      } else {
                        this.saveUser(res.user);
                        this.guardarToken(res.token);
                        return res;
                      }
                    }));
  }

  resetPassword(token: string, newPassword: string) {
    const url = `${ this.authUrl }/reset/${ token}`;
    return this.http.post(url, { password: newPassword });
  }

  private saveUser(user) {
    this.user = user;    
    localStorage.setItem('user', this.simpleCrypto.encrypt(JSON.stringify(user)));
  }

  private readUser() {
    const u = localStorage.getItem('user');
    if (u) { this.user = JSON.parse(this.simpleCrypto.decrypt(u)); } else { this.user = null; }
  }

  private guardarToken(token: string) {
    this.token = token;
    console.log('Token guardado: ', this.token);
    localStorage.setItem('idToken', token);
    this.isUserLoggedIn.next(true);
  }

  leerToken() {
    const t = localStorage.getItem('idToken');
    if (t && !this.helperJWT.isTokenExpired(t)) {
      this.token = t;
      if (this.isLogged) { this.isUserLoggedIn.next(true); }
    } else {
      this.token = '';
    }

    return this.token;
  }

  getToken() {
    return this.token;
  }

  isLogged(): boolean {
    const isExpired = this.helperJWT.isTokenExpired(this.token);
    if (isExpired) { localStorage.removeItem('idToken'); }
    return !isExpired;
  }

  isAdmin(): boolean {
    return this.user ? this.user.role.admin : false;
  }

  canControl(): boolean {
    return this.user ? this.user.role.control : false;
  }

  canView(): boolean {
    return this.user ? this.user.role.view : false;
  }
}
