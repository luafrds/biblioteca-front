export class LivroResponse {
    Id: number;
    Titulo: string;
    Autor: string;
    Genero: string;
    Ano: string;
    Quantidade: number;

    constructor(params: Partial<LivroResponse>) {
        this.Titulo = params.Titulo || '';
        this.Autor = params.Autor || '';
        this.Genero = params.Genero || '';
        this.Ano = params.Ano || '';
        this.Quantidade = params.Quantidade || null;
    }
}