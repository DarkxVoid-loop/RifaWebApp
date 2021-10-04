import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sorteio } from '../../models/sorteio';

@Component({
  selector: 'app-listar-sorteio',
  templateUrl: './listar-sorteio.component.html',
  styleUrls: ['./listar-sorteio.component.css']
})
export class ListarSorteioComponent implements OnInit {

  @Input() sorteios: Sorteio[];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();
  @Output() consultar = new EventEmitter<number>();

  
  displayedColumns: string[] = [
    'sorteioId',
    'rifaId',
    'data',
    'numeroConcurso',
    'acoes'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
