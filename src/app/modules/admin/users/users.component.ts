import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';
import { MatDialog } from '@angular/material';
import { UsersSheetComponent } from './users-sheet/users-sheet.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loading = true;
  users: UsuarioAPI[];
  displayedColumns: string[] = ['_id', 'username', 'email', 'role','active'];

  subscription: Subscription = new Subscription();


  constructor(private userService: UserService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadUsers();
  }

  addUsuario(){
    this.subscription.add(
      this.dialog.open(UsersSheetComponent, { width: '1000px'})
        .afterClosed().subscribe( res => {
          this.loadUsers();
          console.log("listo");
      })
    )

  }

  loadUsers(){
    this.userService.getUsers().subscribe( (res:any) => {
      this.users = res.items;
      this.loading = false;
    });
  }

}
