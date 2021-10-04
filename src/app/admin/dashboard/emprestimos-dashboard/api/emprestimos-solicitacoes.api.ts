import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiDominioBaseUrl } from "src/environments/environment";
import { EmprestimosPessoasSolicitacoes, EmprestimosPorPessoa, EmprestimosSolicitacoesPorPessoa } from "../models/emprestimos-solicitacoes";


@Injectable({ providedIn: 'root' })
export class EmprestimosSolicitacoesApi {

    private readonly endpoint = ApiDominioBaseUrl;

    constructor(private http: HttpClient) { }


    getEmprestimosPessoasSolicitacoes(): Observable<EmprestimosPessoasSolicitacoes[]> {
        return this.http.get<EmprestimosPessoasSolicitacoes[]>(`${this.endpoint}/Emprestimo/Pessoas/Solicitacoes/Listar/1/2000000000`);
    }

    getEmprestimosSolicitacoesPorPessoa(pessoaId: number): Observable<EmprestimosSolicitacoesPorPessoa[]> {
        return this.http.get<EmprestimosSolicitacoesPorPessoa[]>(`${this.endpoint}/Emprestimo/Solicitacoes/${pessoaId}`);
    }

    getEmpretimosPorPessoa(pessoaId: number): Observable<EmprestimosPorPessoa[]> {
        return this.http.get<EmprestimosPorPessoa[]>(`${this.endpoint}/Emprestimo/Pessoa/${pessoaId}/Listar`);
    }

    updateEmprestimoSolicitacaoAceitar(solicitacaoId: number): Observable<EmprestimosSolicitacoesPorPessoa> {
        return this.http.put<EmprestimosSolicitacoesPorPessoa>(`${this.endpoint}/Emprestimo/Solicitacao/${solicitacaoId}/Aceitar`, '');
    }

    updateEmprestimoSolicitacaoRecusar(solicitacaoId: number): Observable<EmprestimosSolicitacoesPorPessoa> {
        return this.http.put<EmprestimosSolicitacoesPorPessoa>(`${this.endpoint}/Emprestimo/Solicitacao/${solicitacaoId}/Recusar`, '');
    }

}