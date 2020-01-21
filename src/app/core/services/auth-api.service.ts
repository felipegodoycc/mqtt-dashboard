import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';
import { map } from 'rxjs/operators';
import { LoginDTO } from 'src/app/shared/interface/login.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {
  private authUrl = `${ environment.apiURL }/auth`;
  private token: string;
  user: UsuarioAPI;
  private helperJWT;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.helperJWT = new JwtHelperService();
    this.leerToken();
    if (!this.isLogged()) { this.isUserLoggedIn.next(false); }
  }

  logout() {
    localStorage.removeItem('idToken');
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
                      this.user = res.user;
                      this.guardarToken(res.token);
                      return res;
                    }));
  }

  private guardarToken(token: string) {
    this.token = token;
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

  getToken(){
    return this.token;
  }

  isLogged(): boolean {
    const isExpired = this.helperJWT.isTokenExpired(this.token);
    console.log('isLogged ', this.helperJWT.getTokenExpirationDate(this.token))
    if (isExpired) { localStorage.removeItem('idToken'); }
    return !isExpired;
  }

  isAdmin(): boolean {
    return this.user.role.admin;
  }

  canControl(): boolean{
    return this.user.role.control;
  }

  canView(): boolean {
    return this.user.role.view;
  }
}
