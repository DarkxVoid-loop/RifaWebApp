import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { SharedModule } from "src/app/shared/shared.module";
import { ListarPagamentosComponent } from "./listar-pagamentos/listar-pagamentos.component";
import { PagamentosDashboardComponent } from "./pagamentos-dashboard.component";
import { PagamentosRoutingModule } from "./pagamentos-routing.module";
import { PerfilClienteComponent } from "./perfil-cliente/perfil-cliente.component";

@NgModule({
    declarations:[
        PagamentosDashboardComponent,
        PerfilClienteComponent,
        ListarPagamentosComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PagamentosRoutingModule,
        SharedModule  
    ],

})
export class PagamentosModule{

}