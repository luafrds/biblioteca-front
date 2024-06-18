import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { USUARIO_FORM } from 'app/usuarios/formularios/usuario.form';
import { UsuarioRequest } from 'app/usuarios/models/requests/usuario.request';
import { UsuarioResponse } from 'app/usuarios/models/responses/usuario.response';
import { UsuarioService } from 'app/usuarios/services/usuario.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
})
export class UsuarioCadastroComponent implements OnInit {

  @Output() listar: EventEmitter<UsuarioResponse> = new EventEmitter();

  cadastroForm: FormGroup;
  
  request = new UsuarioRequest({});

  modalRef: BsModalRef;

  tipoUsuarioConfig = [
    { Value: 1, Description: "Bibliotecário" },
    { Value: 2, Description: "Professor" },
    { Value: 3, Description: "Aluno" }
  ]

  constructor(
    private readonly modalService: BsModalService,
    private readonly builder: FormBuilder,
    private readonly service: UsuarioService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void{
    this.cadastroForm = this.builder.group(USUARIO_FORM);
  }

  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, 
      {
        class: 'modal-dialog-centered' 
      }
    );
  }

  inserirUsuario(){
    this.spinner.show();
    this.request = new UsuarioRequest(this.cadastroForm.value);
    this.service.inserir(this.request).subscribe({
      next: () => {
        this.toastr.success("Usuário cadastrado!", "Sucesso!");
        this.cadastroForm.reset();
        this.spinner.hide();
        this.listar.emit();
        this.modalService.hide();
      },
      error: () => {
        this.spinner.hide();
        this.toastr.error("Um erro aconteceu durante a operação.");
      }
    });
  }

}
