import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarPagamentosComponent } from "./listar-pagamentos/listar-pagamentos.component";
import { PagamentosDashboardComponent } from "./pagamentos-dashboard.component";
import { PerfilClienteComponent } from "./perfil-cliente/perfil-cliente.component";

const routes: Routes = [

    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'regulamento'
            },
            {
                path: '',
                component: PagamentosDashboardComponent
            },
            {
                path: 'perfil-cliente',
                component: PerfilClienteComponent
            },
            {
                path: 'listar',
                component: ListarPagamentosComponent
            }
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagamentosRoutingModule {

}