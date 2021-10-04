import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarPremiosComponent } from "./components/listar-premios/listar-premios.component";
import { CadastrarSorteioComponent } from "./containers/cadastrar-sorteio/cadastrar-sorteio.component";
import { EditarPremioComponent } from "./containers/editar-premio/editar-premio.component";
import { SorteioDashboardComponent } from "./containers/sorteio-dashboard/sorteio-dashboard.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'sorteios',
        component: SorteioDashboardComponent,
    },{
        path: 'cadastro',
        component: CadastrarSorteioComponent
    },{
        path: ':id/alterar',
        component: CadastrarSorteioComponent
    },{
        path: ':id/premio/alterar',
        component: EditarPremioComponent
    },
    {
        path:'premio',
        component: ListarPremiosComponent
    }
]

@NgModule({

    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class SorteioRoutingModule {

}