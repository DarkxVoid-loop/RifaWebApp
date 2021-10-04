// import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from 'src/app/cache.service';
import { ApiDominioBaseUrl } from 'src/environments/environment';
import { Premio } from '../models/premio';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  private readonly endpoint = ApiDominioBaseUrl + '/Premio';

  constructor(private http: HttpClient, private cache: CacheService) { }

  get_headers() {
    var headers_object = new HttpHeaders()
    .set('Authorization',  `Bearer ${this.cache.getToken()}`);
    const httpOptions = {
      headers: headers_object
    };
    return httpOptions;
  }

  listar(pagina : number, tamPagina : number) {
    return this.http.get<Premio[]>(this.endpoint + `/Rifa/Listar/${pagina}/${tamPagina}`, this.get_headers());
  }

}
