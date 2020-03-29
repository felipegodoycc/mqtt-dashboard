import { Component, OnInit } from '@angular/core';
import { MedicionService } from 'src/app/core/services/medicion.service';
import { MedicionDTO, MedicionesPorHoraDTO, MedicionPorHora } from 'src/app/shared/dto/medicion.dto';
import { Medicion } from 'src/app/shared/models/medicion.model';
import { DataLineChart } from './line-chart/interface/data.interface';
import Swal from 'sweetalert2';
import { EwelinkService } from 'src/app/core/services/ewelink.service';
import { Device } from 'src/app/shared/interface/device.interface';
import { BehaviorSubject } from 'rxjs';
import { Topic } from 'src/app/shared/models/topic.model';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  refreshCards: BehaviorSubject<boolean> = new BehaviorSubject(false);
  breakpoint: number;

  topics: Topic[];

  constructor(private topicService: TopicService) {
  }
  
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
    this.topicService.getTopics(1,4).subscribe( (res:any) => {
      this.topics = res.items;
    })
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  updateCards() {
    this.refreshCards.next(true);
    this.refreshCards.next(false);
  }
}
