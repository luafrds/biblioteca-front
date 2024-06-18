import { Validators } from "@angular/forms";

export const USUARIO_FORM = {
    'NomeCompleto': ['', Validators.required],
    'Email': ['', Validators.required],
    'Telefone': ['', Validators.required],
    'TipoUsuario': [[], Validators.required],
}