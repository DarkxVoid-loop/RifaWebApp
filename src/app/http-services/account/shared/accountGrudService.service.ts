import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/models/userData';
import { ApiDominioBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountGrudServiceService {

  private readonly endpointDomain = ApiDominioBaseUrl;

  private token = JSON.parse(localStorage.getItem('token'));



  constructor(private http: HttpClient) { }

  public getterClient(clientCpf:string){
    var _token = JSON.parse(localStorage.getItem('token'));
    var _userCpf = clientCpf.substring(1, 12);

    return this.http.get<UserData[]>(`${this.endpointDomain}/Clientes/${parseInt(_userCpf)}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${_token}`
      })
    })
  }

  public getterSaldo(userId: string){
    return this.http.get<any[]>(`${this.endpointDomain}/Credito/Pix/Saldo/Atualizar/${encodeURIComponent(userId)}`, {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })});
  }
}
