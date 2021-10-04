import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/cache.service';
import { Rifa } from 'src/app/models/rifa';
import * as moment from 'moment';

@Component({
  selector: 'app-relatorio-rifa',
  templateUrl: './relatorio-rifa.component.html',
  // styleUrls: ['./relatorio-rifa.component.css']
})
export class RelatorioRifaComponent implements OnInit {

  constructor(private cache: CacheService) { }

  rifa: Rifa;
  dataFimJogadas: string;
  dataFimJogadasHora: number;
  lancamento: string;
  lancamentoHora: number;

  clientes = [
    { Nome: "Fabio", Cidade: "São Paulo", Telefone: "11 9898-9595", Numeros: "5", ValorPago: "50,00", Divida:"Sim" },
    { Nome: "Carla", Cidade: "Rio de Janeiro", Telefone: "11 9898-9595", Numeros: "3", ValorPago: "30,00", Divida:"Não" },
    { Nome: "José", Cidade: "Rio de Janeiro", Telefone: "11 9898-9595", Numeros: "3", ValorPago: "30,00", Divida:"Não" },
    { Nome: "Paulo", Cidade: "Brasilia", Telefone: "11 9898-9595", Numeros: "1", ValorPago: "10,00", Divida:"Não" },
    { Nome: "Maria", Cidade: "Brasilia", Telefone: "11 9898-9595", Numeros: "1", ValorPago: "10,00", Divida:"Não" },
    { Nome: "Bruno", Cidade: "São Paulo", Telefone: "11 9898-9595", Numeros: "1", ValorPago: "10,00", Divida:"Sim" },
    { Nome: "Francisco", Cidade: "São Paulo", Telefone: "11 9898-9595", Numeros: "1", ValorPago: "10,00", Divida:"Não" }
  ]



  setData(time, prefix = "") {
    new Date(this.rifa.lancamento).toLocaleDateString(), new Date(this.rifa.lancamento).getHours()
  }
  setDatas() {
    this.dataFimJogadas = new Date(this.rifa.dataFimJogadas).toLocaleDateString();
    this.dataFimJogadasHora = new Date(this.rifa.dataFimJogadas).getHours();
    this.dataFimJogadas = new Date(this.rifa.lancamento).toLocaleDateString();
    this.dataFimJogadasHora = new Date(this.rifa.lancamento).getHours();
  }

  ngOnInit(): void {
    this.rifa = this.cache.getRifa();
    console.log(moment(new Date()).format('DD/MM/YYYY, h:mm:ss'))
  }

  public formataData(date) {
    return moment(new Date()).format('DD/MM/YYYY, h:mm:ss');
  }

  teste() {
    this.clientes.forEach(element => {
      element.Cidade
      element.Nome
      element.Numeros
      element.Telefone
      element.ValorPago
    });
  }
  proximaPagina() {

  }
  voltarPagina()
  {

  }

}
