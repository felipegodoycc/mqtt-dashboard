import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SonoffDeviceComponent } from './sonoff-device/sonoff-device.component';
import { DispositivosComponent } from './dispositivos.component';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SonoffDeviceComponent,
    DispositivosComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class DispositivosModule { }
