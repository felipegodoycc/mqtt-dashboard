import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { Topic } from 'src/app/shared/models/topic.model';
import { AuthService } from 'src/app/core/services/auth-api.service';

@Component({
  selector: 'app-mqtt-device',
  templateUrl: './mqtt-device.component.html',
  styleUrls: ['./mqtt-device.component.css']
})
export class MqttDeviceComponent implements OnDestroy, OnInit {
  @Input() public topic:Topic;
  private subscription: Subscription;
  public message: string;
  public lastUpdate = Date.now();
  messageReceived = false;
  switchStatus:boolean = false;
  value: Number = 0;


  constructor(private _mqttService: MqttService,
              public authService: AuthService) {
  }

  ngOnInit(){
    console.log(this.topic)
    this.subscription = this._mqttService.observe(this.topic.topic).subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
      this.lastUpdate = Date.now();
      this.messageReceived = true;
      if(this.topic.type === 'sensor') this.value = parseInt(this.message);
    });
  }

  public publish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message);
  }

  cambioSwitch(){
    console.log("Valor switch: ", this.switchStatus);
    const msg = this.switchStatus ? "1" : "0";
    this.publish(this.topic.topic, msg);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
