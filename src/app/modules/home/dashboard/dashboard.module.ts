import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BusquedaComponent,
    CardInfoComponent,
    DashboardComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ChartsModule,
    FormsModule,
    RouterModule
  ]
})
export class DashboardModule { }
