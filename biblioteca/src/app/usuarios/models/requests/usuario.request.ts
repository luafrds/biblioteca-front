export class UsuarioRequest {
    NomeCompleto: string;
    Email: string;
    Telefone: string;
    TipoUsuario: string;

    constructor(params: Partial<UsuarioRequest>) {
        this.NomeCompleto = params.NomeCompleto || '';
        this.Email = params.Email || '';
        this.Telefone = params.Telefone || '';
        this.TipoUsuario = params.TipoUsuario || '';
    }
}