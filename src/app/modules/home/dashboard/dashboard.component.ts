import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MedicionService } from 'src/app/core/services/medicion.service';
import { MedicionDTO } from 'src/app/shared/dto/medicion.dto';
import { Medicion } from 'src/app/shared/models/medicion.model';
import { DataLineChart } from '../line-chart/interface/data.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mediciones: Medicion[] = [];
  graphData: DataLineChart;
  isData = false;
  topics = [
    { value: 'casa/pieza/temp', viewValue: 'casa/pieza/temp'},
    { value: 'casa/pieza/hum', viewValue: 'casa/pieza/hum'},
    { value: 'casa/patio/temp', viewValue: 'casa/patio/temp'},
    { value: 'casa/patio/hum', viewValue: 'casa/patio/hum'},
  ]
  selected = this.topics[0].value
  dateSelected = false;
  desde: string;
  hasta: string;

  constructor(public medicionService: MedicionService) {
              }

  ngOnInit() {
    
  }

  fechaSelected(date){
    this.desde = new Date(date.value).toISOString();
    let h = new Date(date.value);
    h.setHours(23,59,59);
    this.hasta = h.toISOString();
    this.dateSelected = true;
  }

  dataToGraph(mediciones: Medicion[]): DataLineChart{
    let values = [];
    let labels = [];
    const colors = [{
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.6)',
    }]
    const titulo = mediciones[0].tipo;
    const options = { 
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100
          }
        }]
      }
    }

    for (let medicion of mediciones) {
      values.push(medicion.value)
      labels.push(medicion.date)        
    }

    return new DataLineChart([{ data: values, label: titulo}],
                              labels,
                              colors,
                              [],
                              options)
  }

  getData(){
    Swal.fire({
      allowOutsideClick: false,
      title: 'Espere porfavor',
      icon: 'info'
    })
    Swal.showLoading();
    this.medicionService.getMediciones(this.desde, this.hasta, 100, 1, this.selected).subscribe( (res: MedicionDTO) => {
      Swal.close();
      console.log('res ', res)
      if(res.items.length > 0){
        console.log("llego data")
        this.graphData = this.dataToGraph(res.items);
        console.log(this.graphData);
        this.isData = true;
      } else {
        console.log("no llego data")
        this.isData = false;
      }      
    });
  }
}
