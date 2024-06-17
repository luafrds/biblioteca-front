import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaginacaoResponse } from 'app/shared/components/models/responses/paginacao.response';
import { USUARIO_LISTAR_FORM } from 'app/usuarios/formularios/usuario-listar.form';
import { UsuarioListarRequest } from 'app/usuarios/models/requests/usuario-listar.request';
import { UsuarioResponse } from 'app/usuarios/models/responses/usuario.response';
import { UsuarioService } from 'app/usuarios/services/usuario.service';
import { UsuarioEdicaoComponent } from '../../components/usuario-edicao/usuario-edicao.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {

  @ViewChild(UsuarioEdicaoComponent) modal: UsuarioEdicaoComponent;
  
  usuarioForm?: FormGroup;

  response: PaginacaoResponse<UsuarioResponse>;

  request: UsuarioListarRequest = new UsuarioListarRequest({});

  carregando = false;

  mostrarPaginacao = false;

  atualizarValores: boolean = false;

  tipoUsuarioConfig = [
    { Value: 0, Description: "Bibliotecario" },
    { Value: 1, Description: "Professor" },
    { Value: 2, Description: "Aluno" }
  ]

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

  editar(valoresIniciais: any){
    this.modal.edicaoForm.patchValue(valoresIniciais);
    this.modal.idEditar = valoresIniciais.Id;
  }
}