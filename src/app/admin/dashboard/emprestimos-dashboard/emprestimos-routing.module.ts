import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmprestimosDashboardComponent } from "./containers/emprestimos-dashboard/emprestimos-dashboard.component";

const routes: Routes = [
    {
        path:'',
        redirectTo: 'emprestimos',
        component: EmprestimosDashboardComponent
    },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class EmprestimosRoutingModule{

}