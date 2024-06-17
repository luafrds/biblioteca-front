export class EmprestimoRequest{
    NomeCompletoUsuario: string;
    TituloLivro: string;
    DataEmprestimo: string;
    DataDevolucaoPrevista: string;
    DataDevolucao: string;

    constructor(params: Partial<EmprestimoRequest>) {

        this.NomeCompletoUsuario = params.NomeCompletoUsuario || '';
        this.TituloLivro = params.TituloLivro || '';
        this.DataEmprestimo = params.DataEmprestimo || '';
        this.DataDevolucaoPrevista = params.DataDevolucaoPrevista || '';
        this.DataDevolucao = params.DataDevolucao || '';
    }
}