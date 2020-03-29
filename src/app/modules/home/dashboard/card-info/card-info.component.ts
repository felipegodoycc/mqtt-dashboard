import { Component, OnInit, Input } from '@angular/core';
import { MedicionService } from 'src/app/core/services/medicion.service';
import { Medicion } from 'src/app/shared/models/medicion.model';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/shared/models/topic.model';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  @Input() topic:Topic;
  @Input() refresh: Observable<boolean>;
  loading = true;
  data: Medicion;

  constructor(private medicionService: MedicionService) {}

  ngOnInit() {
    this.loadData();
    this.refresh.subscribe( res => {
      if (res) { this.loadData(); }
    });
  }

  loadData() {
    this.loading = true;
    this.medicionService.getUltimoRegistro(this.topic.topic).subscribe( (res: any) => {
      this.data = res;
      this.loading = false;
    });
  }

}
