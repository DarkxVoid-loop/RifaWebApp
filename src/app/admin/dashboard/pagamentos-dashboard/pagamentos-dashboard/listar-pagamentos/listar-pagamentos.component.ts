import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pagamentos',
  templateUrl: './listar-pagamentos.component.html',
  styleUrls: ['./listar-pagamentos.component.css']
})
export class ListarPagamentosComponent implements OnInit {

  constructor() {
    //Object.assign(this, { multi });
  }

  pag:number;



  pagamentos = [
  { Cliente: "Fabio", WhatsApp: "11 98989898", StatusPagamento: "Waiting", DataSolicitacao: "15/08/2021", Valor: "50,00", },
  { Cliente: "Rodrigo", WhatsApp: "11 98989898", StatusPagamento: "Waiting", DataSolicitacao: "15/08/2021", Valor: "50,00", },
  { Cliente: "Carlos", WhatsApp: "11 98989898", StatusPagamento: "Waiting", DataSolicitacao: "15/08/2021", Valor: "30,00", },
  { Cliente: "Paulo", WhatsApp: "11 98989898", StatusPagamento: "Waiting", DataSolicitacao: "15/08/2021", Valor: "20,00", },
  { Cliente: "Maria", WhatsApp: "11 98989898", StatusPagamento: "Paid", DataSolicitacao: "15/08/2021", Valor: "40,00" },
  { Cliente: "Joana", WhatsApp: "11 98989898", StatusPagamento: "Paid", DataSolicitacao: "15/08/2021", Valor: "20,00" },
  { Cliente: "Joana", WhatsApp: "11 98989898", StatusPagamento: "Paid", DataSolicitacao: "15/08/2021", Valor: "10,00" },
  { Cliente: "Joana", WhatsApp: "11 98989898", StatusPagamento: "Paid", DataSolicitacao: "15/08/2021", Valor: "50,00" },
  { Cliente: "Mauro", WhatsApp: "11 98989898", StatusPagamento: "Cancelled", DataSolicitacao: "15/08/2021", Valor: "20,00" },
  { Cliente: "Mauro", WhatsApp: "11 98989898", StatusPagamento: "Cancelled", DataSolicitacao: "15/08/2021", Valor: "10,00" },
  { Cliente: "Mauro", WhatsApp: "11 98989898", StatusPagamento: "Cancelled", DataSolicitacao: "15/08/2021", Valor: "70,00" },
  { Cliente: "José", WhatsApp: "11 98989898", StatusPagamento: "Cancelled", DataSolicitacao: "15/08/2021", Valor: "5,00" }]
''
  data: [{
    "name": "Germany",
    "series": [
      {
        "name": "1990",
        "value": 62000000
      },
      {
        "name": "2010",
        "value": 73000000
      },
      {
        "name": "2011",
        "value": 89400000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "1990",
        "value": 250000000
      },
      {
        "name": "2010",
        "value": 309000000
      },
      {
        "name": "2011",
        "value": 311000000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "1990",
        "value": 58000000
      },
      {
        "name": "2010",
        "value": 50000020
      },
      {
        "name": "2011",
        "value": 58000000
      }
    ]
  },
  {
    "name": "UK",
    "series": [
      {
        "name": "1990",
        "value": 57000000
      },
      {
        "name": "2010",
        "value": 62000000
      }
    ]
  }]

  view: [any, any] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void{

  }

  voltarPagina(){

  }
  proximaPagina(){

  }

}
