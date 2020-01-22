import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { UsuarioAPI } from 'src/app/shared/models/usuarioAPI.model';
import { MatDialog, MatPaginator } from '@angular/material';
import { UsersSheetComponent } from './users-sheet/users-sheet.component';
import { Subscription } from 'rxjs';
import { UserDeleteDialogComponent } from './user-delete-dialog/user-delete-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loading = true;
  users: UsuarioAPI[];
  displayedColumns: string[] = ['_id', 'username', 'email', 'role', 'active', 'options'];
  totalUsers = 0;

  subscription: Subscription = new Subscription();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loadUsers(this.paginator.pageIndex + 1, this.paginator.length);
  }

  addUsuario(){
    this.subscription.add(
      this.dialog.open(UsersSheetComponent, { width: '1000px'})
        .afterClosed().subscribe( res => {
          this.loadUsers();
      })
    );
  }

  editUser(user){
    this.subscription.add(
      this.dialog.open(UsersSheetComponent, { width: '1000px', data: user})
        .afterClosed().subscribe( res => {
          this.loadUsers(this.paginator.pageIndex + 1,this.paginator.length);
        })
    );
  }

  deleteUser(user){
    this.subscription.add(
      this.dialog.open(UserDeleteDialogComponent, { width: '500px'})
        .afterClosed().subscribe( (result: boolean) => {
          if ( result === true ) {
            this.userService.deleteUser(user._id).subscribe( res => {
              this.loadUsers(this.paginator.pageIndex + 1,this.paginator.length);
            });
          }
        })
    )
  }

  loadUsers(page= 1, length = 10){
    this.userService.getUsers(page, length).subscribe( (res: any) => {
      this.users = res.items;
      this.totalUsers = res.total;
      this.loading = false;
    });
  }

}
