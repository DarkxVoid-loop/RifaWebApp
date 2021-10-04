import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiDominioBaseUrl } from 'src/environments/environment';
import { Regulamento } from '../models/regulamento';

@Injectable({
  providedIn: 'root'
})
export class RegulamentoService {

  private readonly endpointDomain = ApiDominioBaseUrl;

  constructor(private http:HttpClient) { }


  getRegumento(){
    return this.http.get<Regulamento[]>(`${this.endpointDomain}/Regulamento/1`);
}
}
