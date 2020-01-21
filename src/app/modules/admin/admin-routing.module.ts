import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'users', canActivate: [AuthGuard], component: UsersComponent },
            { path: '', pathMatch: 'full', redirectTo: 'users'}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
