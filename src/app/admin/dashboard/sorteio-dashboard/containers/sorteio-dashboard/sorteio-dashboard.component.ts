import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rifa } from 'src/app/models/rifa';
import { MensagemService } from 'src/app/shared/mensagem.sevice';
import { SorteioApi } from '../../api/sorteio.api';
import { Premio, Sorteio } from '../../models/sorteio';

@Component({
  selector: 'app-sorteio-dashboard',
  templateUrl: './sorteio-dashboard.component.html',
  styleUrls: ['./sorteio-dashboard.component.css']
})
export class SorteioDashboardComponent implements OnInit {

  sorteios: Sorteio[];
  premios: Premio[];
  rifas: Rifa[];
  id: number;

  constructor(private api: SorteioApi,
    private router: Router,
    private mensagemService: MensagemService) { }

  ngOnInit(): void {
    this.getSorteioByRifaId();
  }

  getSorteioByRifaId() {

    this.api.getSorteios().subscribe((response: Sorteio[]) => {
      this.sorteios = response;
    });
  }

  getPremioBySorteioId(event){
    this.api.getPremioBySorteioId(event).subscribe((response: Premio[]) => {
      this.premios = response;
    });
  }

  public async deletarSorteio(id: number): Promise<void> {

    if (!await this.mensagemService.perguntaExclusao()) {
      return;
    }

    try {
      this.api.deletarSorteio(id).subscribe(response => {
        this.getSorteioByRifaId();
      });
    } catch (error) {
      console.error(error);
    }
  }

  public async deletarPremio(id: number): Promise<void> {

    if (!await this.mensagemService.perguntaExclusao()) {
      return;
    }

    try {
      this.api.deletarPremio(id).subscribe(response => {
        this.getPremioBySorteioId(id);
      });
    } catch (error) {
      console.error(error);
    }
  }

  acesssarRotaCadastro() {
    this.router.navigate(['sorteios/cadastro'])
  }

  acessarRotaEdicao(id: number) {
    this.router.navigate([`sorteios/${id}/alterar`])
  }

    acessarRotaEdicaoPremio(id: number) {
    this.router.navigate([`sorteios/${id}/premio/alterar`])
  }
}
