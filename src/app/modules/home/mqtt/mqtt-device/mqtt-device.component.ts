import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';

@Component({
  selector: 'app-mqtt-device',
  templateUrl: './mqtt-device.component.html',
  styleUrls: ['./mqtt-device.component.css']
})
export class MqttDeviceComponent implements OnDestroy, OnInit {
  @Input() public topic = '';
  private subscription: Subscription;
  public message: string;
  public lastUpdate = Date.now();
  messageReceived = false;


  constructor(private _mqttService: MqttService) {
  }

  ngOnInit(){
    console.log(this.topic)
    this.subscription = this._mqttService.observe(this.topic).subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      console.log(message)
      console.log('msg ', this.message);
      this.lastUpdate = Date.now();
      this.messageReceived = true;
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
