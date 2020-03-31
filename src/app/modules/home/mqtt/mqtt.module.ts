import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqttComponent } from './mqtt.component';
import { MqttDeviceComponent } from './mqtt-device/mqtt-device.component';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MedidorComponent } from './medidor/medidor.component';
import { NgxGaugeModule } from 'ngx-gauge';

@NgModule({
  declarations: [
    MqttComponent,
    MqttDeviceComponent,
    MedidorComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule,
    NgxGaugeModule
  ]
})
export class MqttLocalModule {}
