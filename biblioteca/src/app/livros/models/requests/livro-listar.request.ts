import { PaginacaoRequest } from "app/shared/components/models/requests/paginacao.request";

export class LivroListarRequest extends PaginacaoRequest {
    Titulo: string;
    Autor: string;
    Genero: string;
    Ano: string;
    Quantidade: string;

    constructor(params: Partial<LivroListarRequest>) {
        super(params);

        this.Titulo = params.Titulo || '';
        this.Autor = params.Autor || '';
        this.Genero = params.Genero || '';
        this.Ano = params.Ano || '';
        this.Quantidade = params.Quantidade || '';
    }
}