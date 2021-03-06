import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';

import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DispositivosModule } from './dispositivos/dispositivos.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MqttLocalModule } from './mqtt/mqtt.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    HomeComponent,
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DispositivosModule,
    DashboardModule,
    MqttLocalModule,
    AdminModule
  ]
})
export class HomeModule { }
