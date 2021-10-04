import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiDominioBaseUrl } from 'src/environments/environment';
import { CacheService } from '../cache.service';


@Injectable({
  providedIn: 'root'
})
export class configRifa {
  private readonly endpoint = ApiDominioBaseUrl + '/configRifa';
  constructor(private http: HttpClient, private cache: CacheService) { }

  get_headers() {
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Bearer " + btoa(this.cache.getToken()));
    const httpOptions = {
      headers: headers_object
    };
    return httpOptions;
  }
  listarTodosProdutos() {
    this.http.get<any>(`${ this.endpoint }/produtos`)
              .subscribe(resultado => {});
  }
  CadastrarRifaComponent() {
    var CadastrarRifaComponent = new CadastrarRifaComponent();


    this.http.post<any>(`${ this.endpoint}/cadastar-rifa`, CadastrarRifaComponent)
  }
}
