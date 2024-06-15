export class UsuarioResponse {
    Id: number;
    NomeCompleto: string;
    Email: string;
    Telefone: string;
    TipoUsuario: string;

    constructor(params: Partial<UsuarioResponse>) {
        this.NomeCompleto = params.NomeCompleto || '';
        this.Email = params.Email || '';
        this.Telefone = params.Telefone || '';
        this.TipoUsuario = params.TipoUsuario || '';
    }
}