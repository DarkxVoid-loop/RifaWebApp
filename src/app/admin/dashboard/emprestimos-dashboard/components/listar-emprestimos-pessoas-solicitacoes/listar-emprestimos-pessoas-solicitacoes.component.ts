import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmprestimosSolicitacoesApi } from '../../api/emprestimos-solicitacoes.api';
import { EmprestimosPessoasSolicitacoes } from '../../models/emprestimos-solicitacoes';

@Component({
  selector: 'app-listar-emprestimos-pessoas-solicitacoes',
  templateUrl: './listar-emprestimos-pessoas-solicitacoes.component.html',
  styleUrls: ['./listar-emprestimos-pessoas-solicitacoes.component.css']
})
export class ListarEmprestimosPessoasSolicitacoesComponent implements OnInit, AfterViewInit {

  emprestimosSolicitacoesPessoas: EmprestimosPessoasSolicitacoes[] = [];

  displayedColumns: string[] = [
    'pessoaId',
    'nome',
    'foneCelular',
    'cidade',
    'acoes'
  ];

  dataSource = new MatTableDataSource<EmprestimosPessoasSolicitacoes>(this.emprestimosSolicitacoesPessoas);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Output() consultar = new EventEmitter<number>();

  constructor(private api: EmprestimosSolicitacoesApi) { }

  ngOnInit(): void {
    this.getEmprestimosPessoasSolicitacoes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getEmprestimosPessoasSolicitacoes() {
    this.api.getEmprestimosPessoasSolicitacoes().subscribe((response: EmprestimosPessoasSolicitacoes[]) => {
      this.dataSource.data = response;
    });
  }

}
