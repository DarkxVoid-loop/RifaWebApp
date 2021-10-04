import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiDominioBaseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

constructor(private http: HttpClient) { }


  private readonly endpointDomain = ApiDominioBaseUrl;

  private token = JSON.parse(localStorage.getItem('token'));



  getterHistoryEmprestimo(userId: string){
    return this.http.get<any[]>(`${this.endpointDomain}/Emprestimo/Pessoa/${encodeURIComponent(userId)}/Listar`, {headers: new HttpHeaders(
      {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
      }
    )});
  }

}
