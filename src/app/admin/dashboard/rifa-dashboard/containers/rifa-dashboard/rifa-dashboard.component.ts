import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Rifa } from '../../models/rifa';
import { RelatorioRifaComponent } from '../../components/relatorio-rifa/relatorio-rifa.component';


@Component({
  selector: 'app-rifa-dashboard',
  templateUrl: './rifa-dashboard.component.html',
  // styleUrls: ['./rifa-dashboard.component.css']
})
export class RifaDashboardComponent implements OnInit {

  rifas: Rifa[];
  isModal = false;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {

  }


  openDialog() {
    const dialogRef = this.dialog.open(RelatorioRifaComponent);
    this.isModal = true;
    dialogRef.afterClosed().subscribe(result => {
      this.isModal = false;
      console.log(`Dialog result: ${result}`);
    });
  }



  acesssarRotaCadastro() {
    this.router.navigate(['rifas/cadastro'])
  }

  acessarRotaEdicao(id: number) {
    this.router.navigate([`rifas/${id}/alterar`])
  }

  acessarRotaCadastroSorteio(id: number) {
    this.router.navigate([`sorteio/cadastro/${id}`])
  }

}
