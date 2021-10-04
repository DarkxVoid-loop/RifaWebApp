import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiDominioBaseUrl } from 'src/environments/environment';
import { Rifa } from '../models/rifa';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly endpointDomain = ApiDominioBaseUrl;

  constructor(private http: HttpClient) { }

  getterRifas(){
    return this.http.get<Rifa[]>(`${this.endpointDomain}/Jogo/Rifa/Listar/1/20`);
  }

  getterNumberPlayed(id: any){
    return this.http.get<any[]>(`${this.endpointDomain}/Jogo/Rifa/${id}/Numeros/Bloqueados`);
  }

}
