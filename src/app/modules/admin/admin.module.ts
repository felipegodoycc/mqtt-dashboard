import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersSheetComponent } from './users/users-sheet/users-sheet.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDeleteDialogComponent } from './users/user-delete-dialog/user-delete-dialog.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersSheetComponent,
    UserDeleteDialogComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [
    UsersSheetComponent,
    UserDeleteDialogComponent
  ]
})
export class AdminModule { }
