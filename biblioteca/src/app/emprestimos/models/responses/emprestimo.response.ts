export class EmprestimoResponse {
    Id: number;
    IdUsuario: number;
    NomeCompletoUsuario: string;
    IdLivro: number;
    TituloLivro: string;
    DataEmprestimo: string;
    DataDevolucaoPrevista: string;
    DataDevolucao: string;

    constructor(params: Partial<EmprestimoResponse>) {
        this.NomeCompletoUsuario = params.NomeCompletoUsuario || '';
        this.TituloLivro = params.TituloLivro || '';
        this.DataEmprestimo = params.DataEmprestimo || '';
        this.DataDevolucaoPrevista = params.DataDevolucaoPrevista || '';
        this.DataDevolucao = params.DataDevolucao || '';
    }
}