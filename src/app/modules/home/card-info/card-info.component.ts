import { Component, OnInit, Input } from '@angular/core';
import { MedicionService } from 'src/app/core/services/medicion.service';
import { Medicion } from 'src/app/shared/models/medicion.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  @Input() topic;
  @Input() refresh: Observable<boolean>;
  loading = true;
  data: Medicion;

  constructor(private medicionService: MedicionService) {}

  ngOnInit() {
    console.log('topico', this.topic);
    this.loadData();
    this.refresh.subscribe( res => {
      if (res) { this.loadData(); }
    });
  }

  loadData() {
    this.medicionService.getUltimoRegistro(this.topic).subscribe( (res: any) => {
      this.data = res;
      this.loading = false;
    });
  }

}
