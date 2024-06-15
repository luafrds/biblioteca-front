import { PaginacaoRequest } from "app/shared/components/models/requests/paginacao.request";

export class UsuarioListarRequest extends PaginacaoRequest {
    NomeCompleto: string;
    Email: string;
    Telefone: string;
    TipoUsuario: string;

    constructor(params: Partial<UsuarioListarRequest>) {
        super(params);

        this.NomeCompleto = params.NomeCompleto || '';
        this.Email = params.Email || '';
        this.Telefone = params.Telefone || '';
        this.TipoUsuario = params.TipoUsuario || '';
    }
}