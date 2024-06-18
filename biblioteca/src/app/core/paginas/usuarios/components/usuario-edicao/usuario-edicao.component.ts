import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { USUARIO_FORM } from 'app/usuarios/formularios/usuario.form';

import { UsuarioRequest } from 'app/usuarios/models/requests/usuario.request';
import { UsuarioResponse } from 'app/usuarios/models/responses/usuario.response';
import { UsuarioService } from 'app/usuarios/services/usuario.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-edicao',
  templateUrl: './usuario-edicao.component.html',
})
export class UsuarioEdicaoComponent implements OnInit {
  @Output() listar: EventEmitter<UsuarioResponse> = new EventEmitter();

  edicaoForm: FormGroup;

  request: UsuarioRequest;

  @Input() idEditar: number;

  modalRef: BsModalRef;

  tipoUsuarioConfig = [
    { Value: 1, Description: "Bibliotecário" },
    { Value: 2, Description: "Professor" },
    { Value: 3, Description: "Aluno" }
  ]

  constructor(
    readonly builder: FormBuilder,
    readonly service: UsuarioService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    console.log(this.idEditar, "id");
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.edicaoForm = this.builder.group(USUARIO_FORM);
  }

  editar(){
    this.request = new UsuarioRequest(this.edicaoForm?.value);
    this.spinner.show();    
    this.service.editar(this.idEditar, this.request).subscribe({
      next: () => {
        this.spinner.hide();
        this.toastr.success("Usuário editado!", "Sucesso!");
        this.listar.emit()
      },
      error: () => {
        this.spinner.hide();
      },
    });
    console.log(this.idEditar, "id");
  }
}
