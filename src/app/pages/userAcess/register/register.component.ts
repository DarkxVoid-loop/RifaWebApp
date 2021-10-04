import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AccountService } from 'src/app/http-services/account/shared/account.service';
import { MustMatch } from 'src/app/http-services/account/shared/passwordValidatorMustmatch';
import { infoAccount } from 'src/app/models/infoAccount';
import { RegisterAuth } from 'src/app/models/userAuth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  account: RegisterAuth;
  infoAccount: infoAccount;

  constructor(private formBuilder: FormBuilder, private service: AccountService, private router:Router) { }

  ngOnInit() {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    })*/


    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      cpf: [null, Validators.required],
      password: [null, [Validators.required, Validators.min(6)]],
      rePassword: [null, Validators.required],
      cidade: [null, Validators.required],
      telefone: [null, Validators.required],
      checkRegulamento: [false, Validators.pattern('true')],
    }, {
      validator: MustMatch('password', 'rePassword')
    });


  }

  onSubmit(){
    this.account = {
      cpf: this.formulario.controls['cpf'].value,
      senha: this.formulario.controls['password'].value,
      confirmaSenha: this.formulario.controls['rePassword'].value,
      celular: this.formulario.controls['telefone'].value,
    }

    this.infoAccount = {
      nome: this.formulario.controls['nome'].value,
      email: this.formulario.controls['email'].value,
      foneWhats: this.formulario.controls['telefone'].value,
      foneCelular: this.formulario.controls['telefone'].value,
      cidade: this.formulario.controls['cidade'].value,
      cpf: this.formulario.controls['cpf'].value,
      apelido: this.formulario.controls['nome'].value,
    }


    this.service.createAccountInAuth(this.account).then(
      () => {
        const contador = timer(300);
        contador.subscribe((n) => {
          this.service.createAccount(this.infoAccount);
          this.router.navigate(['userAcess/login']);
        })
      }
    );
  }

}
