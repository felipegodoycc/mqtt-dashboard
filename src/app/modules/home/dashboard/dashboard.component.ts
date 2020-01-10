import { Component, OnInit } from '@angular/core';
import { MedicionService } from 'src/app/core/services/medicion.service';
import { MedicionDTO } from 'src/app/shared/dto/medicion.dto';
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
  mediciones: Medicion[] = [];
  graphData: DataLineChart;
  isData = false;
  refreshCards: BehaviorSubject<boolean> = new BehaviorSubject(false);
  dateSelected = false;
  loading = false;
  desde: string;
  hasta: string;

  topics = [
    { value: 'casa/pieza/temp', viewValue: 'casa/pieza/temp'},
    { value: 'casa/pieza/hum', viewValue: 'casa/pieza/hum'},
    { value: 'casa/patio/temp', viewValue: 'casa/patio/temp'},
    { value: 'casa/patio/hum', viewValue: 'casa/patio/hum'},
  ];

  selected = this.topics[2].value;

  constructor(public medicionService: MedicionService) {
    this.fechaSelected(new Date(Date.now()));
    this.getData();
    this.dateSelected = false;
  }

  ngOnInit() {
  }

  fechaSelected(date: Date) {
    date.setHours(0, 0, 0);
    this.desde = new Date(date).toISOString();
    let h = new Date(date);
    h.setHours(23, 59, 59);
    this.hasta = h.toISOString();
    this.dateSelected = true;
  }

  dataToGraph(mediciones: Medicion[]): DataLineChart {
    let values = [];
    let labels = [];
    const colors = [{
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0,0.6)',
    }];
    const titulo = 'Valores';
    const options = {
      responsive: true,
    };

    for (let medicion of mediciones) {
      values.push(medicion.value);
      labels.push(medicion._id);
    }

    return new DataLineChart([{ data: values, label: titulo}],
                              labels,
                              colors,
                              [],
                              options);
  }

  getData(){
    this.loading = true;
    this.medicionService.getMedicionesPorHora(this.desde, this.hasta, this.selected).subscribe( (res: MedicionDTO) => {
      console.log('res ', res);
      if (res.items.length > 0){
        console.log('llego data');
        this.graphData = this.dataToGraph(res.items);
        console.log(this.graphData);
        this.isData = true;
      } else {
        console.log('no llego data');
        this.isData = false;
      }
      this.loading = false;
    });
  }

  updateCards(){
    this.refreshCards.next(true);
    this.refreshCards.next(false);
  }
}
