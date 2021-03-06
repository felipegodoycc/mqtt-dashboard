import { Component, OnInit } from '@angular/core';
import { MedicionPorHora, MedicionesPorHoraDTO } from 'src/app/shared/dto/medicion.dto';
import { MedicionService } from 'src/app/core/services/medicion.service';
import { DataLineChart } from '../line-chart/interface/data.interface';
import { Topic } from 'src/app/shared/models/topic.model';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  topicos: Topic[];
  mediciones: MedicionPorHora[];
  graphData: DataLineChart;
  isData = false;
  isDateSelected = false;
  date = new Date();
  loading = false;
  desde: string;
  hasta: string;
  breakpoint: number;
  selected = [];
  
  constructor(public medicionService: MedicionService,
              private topicService: TopicService) {
    this.fechaSelected(new Date());    
    this.isDateSelected = true;
    this.topicService.getTopics().subscribe( (res:any) => {
      this.topicos = res.items;
      this.selected = [this.topicos[0].topic, this.topicos[2].topic];
      this.loading = false;
      this.getData();
    })
  }
  
  ngOnInit() {
    console.log('Topicos: ',this.topicos)
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;    
    
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
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
      { borderColor: 'cyan' },
      { borderColor: 'yellowS' }
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
      scales: {
        xAxes: [
          {
            scaleLabel: { display: true, labelString: 'Hora del dia' },
            gridLines: { display: false }
        }],
        yAxes: [
          {
            scaleLabel: { display: true, labelString: 'Valor' },
            gridLines: { display: false }
        }]
      }
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
