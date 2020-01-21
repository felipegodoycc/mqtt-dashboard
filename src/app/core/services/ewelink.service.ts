import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EwelinkService {
  private apiUrl = `${ environment.apiURL }/ewelink/device`;
  constructor(private http: HttpClient) {}

  getDevices() {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }

  getDevice(deviceID: string) {
    const url = `${this.apiUrl}/${deviceID}`;
    return this.http.get(url);
  }

  getState(deviceID: string) {
    const url = `${this.apiUrl}/${deviceID}/state`;
    return this.http.get(url);
  }

  getPowerUsage(deviceID: string) {
    const url = `${this.apiUrl}/${deviceID}/power-usage`;
    return this.http.get(url);
  }

  toggleDevice(deviceID: string, channel: string= '1') {
    const url = `${this.apiUrl}/${deviceID}/toggle/channel/${channel}`;
    return this.http.get(url);
  }

  setStatus(deviceID: string, status: string, channel: string = '1') {
    const url = `${this.apiUrl}/${deviceID}/set/${status}`;
    return this.http.put(url, { channel });
  }
}
