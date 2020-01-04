import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  private apiUrl = 'http://ifcomputing.com:3035/api/v1';

  constructor(private http: HttpClient) { }

  getMediciones(desde: string, hasta: string, limit: number = -1, page: number = -1, topico: string) {
    const url = `${this.apiUrl}/medicion/desde/${desde}/hasta/${hasta}?limit=${limit}&page=${page}&topic=${topico}`;
    return this.http.get(url);
  }

  getMedicionesPorHora(desde: string, hasta: string, topico: string){
    const url = `${this.apiUrl}/medicion/porHoras/desde/${desde}/hasta/${hasta}/?topic=${topico}`
    return this.http.get(url);
  }


}
