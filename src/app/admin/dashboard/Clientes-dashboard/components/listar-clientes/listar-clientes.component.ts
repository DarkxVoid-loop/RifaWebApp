import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clientes } from '../../models/clientes';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  @Input() clientes: Clientes[] = [];
  @Output() relatorio = new EventEmitter<number>();


  displayedColumns: string[] = ['pessoaId', 'nome', 'cpf', 'foneWhats', 'acoes'];


  constructor() { }

  ngOnInit(): void {
  }


}
