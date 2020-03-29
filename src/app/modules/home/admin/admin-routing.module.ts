import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';
import { TopicsComponent } from './topics/topics.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'users', component: UsersComponent },
            { path: 'topics', component: TopicsComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'users'}
        ],
        component: AdminComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
