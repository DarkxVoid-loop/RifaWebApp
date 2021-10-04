import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CacheService } from 'src/app/cache.service';
import { MensagemService } from 'src/app/shared/mensagem.sevice';
import { RifaApi } from '../../api/rifa.api';
import { Rifa } from '../../models/rifa';

@Component({
  selector: 'app-listar-rifas',
  templateUrl: './listar-rifas.component.html',
  styleUrls: ['./listar-rifas.component.css']
})
export class ListarRifasComponent implements OnInit, AfterViewInit {

  rifas: Rifa[] = [];
  @Output() editar = new EventEmitter<number>();
  @Output() remover = new EventEmitter<number>();
  @Output() relatorio = new EventEmitter<number>();
  @Output() sorteio = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'rifaId',
    'titulo',
    'preco',
    'lancamento',
    'dataFimJogadas',
    'acoes'
  ];
   
  dataSource = new MatTableDataSource<Rifa>(this.rifas);


  constructor(private api: RifaApi, private mensagemService: MensagemService) { }


  ngOnInit(): void {
    this.getRifas();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getRifas() {
    this.api.getRifas().subscribe((response: Rifa[]) => {
      this.rifas = response;
      this.dataSource.data = this.rifas;
    })
  }

  async deletarRifa(id: number): Promise<void> {

    if (!await this.mensagemService.perguntaExclusao()) {
      return;
    }

    try {
      this.api.deletarRifa(id).subscribe(response => {
        this.getRifas();
      });

    } catch (error) {
      console.error(error);
    }
  }
}
