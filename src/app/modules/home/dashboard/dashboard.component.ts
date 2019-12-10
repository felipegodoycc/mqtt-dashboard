import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MedicionService } from 'src/app/core/services/medicion.service';
import { MedicionDTO } from 'src/app/shared/dto/medicion.dto';
import { Medicion } from 'src/app/shared/models/medicion.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mediciones: Medicion[] = [];
  desde = '2019-11-17 19:38:11.553-03:00';
  hasta = '2019-11-17 19:40:11.553-03:00';
  fecha: Date;

  constructor(private breakpointObserver: BreakpointObserver,
              public medicionService: MedicionService) {}

  ngOnInit() {
  }

  fechaSelected(date){
    console.log(new Date(date.value).toISOString());
  }

  getMediciones(desde, hasta){
    this.medicionService.getMediciones(desde, this.hasta).subscribe( (res: MedicionDTO) => {
      this.mediciones = res.items;
      console.log('mediciones ', this.mediciones);
    });
  }
}
