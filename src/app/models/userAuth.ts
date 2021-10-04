export class RegisterAuth{
  cpf:number;
  senha:string;
  confirmaSenha:string;
  celular: number;

  constructor(cpf:number, password:string, rePassword:string, celular: number){
    this.cpf = cpf;
    this.senha = password;
    this.confirmaSenha = rePassword;
    this.celular = celular;
 }
}


export class LoginAuth{
  cpf:number;
  senha:string;

  constructor(cpf:number, senha:string){
    this.cpf = cpf;
    this.senha = senha;
  }
}
