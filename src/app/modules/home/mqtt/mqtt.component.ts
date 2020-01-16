import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mqtt',
  templateUrl: './mqtt.component.html',
  styleUrls: ['./mqtt.component.css']
})
export class MqttComponent implements OnInit {
  topics = [
    { value: 'casa/pieza/temp', viewValue: 'Temperatura pieza'},
    { value: 'casa/pieza/hum', viewValue: 'Humedad pieza'},
    { value: 'casa/patio/temp', viewValue: 'Temperatura patio'},
    { value: 'casa/patio/hum', viewValue: 'Humedad patio'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
