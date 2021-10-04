// import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from 'src/app/cache.service';
import { ApiDominioBaseUrl } from 'src/environments/environment';
import { Rifa } from '../models/rifa';

@Injectable({
  providedIn: 'root'
})
export class RifaService {

  private readonly endpoint = ApiDominioBaseUrl + '/Rifa';

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

  listar(pagina: number, tamPagina: number) {
    return this.http.get<Rifa[]>(this.endpoint + `/Listar/${pagina}/${tamPagina}`, this.get_headers());
  }
  public getById(rifaId: number) {
    return this.http.get<Rifa>(this.endpoint + `/${rifaId}`, this.get_headers());
  }
  public deletar(rifaId: number) {
    return this.http.delete(this.endpoint + `/${rifaId}`, this.get_headers());
  }

}
