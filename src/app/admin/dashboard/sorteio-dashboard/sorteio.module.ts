import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { ListarPremiosComponent } from "./components/listar-premios/listar-premios.component";
import { ListarSorteioComponent } from "./components/listar-sorteio/listar-sorteio.component";
import { CadastrarSorteioComponent } from "./containers/cadastrar-sorteio/cadastrar-sorteio.component";
import { EditarPremioComponent } from "./containers/editar-premio/editar-premio.component";
import { SorteioDashboardComponent } from "./containers/sorteio-dashboard/sorteio-dashboard.component";
import { SorteioRoutingModule } from "./sorteio-routing.module";

@NgModule({
    declarations:[
        ListarSorteioComponent,
        CadastrarSorteioComponent,
        SorteioDashboardComponent,
        ListarPremiosComponent,
        EditarPremioComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SorteioRoutingModule,
        SharedModule
    ]
})
export class SorteioModule{

}