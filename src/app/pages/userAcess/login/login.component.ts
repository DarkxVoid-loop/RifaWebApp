import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AccountService } from 'src/app/http-services/account/shared/account.service';
import { LoginAuth } from 'src/app/models/userAuth';
import { NaviControllerItemsService } from 'src/app/shared/naviControllerItems.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: LoginAuth;
  login:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service:AccountService,
    private router: Router,
    ) {}

  ngOnInit() {

    this.login = this.formBuilder.group({
      cpf: [null, Validators.required],
      password: [null, [Validators.required]],
    }, {
    });

  }

  async onSubmit(){
    if(this.login.controls['cpf'].value != "" && this.login.controls['password'].value != ""){
      this.loginModel = {
        cpf: this.login.controls['cpf'].value,
        senha: this.login.controls['password'].value
      }


      this.service.loginAccountInAuth(this.loginModel);
      JSON.stringify(localStorage.setItem('cpf', `${this.login.controls['cpf'].value}`));

    } else{
      console.log(`error, impossivel fazer login, usuario não encontrado!`);
    }
  }

}
