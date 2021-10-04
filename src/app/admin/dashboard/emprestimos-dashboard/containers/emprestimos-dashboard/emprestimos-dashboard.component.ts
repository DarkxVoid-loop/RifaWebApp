import { Component, OnInit } from '@angular/core';
import { EmprestimosSolicitacoesApi } from '../../api/emprestimos-solicitacoes.api';
import { EmprestimosPorPessoa, EmprestimosSolicitacoesPorPessoa } from '../../models/emprestimos-solicitacoes';

@Component({
  selector: 'app-emprestimos-dashboard',
  templateUrl: './emprestimos-dashboard.component.html',
  styleUrls: ['./emprestimos-dashboard.component.css']
})
export class EmprestimosDashboardComponent implements OnInit {

  emprestimosSolicitacoesPorPessoa: EmprestimosSolicitacoesPorPessoa[];

  emprestimoPorPessoa: EmprestimosPorPessoa[];
  pessoaId: number;
  solicitacaoId: number;

  constructor(private api: EmprestimosSolicitacoesApi) { }

  ngOnInit(): void {

  }

  consultarEmprestimoPessoa(event) {
    this.pessoaId = event;
    this.getEmprestimosSolicitacoesPorPessoa(event);
    this.getEmprestimoPorPessoa(event);
  }

  getEmprestimosSolicitacoesPorPessoa(id: number) {
    this.api.getEmprestimosSolicitacoesPorPessoa(id).subscribe((response: EmprestimosSolicitacoesPorPessoa[]) => {
      if (response) {
        this.emprestimosSolicitacoesPorPessoa = response
      }
    });
  }

  getEmprestimoPorPessoa(id: number) {
    this.api.getEmpretimosPorPessoa(id).subscribe((response: EmprestimosPorPessoa[]) => {
      if (response) {
        this.emprestimoPorPessoa = response;
      }
    })
  }

  aceitarSolicitacaoEmprestimo(event) {
    this.api.updateEmprestimoSolicitacaoAceitar(event).subscribe(response => {
    });
    this.getEmprestimosSolicitacoesPorPessoa(this.pessoaId);
    this.getEmprestimosSolicitacoesPorPessoa(this.pessoaId);
  }

  recusarSolicitacaoEmprestimo(event) {

    this.api.updateEmprestimoSolicitacaoRecusar(event).subscribe(response => {
    });
    this.getEmprestimosSolicitacoesPorPessoa(this.pessoaId);
    this.getEmprestimosSolicitacoesPorPessoa(this.pessoaId);
  }

}
