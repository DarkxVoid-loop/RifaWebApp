import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginAuth } from 'src/app/models/userAuth';
import { AccountService } from 'src/app/http-services/account/shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {
  loginModel: LoginAuth;
  adminLogin: FormGroup;


  constructor( private formBuilder: FormBuilder, private service:AccountService, private router: Router,) { }

  ngOnInit() {
    this.adminLogin = this.formBuilder.group({
      cpf: [null, Validators.required],
      password: [null, [Validators.required]],
    }, {
    });
  }

  onSubmit(){
    if(this.adminLogin.controls['cpf'].value != "" && this.adminLogin.controls['password'].value != ""){
      this.loginModel = {
        cpf: this.adminLogin.controls['cpf'].value,
        senha: this.adminLogin.controls['password'].value
      }


      this.service.loginAccountInAuth(this.loginModel).then(
        ()=>{
          JSON.stringify(localStorage.setItem('cpf', `${this.adminLogin.controls['cpf'].value}`));
        }
      );

    } else{
      console.log(`error, impossivel fazer login, usuario não encontrado!`);
    }
  }

}
