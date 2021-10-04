import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Type } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/cache.service';
import { LoginAuth, RegisterAuth } from 'src/app/models/userAuth';
import { ApiAuthBaseUrl, ApiDominioBaseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //backend endpoints
  private readonly endpoint = ApiAuthBaseUrl + '/Usuarios';
  private readonly endpointDomain = ApiDominioBaseUrl;

  //get token with localStorage
  private token = JSON.parse(localStorage.getItem('token'));

  //controller user is logged
  private userIsLogged: boolean = false;
  showItemsInNav = new EventEmitter<boolean>();


  constructor(private http: HttpClient, private cache: CacheService, private router: Router) {
  }


  //this method is responsibility for creating account credential in apiAuth
  public async createAccountInAuth(account: any){

    const result = this.http.post<RegisterAuth>(this.endpoint + `/Cadastro/Dev`, JSON.stringify(account), {headers: new HttpHeaders(
      {
      'Content-Type': 'application/json',
      }
    )}).subscribe( result => {
      let _result = result;
      localStorage.setItem('token', JSON.stringify(_result['token']));
    });

    return result;
  }

  //this method is responsibility for creation account in apiDomain
  public async createAccount(infoAccount:any){
    const result = await this.http.post<RegisterAuth>(this.endpointDomain + `/Clientes`, JSON.stringify(infoAccount), {headers: new HttpHeaders(
      {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
      }
    )}).subscribe( result => {
      let _result = result;
      localStorage.setItem('token', JSON.stringify(_result['token']));
    });

    return result;
  }

  //Esse metodo é usado para login do usuario //This method is using for user login
  async loginAccountInAuth(account: any){
    const result = this.http.post<LoginAuth>(`${this.endpoint}/login`, account, {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
        }
      )
    }).subscribe(result => {
      if(result["login"]["role"] == "Cliente"){
        localStorage.setItem('token', JSON.stringify(result['token']));
        this.userIsLogged = true;
        this.showItemsInNav.emit(true);
        this.router.navigate(['user/perfil']);
      } else if(result["login"]["role"] == "Admin"){
        localStorage.setItem('adminToken', JSON.stringify(result['token']));
        this.router.navigate(['dashboard']);
        this.userIsLogged = true;
        this.showItemsInNav.emit(true);
      }
    })
    return result;
  }

  async loggout(){
    JSON.stringify(localStorage.removeItem('token'));
    //await window.location.reload();
    this.userIsLogged = false;
    this.showItemsInNav.emit(false);
    await this.router.navigate(['userAcess/login']);
  }


  verifyToken(): boolean{
    if(JSON.parse(localStorage.getItem('token'))){
      return true;
    } else {
      return false;
    }
  }


}
