import { Component, Input, OnInit } from '@angular/core';
import { EmprestimosPorPessoa } from '../../models/emprestimos-solicitacoes';

@Component({
  selector: 'app-listar-emprestimos-pessoa',
  templateUrl: './listar-emprestimos-pessoa.component.html',
  styleUrls: ['./listar-emprestimos-pessoa.component.css']
})
export class ListarEmprestimosPessoaComponent implements OnInit {


  @Input() emprestimoPorPessoa: EmprestimosPorPessoa[];

  displayedColumns: string[] = [
    'emprestimoId',
    'data',
    'valor',
    'pago'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
