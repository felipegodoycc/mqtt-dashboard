import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-topic-delete-dialog',
    templateUrl: 'topic-delete-dialog.html',
    styleUrls: ['./topic-delete-dialog.css']

  })
  export class TopicDeleteDialogComponent implements OnInit {

    constructor(
      public dialogRef: MatDialogRef<TopicDeleteDialogComponent>) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
    }

}
