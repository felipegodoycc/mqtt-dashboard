import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    { path: '',
      children: [
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'reset_password/:token',
            component: ResetPasswordComponent
          }
      ],
      component: AuthComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
