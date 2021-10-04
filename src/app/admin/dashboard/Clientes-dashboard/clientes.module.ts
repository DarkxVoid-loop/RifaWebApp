import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { ClientesRoutingModule } from "./clientes-routing.module";
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ClientesDashboardComponent } from "./containers/clientes-dashboard/clientes-dashboard.component";

@NgModule({
    declarations: [
        ListarClientesComponent,
        ClientesDashboardComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClientesRoutingModule,
        SharedModule
    ]
})
export class ClientesModule {

}
