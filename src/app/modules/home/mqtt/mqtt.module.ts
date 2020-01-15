import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqttComponent } from './mqtt.component';
import { MqttDeviceComponent } from './mqtt-device/mqtt-device.component';


@NgModule({
  declarations: [
    MqttComponent,
    MqttDeviceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MqttLocalModule { }
