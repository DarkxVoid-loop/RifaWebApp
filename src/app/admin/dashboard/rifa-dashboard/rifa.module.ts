import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { ListarRifasComponent } from "./components/listar-rifas/listar-rifas.component";
import { CadastrarRifaComponent } from "./containers/cadastrar-rifa/cadastrar-rifa.component";
import { RifaDashboardComponent } from "./containers/rifa-dashboard/rifa-dashboard.component";
import { RelatorioRifaComponent } from "./components/relatorio-rifa/relatorio-rifa.component";
import { RifaRoutingModule } from "./rifa-routing.module";


@NgModule({
    declarations: [
        RifaDashboardComponent,
        CadastrarRifaComponent,
        ListarRifasComponent,
        RelatorioRifaComponent
          
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RifaRoutingModule,
        SharedModule,
    ]
})
export class RifaModule {

}
