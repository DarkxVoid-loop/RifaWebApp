import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarRifaComponent } from "./containers/cadastrar-rifa/cadastrar-rifa.component";
import { RifaDashboardComponent } from "./containers/rifa-dashboard/rifa-dashboard.component";
import { RelatorioRifaComponent } from "./components/relatorio-rifa/relatorio-rifa.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'rifas',
        component: RifaDashboardComponent
    }, {
        path: 'cadastro',
        component: CadastrarRifaComponent
    }, {
        path: ':id/alterar',
        component: CadastrarRifaComponent
    },
    {
        path: 'relatorio',
        component: RelatorioRifaComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class RifaRoutingModule {

}