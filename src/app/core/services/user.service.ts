import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${ environment.apiURL }/users`;

  constructor(private http: HttpClient) {}

  newUser(user: UsuarioAPI) {
    return this.http.post(this.apiUrl, { data: user } );
  }

  editUser(user: UsuarioAPI) {
    const url = `${this.apiUrl}/${user._id}`;
    return this.http.put(url, { data: user});
  }

  getUsers(page: number = 1, limit: number = 10) {
    const url = `${ this.apiUrl }/?page=${page}&limit=${limit}`;
    return this.http.get(url);
  }

  deleteUser(userID: string){
    const url = `${ this.apiUrl }/${ userID }`;
    return this.http.delete(url);
  }


}
