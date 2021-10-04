import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rifa } from 'src/app/models/rifa';
import { SorteioApi } from '../../api/sorteio.api';
import { Sorteadores } from '../../models/sorteadores';
import { RifasService } from '../../services/rifas.services';
import * as moment from 'moment';
import { PremioApi } from '../../../premios-dashboard/api/premio.api';


@Component({
  selector: 'app-cadastrar-sorteio',
  templateUrl: './cadastrar-sorteio.component.html',
  styleUrls: ['./cadastrar-sorteio.component.css']
})
export class CadastrarSorteioComponent implements OnInit {

  sorteioForm: FormGroup;
  premioForm: FormGroup;
  rifas: Rifa[];
  id: number;
  formSubmitted = false;
  isPremio = false;

  sorteadores = Sorteadores;


  constructor(
    private form: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: RifasService,
    private apiSorteio: SorteioApi,
    private apiPremio: PremioApi) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.getRifas();

    if (this.route.snapshot.params.id) {
      this.id = this.route.snapshot.params.id;
      this.preencherForm(this.id);
    }
  }

  getRifas() {
    this.service.getRifas().subscribe((response: Rifa[]) => {
      this.rifas = response;
    })
  }

  private iniciarForm() {
    this.sorteioForm = this.form.group({
      sorteadorId: [''],
      rifaId: [''],
      data: [''],
      numeroConcurso: [''],
    });
  }

  private iniciarFormPremio() {
    this.premioForm = this.form.group({
      sorteioId: [this.id],
      nome: [''],
      posicao: [''],
      descricao: ['']
    })
  }

  private preencherForm(id: number) {

    this.isPremio = true;
    this.iniciarFormPremio();

    this.apiSorteio.getSorteioById(id).subscribe((sorteio: any) => {
      this.id = sorteio.sorteioId;

      let sorteioData = moment(sorteio.data).format('DD/MM/YYYY');

      this.sorteioForm.patchValue({
        data: sorteio.data,
        rifaId: sorteio.rifaId,
        sorteadorId: sorteio.sorteadorId,
        numeroConcurso: sorteio.numeroConcurso,
      });
    });
  }

  submit() {
    if (!this.sorteioForm.valid) {
      this.formSubmitted = true;
    } else {
      this.id ? this.apiSorteio.editarSorteio(this.id, this.sorteioForm.value).subscribe(response => {
        this.apiPremio.salvarPremio(this.premioForm.value).subscribe(response => {
        });
        this.voltarListagem();
      }) : this.apiSorteio.salvarSorteio(this.sorteioForm.value).subscribe(response => {
        this.voltarListagem();
      });

    }
  }

  voltarListagem() {
    this.router.navigate(['/dashboard/sorteios'])
  }

}
