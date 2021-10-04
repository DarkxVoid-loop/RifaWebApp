import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PremioApi } from '../../api/premio.api';

@Component({
  selector: 'app-editar-premio',
  templateUrl: './editar-premio.component.html',
  styleUrls: ['./editar-premio.component.css']
})
export class EditarPremioComponent implements OnInit {

  premioForm: FormGroup;
  id: number;
  formSubmitted = false;

  constructor(private api: PremioApi,
    private route: ActivatedRoute,
    private router: Router,
    private form: FormBuilder) { }

  ngOnInit(): void {
    this.iniciarForm();
    this.id = this.route.snapshot.params.id;
    this.preencherForm(this.id);
  }

  iniciarForm() {
    this.premioForm = this.form.group({
      sorteioId: [''],
      nome: [''],
      posicao: [''],
      descricao: ['']
    });
  }

  preencherForm(id: number) {
    this.api.getPremioById(id).subscribe((premio: any) => {
      this.id = premio.premioId
      this.premioForm.patchValue({

        sorteioId: premio.sorteioId,
        nome: premio.nome,
        posicao: premio.posicao,
        descricao: premio.descricao
      });
    });
  }

  submit() {
    if(!this.premioForm.valid){
      this.formSubmitted = true
    }else{
      this.api.editarPremio(this.id, this.premioForm.value).subscribe(response =>{
        this.voltarListagem();
      });
    }
  }

  voltarListagem(){
    this.router.navigate(['/dashboard/premios'])
  }

}
