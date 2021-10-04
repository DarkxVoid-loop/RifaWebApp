import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CacheService } from "src/app/cache.service";
import { ApiDominioBaseUrl } from "src/environments/environment";
import { Rifa } from "../models/rifa";

@Injectable({ providedIn: 'root' })
export class RifaApi {

    private readonly endpoint = ApiDominioBaseUrl;


    constructor(private http: HttpClient, private cache: CacheService) { }

    getRifas(): Observable<Rifa[]> {
        return this.http.get<Rifa[]>(`${this.endpoint}/Rifa/Listar`);
    }

    getRifaById(rifaId: number): Observable<Rifa[]> {
        return this.http.get<Rifa[]>(`${this.endpoint}/Rifa/${rifaId}`);
    }

    salvarRifa(rifa: Rifa): Observable<Rifa> {
        return this.http.post<Rifa>(`${this.endpoint}/Rifa`, rifa);
    }

    editarRifa(rifaId: number, rifa: Rifa): Observable<Rifa>{
        return this.http.put<Rifa>(`${this.endpoint}/Rifa/${rifaId}`, rifa);
    }
    
    deletarRifa(rifaId: number): Observable<Rifa>{
        return this.http.delete<Rifa>(`${this.endpoint}/Rifa/${rifaId}`)
    }
}