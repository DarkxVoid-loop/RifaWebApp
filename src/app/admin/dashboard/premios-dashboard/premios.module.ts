import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { ListarPremiosComponent } from './components/listar-premios/listar-premios.component';
import { PremiosDashboardComponent } from "./containers/premios-dashboad/premios-dashboard.component";
import { PremioRifaComponent } from "./premio-rifa/premio-rifa.component";
import { PremiosRoutingModule } from "./premios-routing.module";
import { EditarPremioComponent } from './containers/editar-premio/editar-premio.component';

@NgModule({
    declarations: [
        PremiosDashboardComponent,
        PremioRifaComponent,
        ListarPremiosComponent,
        EditarPremioComponent,
   
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PremiosRoutingModule,
        SharedModule
    ]
})
export class PremiosModule {

}