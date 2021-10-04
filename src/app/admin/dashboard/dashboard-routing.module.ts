import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ClientesDashboardComponent } from './clientes-dashboard/containers/clientes-dashboard/clientes-dashboard.component';
//import { ClientesDashboardComponent } from './clientes-dashboard/containers/clientes-dashboard/clientes-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { EmprestimosDashboardComponent } from './emprestimos-dashboard/containers/emprestimos-dashboard/emprestimos-dashboard.component';
import { PremiosDashboardComponent } from './premios-dashboard/containers/premios-dashboad/premios-dashboard.component';
import { RifaDashboardComponent } from './rifa-dashboard/containers/rifa-dashboard/rifa-dashboard.component';
import { SorteioDashboardComponent } from './sorteio-dashboard/containers/sorteio-dashboard/sorteio-dashboard.component';

const routes: Routes = [

    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'premios',
                component: PremiosDashboardComponent
            }, {
                path: 'rifas',
                component: RifaDashboardComponent
            }, {
                path: 'sorteios',
                component: SorteioDashboardComponent
            }, {
                path: 'emprestimos',
                component: EmprestimosDashboardComponent
            }
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}
