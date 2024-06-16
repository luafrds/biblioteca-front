import { Validators } from "@angular/forms";

export const USUARIO_FORM = {
    'NomeCompleto': [''],
    'Email': ['', Validators.required],
    'Telefone': ['', Validators.required],
    'TipoUsuario': [[], Validators.required],
}