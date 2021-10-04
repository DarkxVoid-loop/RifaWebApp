import { Component, OnInit } from '@angular/core';
import { ClientesApi } from '../../api/clientes.api';
import { Clientes } from '../../models/clientes';

@Component({
  selector: 'app-clientes-dashboard',
  templateUrl: './clientes-dashboard.component.html',
  styleUrls: ['./clientes-dashboard.component.css']
})
export class ClientesDashboardComponent implements OnInit {

  clientes: Clientes[];

  constructor(private api: ClientesApi) { }

  ngOnInit(): void {
    this.getCliente();
  }

  getCliente() {
    this.api.getClientes().subscribe((response: Clientes[]) => {
      this.clientes = response;
    });
  }





}
