import { Component, OnInit, Input, Inject } from '@angular/core';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-users-sheet',
  templateUrl: './users-sheet.component.html',
  styleUrls: ['./users-sheet.component.css']
})
export class UsersSheetComponent implements OnInit {
  usuario: UsuarioAPI = new UsuarioAPI();
  edit = false;
  boton = 'Crear';

  constructor(private userService: UserService,
              public dialogRef: MatDialogRef<UsersSheetComponent>,
              @Inject(MAT_DIALOG_DATA) public entryData: any) { }

  ngOnInit() {
    if (this.entryData) {
      this.usuario = this.entryData;
      this.edit = true;
      this.boton = 'Editar';
    }
  }

  onSubmit(form: NgForm) {
    console.log('form:', this.usuario);
    if (this.edit) {
      this.userService.editUser(this.usuario).subscribe( res => {
        this.dialogRef.close(true);
      });
    } else {
      this.userService.newUser(this.usuario).subscribe( res => {
        this.dialogRef.close(true);
      });
    }
  }

}
