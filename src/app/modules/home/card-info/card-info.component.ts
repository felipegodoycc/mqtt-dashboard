import { Component, OnInit, Input } from '@angular/core';
import { MedicionService } from 'src/app/core/services/medicion.service';
import { Medicion } from 'src/app/shared/models/medicion.model';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  @Input() topic;
  loading = true;
  data:Medicion;

  constructor(private medicionService: MedicionService) {}

  ngOnInit() {
    console.log('topico', this.topic);
    this.medicionService.getUltimoRegistro(this.topic).subscribe( (res:any) => {
      this.data = res
      this.loading = false;
    })
  }

}
