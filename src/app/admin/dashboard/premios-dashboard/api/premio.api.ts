import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiDominioBaseUrl } from "src/environments/environment";
import { Premio } from "../models/premio";

@Injectable({ providedIn: 'root' })
export class PremioApi {

    private readonly endpoint = ApiDominioBaseUrl;

    constructor(private http: HttpClient) { }


    getPremios(): Observable<Premio[]> {
        return this.http.get<Premio[]>(`${this.endpoint}/Premio/Rifa/Listar/1/2000000000`);
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