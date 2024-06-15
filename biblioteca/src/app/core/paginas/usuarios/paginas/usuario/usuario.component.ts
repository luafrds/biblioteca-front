import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaginacaoResponse } from 'app/shared/components/models/responses/paginacao.response';
import { USUARIO_LISTAR_FORM } from 'app/usuarios/formularios/usuario-listar.form';
import { UsuarioListarRequest } from 'app/usuarios/models/requests/usuario-listar.request';
import { UsuarioResponse } from 'app/usuarios/models/responses/usuario.response';
import { UsuarioService } from 'app/usuarios/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarioForm?: FormGroup;

  response: PaginacaoResponse<UsuarioResponse>;

  request: UsuarioListarRequest = new UsuarioListarRequest({});

  carregando = false;

  mostrarPaginacao = false;

  atualizarValores: boolean = false;

  constructor(
    private readonly service: UsuarioService,
    private readonly builder: FormBuilder
  ) {}

  ngOnInit() {
    this.iniciarFormulario();
    this.listarUsuarios();
  }

  iniciarFormulario(): void {
    this.usuarioForm = this.builder.group(USUARIO_LISTAR_FORM);
  }

  listarUsuarios(): void {
    this.carregando = true;
    this.service.listar(this.request).subscribe({
      next: (response) => {
        this.response = response;
        this.mostrarPaginacao = true;
        this.carregando = false;
      },
      error: () => {
      },
    });
  }

  atualizarLista() {
    this.listarUsuarios();
  }

  filtrarRegistros(): void {
    if (this.usuarioForm.valid) {
      this.request = new UsuarioListarRequest(this.usuarioForm?.value);
      this.listarUsuarios();
      this.atualizarValores = !this.atualizarValores;
    }
  }

  sortBy(column: string) {
    if (this.request.CpOrd === column) {
      this.request.TpOrd = this.request.TpOrd === 'asc' ? 'desc' : 'asc';
    } else {
      this.request.CpOrd = column;
      this.request.TpOrd = 'asc';
    }
    this.listarUsuarios();
  }

  limpar(): void {
    this.usuarioForm.reset();
  }
}