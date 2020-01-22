import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqttComponent } from './mqtt.component';
import { MqttDeviceComponent } from './mqtt-device/mqtt-device.component';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MqttComponent,
    MqttDeviceComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class MqttLocalModule {}
