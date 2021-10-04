import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmprestimosSolicitacoesPorPessoa } from '../../models/emprestimos-solicitacoes';

@Component({
  selector: 'app-listar-emprestimos-solicitacoes-pessoa',
  templateUrl: './listar-emprestimos-solicitacoes-pessoa.component.html',
  styleUrls: ['./listar-emprestimos-solicitacoes-pessoa.component.css']
})
export class ListarEmprestimosSolicitacoesPessoaComponent implements OnInit {

 @Input() emprestimosSolicitacoesPorPessoa: EmprestimosSolicitacoesPorPessoa[] = [];
 @Output() aceitar = new EventEmitter<number>();
 @Output() recusar = new EventEmitter<number>();


  displayedColumns: string[] = [
    'solicitacaoId',
    'data',
    'statusId',
    'valor',
    'acoes'
  ];



  constructor() {}

  ngOnInit(): void {
   
  }
}

