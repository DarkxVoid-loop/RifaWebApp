import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ListarRegulamentosComponent } from "./listar-regulamentos/listar-regulamentos.component";
import { RegulamentoDashboardComponent } from "./regulamento-dashboard.component";
import { RegulamentoComponent } from "./regulamento/regulamento.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo:'regulamento'
            },
            {
                path:'',
                component: RegulamentoDashboardComponent
            },
            {
                path: 'cadastro',
                component: RegulamentoComponent
            },
            {
                path: ':id/alterar',
                component: RegulamentoComponent
            },
            {
                path: 'listar',
                component: ListarRegulamentosComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegulamentoRoutingModule {

}