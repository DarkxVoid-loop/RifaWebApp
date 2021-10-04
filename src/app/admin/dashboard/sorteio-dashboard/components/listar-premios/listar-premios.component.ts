import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Premio } from '../../models/sorteio';


@Component({
  selector: 'app-listar-premios',
  templateUrl: './listar-premios.component.html',
  styleUrls: ['./listar-premios.component.css']
})
export class ListarPremiosComponent implements OnInit {

  @Input() premios: Premio[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();

  displayedColumns: string[] = [
    'premioId',
    'nome',
    'posicao',
    'descricao',
    'acoes'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
