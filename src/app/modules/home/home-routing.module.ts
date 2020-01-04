import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
    { 
        path: '',
        children: [
            { path:'dashboard', component: DashboardComponent },
            { path:'formulario', component: FormularioComponent},
            { path: '', pathMatch: 'full', redirectTo: 'dashboard'}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
