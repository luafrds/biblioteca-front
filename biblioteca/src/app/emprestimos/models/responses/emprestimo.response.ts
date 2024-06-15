export class EmprestimoResponse {
    Id: number;
    IdUsuario: number;
    NomeCompletoUsuario: string;
    IdLivro: number;
    TituloLivro: string;
    DataEmprestimo: Date;
    DataDevolucaoPrevista: Date;
    DataDevolucao: Date;

    constructor(params: Partial<EmprestimoResponse>) {
        this.NomeCompletoUsuario = params.NomeCompletoUsuario || '';
        this.TituloLivro = params.TituloLivro || '';
        this.DataEmprestimo = params.DataEmprestimo || null;
        this.DataDevolucaoPrevista = params.DataDevolucaoPrevista || null;
        this.DataDevolucao = params.DataDevolucao || null;
    }
}