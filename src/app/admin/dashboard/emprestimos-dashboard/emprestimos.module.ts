import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { EmprestimosRoutingModule } from "./emprestimos-routing.module";
import { EmprestimosDashboardComponent } from './containers/emprestimos-dashboard/emprestimos-dashboard.component';
import { ListarEmprestimosPessoasSolicitacoesComponent } from './components/listar-emprestimos-pessoas-solicitacoes/listar-emprestimos-pessoas-solicitacoes.component';
import { ListarEmprestimosSolicitacoesPessoaComponent } from './components/listar-emprestimos-solicitacoes-pessoa/listar-emprestimos-solicitacoes-pessoa.component';
import { ListarEmprestimosPessoaComponent } from './components/listar-emprestimos-pessoa/listar-emprestimos-pessoa.component';

@NgModule({
    declarations: [
    EmprestimosDashboardComponent,
    ListarEmprestimosPessoasSolicitacoesComponent,
    ListarEmprestimosSolicitacoesPessoaComponent,
    ListarEmprestimosPessoaComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        EmprestimosRoutingModule,
        SharedModule

    ]
})
export class EmprestimosModule {

}