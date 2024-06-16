export class LivroRequest{
    Titulo: string;
    Autor: string;
    Genero: string;
    Ano: string;
    Quantidade: string;

    constructor(params: Partial<LivroRequest>) {

        this.Titulo = params.Titulo || '';
        this.Autor = params.Autor || '';
        this.Genero = params.Genero || '';
        this.Ano = params.Ano || '';
        this.Quantidade = params.Quantidade || '';
    }
}