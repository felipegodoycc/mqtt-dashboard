import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';

import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SonoffDeviceComponent } from './sonoff-device/sonoff-device.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    LineChartComponent,
    FormularioComponent,
    SonoffDeviceComponent,
    DispositivosComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
