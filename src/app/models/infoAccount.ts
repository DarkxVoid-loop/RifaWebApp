export class infoAccount{
  nome:string;
  email:string;
  foneWhats:number;
  foneCelular:number;
  cidade:string;
  cpf:number;
  apelido:string;

  constructor(nome:string, email:string, foneWhats:number, foneCelular:number, cidade:string, cpf:number, apelido:string){
    this.nome = nome;
    this.email = email;
    this.foneWhats = foneWhats;
    this.foneCelular = foneCelular;
    this.cidade = cidade;
    this.cpf = cpf;
    this.apelido = apelido;
  }
}
