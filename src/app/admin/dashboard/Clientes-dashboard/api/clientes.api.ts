import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CacheService } from "src/app/cache.service";
import { ApiDominioBaseUrl } from "src/environments/environment";
import { Clientes } from "../models/clientes";

@Injectable({ providedIn: 'root' })
export class ClientesApi {

    private readonly endpoint = ApiDominioBaseUrl;

    constructor(private http: HttpClient, private cache: CacheService) { }



    get_headers() {
        // var headers_object = new HttpHeaders();
        // headers_object.append('Content-Type', 'application/json');
        // headers_object.append("Authorization", "Bearer " + btoa(this.cache.getToken()));
        // console.log(this.cache.getToken());
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkFkbWluIiwicm9sZSI6IkFkbWluIiwibmJmIjoxNjMxNjM3NzE5LCJleHAiOjE2MzE4OTY5MTksImlhdCI6MTYzMTYzNzcxOSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3QiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdCJ9.j-Xr5ybdMfztWG5_k3d2DxV81tNrj_jnaq5KxeYAaY8"
        var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
        const httpOptions = {
            headers: headers_object
        };
        return httpOptions;
    }



    getClientes(): Observable<Clientes[]> {
        return this.http.get<Clientes[]>(`${this.endpoint}/Clientes/Listar/1/200000000`, this.get_headers());
    }

    getClienteByCpf(cpf: string): Observable<Clientes> {
        return this.http.get<Clientes>(`${this.endpoint}/Clientes​/${cpf}`)
    }

    salvarCliente(cliente: Clientes): Observable<Clientes>{
        return this.http.post<Clientes>(`${this.endpoint}/Clientes`, cliente);
    }

    editarCliente(id: number, cliente: Clientes): Observable<Clientes>{
        return this.http.put<Clientes>(`${this.endpoint}/Clientes/${id}`, cliente);
    }
    
}