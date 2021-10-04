export class EmprestimosPessoasSolicitacoes {

    foneWhats: string;
    pessoaId: number;
    nome: string;
    email: string;
    foneCelular: string;
    cidade: string;
    tipo: number;
    tipoId: number;
    cpf: string;
    apelido: string;
}

export class EmprestimosSolicitacoesPorPessoa {

    solicitacaoId: number;
    pedidoId: number;
    statusId: number;
    data: string;
    carteiraId: number;
    valor: string
}

export class EmprestimosPorPessoa {

    data: string;
    valor: number;
    emprestimoId: number;
    pago: number;
    solicitacaoId: number;

}