import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarPremioComponent } from "./containers/editar-premio/editar-premio.component";
import { PremiosDashboardComponent } from "./containers/premios-dashboad/premios-dashboard.component";
import { PremioRifaComponent } from "./premio-rifa/premio-rifa.component";


const routes: Routes = [

    {
        path: '',
        redirectTo: 'premios',
        component: PremiosDashboardComponent
    },{
        path: 'premio-rifa',
        component: PremioRifaComponent
    },{
        path:':id/alterar',
        component: EditarPremioComponent
    }

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PremiosRoutingModule {

}