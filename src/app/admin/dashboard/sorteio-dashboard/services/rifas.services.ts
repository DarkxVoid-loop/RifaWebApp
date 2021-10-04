import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CacheService } from "src/app/cache.service";
import { Rifa } from "src/app/models/rifa";
import { ApiDominioBaseUrl } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class RifasService {

    private readonly endpoint = ApiDominioBaseUrl;

    constructor(private http: HttpClient, private cache: CacheService) { }

    getRifas(): Observable<Rifa[]> {
        return this.http.get<Rifa[]>(`${this.endpoint}/Rifa/Listar`);
    }

}