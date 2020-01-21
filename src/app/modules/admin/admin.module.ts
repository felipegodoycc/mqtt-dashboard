import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersSheetComponent } from './users/users-sheet/users-sheet.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    UsersSheetComponent,
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
    UsersSheetComponent
  ]
})
export class AdminModule { }
