import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensagemService } from 'src/app/shared/mensagem.sevice';
import { PremioApi } from '../../api/premio.api';
import { Premio } from '../../models/premio';

@Component({
  selector: 'app-premios-dashboard',
  templateUrl: './premios-dashboard.component.html',
})
export class PremiosDashboardComponent implements OnInit {

  premios: Premio[];

  constructor(private router: Router,
    private api: PremioApi,
    private mensagemService: MensagemService) { }

  ngOnInit(): void {
    this.getPremios();
  }

  getPremios() {
    this.api.getPremios().subscribe((response: Premio[]) => {
      this.premios = response;
    })
  }

  public async deletarPremio(id: number): Promise<void> {

    if (!await this.mensagemService.perguntaExclusao()) {
      return;
    }

    try {
      this.api.deletarPremio(id).subscribe(response => {
        this.getPremios();
      });
    } catch (error) {
      console.error(error);
    }
  }

  acessarRotaEdicao(id?: number) {
    this.router.navigate([`premios/${id}/alterar`])
  }
}
