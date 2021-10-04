import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { AccountGrudServiceService } from 'src/app/http-services/account/shared/accountGrudService.service';
import { UserData } from 'src/app/models/userData';
import { timer } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formDetails:FormGroup;

  initButtonEditing = true;



  enabledToEditing(){
    if(this.initButtonEditing){
      this.initButtonEditing = false;
      this.formDetails.get('email').enable();
      this.formDetails.get('cidade').enable();
      this.formDetails.get('telefone').enable();
    }
    else{
      this.initButtonEditing = true;
      this.formDetails.get('email').disable();
      this.formDetails.get('cidade').disable();
      this.formDetails.get('telefone').disable();
    }
  }


  constructor(private formBuilder: FormBuilder, private grudService: AccountGrudServiceService) { }

  userCpf:number;
  userData = new UserData();

  async ngOnInit() {

    var clientCpf = JSON.stringify(localStorage.getItem('cpf'));

    this.formDetails = this.formBuilder.group({
      nome: [{value: null, disabled: true}, Validators.required],
      email: [{value:  null, disabled: true}, [Validators.email, Validators.required]],
      cpf: [{value:  null, disabled: true}, Validators.required],
      password: [{value: null, disabled: true}, [Validators.required, Validators.min(6)]],
      cidade: [{value: null, disabled: true}, Validators.required],
      telefone: [{value: null, disabled: true}, Validators.required],
    });


    this.grudService.getterClient(clientCpf).subscribe((dados:UserData[]) => {
      Object.assign(this.userData, dados);
      this.formDetails.get('nome').setValue(this.userData.nome);
      this.formDetails.get('email').setValue(this.userData.email);
      this.formDetails.get('cpf').setValue(this.userData.cpf);
      this.formDetails.get('cidade').setValue(this.userData.cidade);
      this.formDetails.get('telefone').setValue(this.userData.foneCelular);
      JSON.stringify(localStorage.setItem('id', String(this.userData.pessoaId)));
    });






  }

}
