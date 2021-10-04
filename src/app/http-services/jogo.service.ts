import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiDominioBaseUrl } from 'src/environments/environment';
import { CacheService } from '../cache.service';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private readonly endpoint = ApiDominioBaseUrl + '/Jogo';

  constructor(private http: HttpClient, private cache: CacheService) { }

  get_headers() {
    var headers_object = new HttpHeaders()
      .set('Authorization', `Bearer ${this.cache.getToken()}`);
    const httpOptions = {
      headers: headers_object
    };
    return httpOptions;
  }

  getReservados(rifaId) {
    // return this.http.get<Premio[]>(this.endpoint + `/Rifa/Listar/${pagina}/${tamPagina}`, this.get_headers())
  }
}
