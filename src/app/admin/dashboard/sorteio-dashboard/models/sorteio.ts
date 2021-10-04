export class Sorteio {
    sorteioId: number;
    sorteadorId: number;
    rifaId: number;
    data: string;
    numeroConcurso: string
}

export class Premio {
    SorteioId: number;
    nome: string;
    posicao: number;
    descricao: string;
}