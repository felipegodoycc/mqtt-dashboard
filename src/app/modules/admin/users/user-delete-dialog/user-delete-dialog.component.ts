import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-user-delete-dialog',
    templateUrl: 'user-delete-dialog.html',
    styleUrls: ['./user-delete-dialog.css']

  })
  export class UserDeleteDialogComponent implements OnInit {

    constructor(
      public dialogRef: MatDialogRef<UserDeleteDialogComponent>) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
    }

}
