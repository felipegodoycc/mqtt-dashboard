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
import { TopicsComponent } from './topics/topics.component';
import { TopicsSheetComponent } from './topics/topic-sheet/topics-sheet.component';
import { TopicDeleteDialogComponent } from './topics/topic-delete-dialog/topic-delete-dialog.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersSheetComponent,
    UserDeleteDialogComponent,
    AdminComponent,
    TopicsSheetComponent,
    TopicDeleteDialogComponent,
    TopicsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UsersSheetComponent,
    UserDeleteDialogComponent,
    TopicsSheetComponent,
    TopicDeleteDialogComponent
  ]
})
export class AdminModule { }
