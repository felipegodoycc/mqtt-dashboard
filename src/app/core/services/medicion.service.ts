import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Medicion } from 'src/app/shared/models/medicion.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  getMediciones(desde: string, hasta: string, limit: number = -1, page: number = -1, topico: string) {
    const url = `${this.apiUrl}/medicion/desde/${desde}/hasta/${hasta}?limit=${limit}&page=${page}&topic=${topico}`;
    return this.http.get(url);
  }

  getMedicionesPorHora(desde: string, hasta: string, topico: string){
    const url = `${this.apiUrl}/medicion/porHoras/desde/${desde}/hasta/${hasta}/?topic=${topico}`
    return this.http.get(url);
  }

  getUltimoRegistro(topico: string): Observable<Medicion>{
    const url = `${this.apiUrl}/medicion/last/?topic=${topico}`;
    return this.http.get(url).pipe( map( (res:any) => res.registro));
  }


}
