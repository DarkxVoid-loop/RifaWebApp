import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RifaApi } from '../../api/rifa.api';
import * as moment from 'moment';
import { celMask } from 'src/app/shared/mask';
import { StatusRifa, StatusVisualizacaoRifa } from '../../models/status-rifa';

@Component({
  selector: 'app-cadastrar-rifa',
  templateUrl: './cadastrar-rifa.component.html',
  styleUrls: ['./cadastrar-rifa.component.css']
})
export class CadastrarRifaComponent implements OnInit {

  rifaForm: FormGroup;
  formSubmitted = false;
  id: number;
  celMask = celMask;
  statusVisualizacaoRifas = StatusVisualizacaoRifa;
  statusRifas = StatusRifa;

  constructor(
    private form: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private api: RifaApi) { }

  ngOnInit(): void {
    this.iniciarForm();

    if (this.route.snapshot.params.id) {
      this.id = this.route.snapshot.params.id;
      this.preencherForm(this.id);
    }

  }

  private iniciarForm() {
    this.rifaForm = this.form.group({
      titulo: [''],
      descricao: [''],
      numeroMax: [''],
      numeroMin: [''],
      preco: [''],
      whatsAppContato: [''],
      dataFimJogadas: [''],
      lancamento: [''],
      statusVisualizacaoId: [''],
      statusRifaId: [''],
      regulamentoId: [1]
    })
  }

  private preencherForm(id: number) {
    this.api.getRifaById(id).subscribe((rifa: any) => {
      this.id = rifa.rifaId;

      const dataFimJogadas = moment(rifa.dataFimJogadas).format('YYYY-MM-DD');
      const lancamento = moment(rifa.lancamento).format('YYYY-MM-DD');

      this.rifaForm.patchValue({
        titulo: rifa.titulo,
        descricao: rifa.descricao,
        numeroMax: rifa.numeroMax,
        numeroMin: rifa.numeroMin,
        preco: rifa.preco,
        whatsAppContato: rifa.whatsAppContato,
        dataFimJogadas: dataFimJogadas,
        lancamento: lancamento,
        statusVisualizacaoId: rifa.statusVisualizacaoId,
        statusRifaId: rifa.statusRifaId,
        regulamentoId: 1

      });
    });

  }

  submit() {
    if (!this.rifaForm.valid) {
      this.formSubmitted = true;
    } else {
      this.id ? this.api.editarRifa(this.id, this.rifaForm.value).subscribe(response => {
        this.voltarListagem();
      }) : this.api.salvarRifa(this.rifaForm.value).subscribe((response) => {
        this.voltarListagem();
      });
    }
  }

  voltarListagem() {
    this.router.navigate(['/dashboard/rifas'])
  }

}
