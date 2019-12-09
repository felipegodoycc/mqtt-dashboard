import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from 'src/app/shared/models/usuario.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = "https://identitytoolkit.googleapis.com/v1";
  private apiKey = "AIzaSyCR28OzSE-2kmMYF80y45dJU5lAAn5Y0gs";

  private token:string;

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout(){
    localStorage.removeItem('idToken');
    this.isUserLoggedIn.next(false);
  }

  login(usuario:UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(`${this.authUrl}/accounts:signInWithPassword?key=${this.apiKey}`, authData)
                    .pipe( map(res => {
                      this.guardarToken(res['idToken']);
                      return res;
                    }));
  }

  registrar(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(`${this.authUrl}/accounts:signUp?key=${this.apiKey}`, authData)
                    .pipe( map(res => {
                      this.guardarToken(res['idToken']);
                      return res;
                    }));    
  }

  private guardarToken(token:string){
    this.token = token;
    localStorage.setItem('token', token);
    this.isUserLoggedIn.next(true);
  }

  leerToken(){
    let t = localStorage.getItem('token');
    if(t){
      this.token = t;
      if(this.isLogged) this.isUserLoggedIn.next(true);
    } else {
      this.token = '';
    }

    return this.token;
  }

  isLogged(): boolean{
    return this.token.length > 20;
  }

}
