import { Component, OnInit } from '@angular/core';
import { MedicionPorHora, MedicionesPorHoraDTO } from 'src/app/shared/dto/medicion.dto';
import { DataLineChart } from '../line-chart/interface/data.interface';
import { MedicionService } from 'src/app/core/services/medicion.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  mediciones: MedicionPorHora[];
  graphData: DataLineChart;
  isData = false;
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

  constructor(public medicionService: MedicionService) {
    this.fechaSelected(new Date());
    this.getData();
    this.isDateSelected = true;
  }

  ngOnInit() {

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

}
