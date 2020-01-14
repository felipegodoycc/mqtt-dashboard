import { Component, OnInit } from '@angular/core';
import { MedicionService } from 'src/app/core/services/medicion.service';
import { MedicionDTO, MedicionesPorHoraDTO, MedicionPorHora } from 'src/app/shared/dto/medicion.dto';
import { Medicion } from 'src/app/shared/models/medicion.model';
import { DataLineChart } from '../line-chart/interface/data.interface';
import Swal from 'sweetalert2';
import { EwelinkService } from 'src/app/core/services/ewelink.service';
import { Device } from 'src/app/shared/interface/device.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mediciones: MedicionPorHora[];
  graphData: DataLineChart;
  isData = false;
  refreshCards: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isDateSelected = false;
  date = new Date();
  loading = false;
  desde: string;
  hasta: string;

  topics = [
    { value: 'casa/pieza/temp', viewValue: 'Temperatura pieza'},
    { value: 'casa/pieza/hum', viewValue: 'Humedad pieza'},
    { value: 'casa/patio/temp', viewValue: 'Temperatura patio'},
    { value: 'casa/patio/hum', viewValue: 'Humedad patio'},
  ];

  selected = [this.topics[0].value];
  breakpoint: number;

  constructor(public medicionService: MedicionService) {
    this.fechaSelected(new Date(Date.now()));
    this.getData();
    this.isDateSelected = true;
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  fechaSelected(date: Date) {
    date.setHours(0, 0, 0);
    this.desde = new Date(date).toISOString();
    const h = new Date(date);
    h.setHours(23, 59, 59);
    this.hasta = h.toISOString();
    this.isDateSelected = true;
  }

  dataToGraph(mediciones: MedicionPorHora[]): DataLineChart {
    const datasets = [];
    let labels = [];
    const colors = [
      { borderColor: 'red' },
      { borderColor: 'blue' },
      { borderColor: 'green' },
      { borderColor: 'black' },
      { borderColor: 'cyan' }
    ];

    mediciones.map( (item: MedicionPorHora) => {
      const preData = {
        data: item.values.map( val => val.value),
        label: item._id
      };
      labels = item.values.map( val => val.hora);
      datasets.push(preData);
    });

    const options = {
      responsive: true,
    };

    return new DataLineChart(datasets,
                              labels,
                              colors,
                              [],
                              options);
  }

  getData() {
    this.loading = true;
    this.medicionService.getMedicionesPorHora(this.desde, this.hasta, this.selected.join(',')).subscribe( (res: MedicionesPorHoraDTO) => {
      if (res.items.length > 0) {
        this.mediciones = res.items;
        this.graphData = this.dataToGraph(res.items);
        this.isData = true;
      } else {
        this.isData = false;
      }
      this.loading = false;
    });
  }

  updateCards() {
    this.refreshCards.next(true);
    this.refreshCards.next(false);
  }
}
