import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiDominioBaseUrl } from "src/environments/environment";
import { Premio, Sorteio } from "../models/sorteio";

@Injectable({ providedIn: 'root' })
export class SorteioApi {

    private readonly endpoint = ApiDominioBaseUrl;

    constructor(private http: HttpClient) { }


    getSorteios(): Observable<Sorteio[]> {
        return this.http.get<Sorteio[]>(`${this.endpoint}/Sorteio/Listar`)
    }

    getSorteioById(id: number): Observable<Sorteio> {
        return this.http.get<Sorteio>(`${this.endpoint}/Sorteio/${id}`);
    }

    getSorteioByRifaId(rifaId: number): Observable<Sorteio[]> {
        return this.http.get<Sorteio[]>(`${this.endpoint}/Sorteio/Rifa/${rifaId}/Listar`)
    }

    salvarSorteio(sorteio: Sorteio): Observable<Sorteio> {
        return this.http.post<Sorteio>(`${this.endpoint}/Sorteio`, sorteio);
    }

    editarSorteio(sorteioId: number, sorteio: Sorteio): Observable<Sorteio> {
        return this.http.put<Sorteio>(`${this.endpoint}/Sorteio/${sorteioId}`, sorteio);
    }

    deletarSorteio(sorteioId: number): Observable<Sorteio> {
        return this.http.delete<Sorteio>(`${this.endpoint}/Sorteio/${sorteioId}`)
    }

    /**Rotas do Premio */

    getPremios(): Observable<Premio[]> {
        return this.http.get<Premio[]>(`${this.endpoint}/Premio/Rifa/Listar/1/2000000000`);
    }

    getPremioBySorteioId(sorteioId: number): Observable<Premio[]> {
        return this.http.get<Premio[]>(`${this.endpoint}/Premio/Sorteio/${sorteioId}/Listar`)
    }
    getPremioById(id: number): Observable<Premio> {
        return this.http.get<Premio>(`${this.endpoint}/Premio/${id}`);
    }

    salvarPremio(premio: Premio): Observable<Premio> {
        return this.http.post<Premio>(`${this.endpoint}/Premio`, premio);
    }

    editarPremio(premioId: number, premio: Premio): Observable<Premio> {
        return this.http.put<Premio>(`${this.endpoint}/Premio/${premioId}`, premio);
    }

    deletarPremio(premioId: number): Observable<Premio> {
        return this.http.delete<Premio>(`${this.endpoint}/Premio/${premioId}`)
    }
}