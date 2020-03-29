import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { MqttComponent } from './mqtt/mqtt.component';
import { HomeComponent } from './home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'formulario', component: FormularioComponent},
            { path: 'dispositivos', component: DispositivosComponent},
            { path: 'mqtt-control', component: MqttComponent },
            { 
                path: 'admin', 
                loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
            },
            { path: '**', redirectTo: 'dashboard'}
        ],
        component: HomeComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
