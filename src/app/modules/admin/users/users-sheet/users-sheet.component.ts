import { Component, OnInit } from '@angular/core';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-users-sheet',
  templateUrl: './users-sheet.component.html',
  styleUrls: ['./users-sheet.component.css']
})
export class UsersSheetComponent implements OnInit {
  usuario: UsuarioAPI = new UsuarioAPI();

  constructor(private userService: UserService,
              public dialogRef: MatDialogRef<UsersSheetComponent>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log('form:', this.usuario)
    this.userService.newUser(this.usuario).subscribe( res => {
      this.dialogRef.close(true);
      console.log(res);
    })
  }

}
