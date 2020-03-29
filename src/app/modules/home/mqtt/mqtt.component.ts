import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/shared/models/topic.model';
import { TopicService } from 'src/app/core/services/topic.service';

@Component({
  selector: 'app-mqtt',
  templateUrl: './mqtt.component.html',
  styleUrls: ['./mqtt.component.css']
})
export class MqttComponent implements OnInit {
  loading:boolean;
  topics : Topic[];

  constructor(private topicService: TopicService) {
    this.loading = true;
  }

  ngOnInit() {
    this.topicService.getTopics().subscribe( (res:any) => {
      this.topics = res.items;
      this.loading = false;
    })
  }

}
