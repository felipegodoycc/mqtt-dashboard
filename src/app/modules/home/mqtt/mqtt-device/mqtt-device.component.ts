import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mqtt-device',
  templateUrl: './mqtt-device.component.html',
  styleUrls: ['./mqtt-device.component.css']
})
export class MqttDeviceComponent implements OnInit {
  @Input() topic;

  constructor() {
  }

  ngOnInit() {
  }

}
