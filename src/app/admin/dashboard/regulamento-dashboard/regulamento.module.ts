import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListarRegulamentosComponent } from "./listar-regulamentos/listar-regulamentos.component";
import { RegulamentoDashboardComponent } from "./regulamento-dashboard.component";
import { RegulamentoRoutingModule } from "./regulamento-routing.module";
import { RegulamentoComponent } from "./regulamento/regulamento.component";

@NgModule({
    declarations:[
        RegulamentoComponent,
        ListarRegulamentosComponent,
        RegulamentoDashboardComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RegulamentoRoutingModule
    ],
    exports:[]
})
export class RegulamentoModule{

}