import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { AngularMaterialModule } from 'src/app/core/angular-material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthComponent, 
    LoginComponent, 
    RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class AuthModule { }
