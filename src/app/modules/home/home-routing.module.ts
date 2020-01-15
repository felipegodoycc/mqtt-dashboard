import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { MqttComponent } from './mqtt/mqtt.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
            { path: 'formulario', canActivate: [AuthGuard], component: FormularioComponent},
            { path: 'dispositivos', canActivate: [AuthGuard], component: DispositivosComponent},
            { path: 'mqtt-control', component: MqttComponent },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard'}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
