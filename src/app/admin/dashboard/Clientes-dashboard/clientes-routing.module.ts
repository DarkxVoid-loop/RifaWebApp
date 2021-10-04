import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesDashboardComponent } from "./containers/clientes-dashboard/clientes-dashboard.component";


const routes: Routes = [

    {
        path: '',
        redirectTo: 'clientes',
        component: ClientesDashboardComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule {

}
