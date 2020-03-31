import { Component, OnInit, Input, Inject } from '@angular/core';
import { Topic } from 'src/app/shared/models/topic.model';
import { NgForm } from '@angular/forms';
import { TopicService } from 'src/app/core/services/topic.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-topics-sheet',
  templateUrl: './topics-sheet.component.html',
  styleUrls: ['./topics-sheet.component.css']
})
export class TopicsSheetComponent implements OnInit {
  topic: Topic = new Topic();
  edit = false;
  boton = 'Crear';

  tipos = ["sensor","switch"];
  tipoSelected = "sensor";

  constructor(private topicService: TopicService,
              public dialogRef: MatDialogRef<TopicsSheetComponent>,
              @Inject(MAT_DIALOG_DATA) public entryData: any) { }

  ngOnInit() {
    if (this.entryData) {
      this.topic = this.entryData;
      this.edit = true;
      this.boton = 'Editar';
    }
  }

  onSubmit(form: NgForm) {
    console.log('form:', this.topic);
    if (this.edit) {
      this.topicService.editTopic(this.topic).subscribe( res => {
        this.dialogRef.close(true);
      });
    } else {
      this.topicService.newTopic(this.topic).subscribe( res => {
        this.dialogRef.close(true);
      });
    }
  }

}
