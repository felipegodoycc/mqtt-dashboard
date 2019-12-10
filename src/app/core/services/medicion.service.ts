import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicionService {
  private apiUrl = 'http://ifcomputing.com:3035/api/v1';

  constructor(private http: HttpClient) { }

  getMediciones(desde: string, hasta: string) {
    const url = `${this.apiUrl}/medicion/desde/${desde}/hasta/${hasta}`;
    return this.http.get(url);
  }
}
