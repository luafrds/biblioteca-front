import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LIVRO_FORM } from 'app/livros/formularios/livro.form';
import { LivroRequest } from 'app/livros/models/requests/livro.request';
import { LivroResponse } from 'app/livros/models/responses/livro.response';
import { LivroService } from 'app/livros/services/livro.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-livro-edicao',
  templateUrl: './livro-edicao.component.html',
})
export class LivroEdicaoComponent implements OnInit {
  @Output() listar: EventEmitter<LivroResponse> = new EventEmitter();

  edicaoForm: FormGroup;

  request: LivroRequest;

  idEditar: number;

  modalRef: BsModalRef;

  constructor(
    readonly builder: FormBuilder,
    readonly service: LivroService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.edicaoForm = this.builder.group(LIVRO_FORM);
  }

  editar(){
    this.request = new LivroRequest(this.edicaoForm?.value);
    this.spinner.show();    
    this.service.editar(this.idEditar, this.request).subscribe({
      next: () => {
        this.spinner.hide();
        this.toastr.success("Livro editado!", "Sucesso!");
        this.listar.emit()
      },
      error: () => {
        this.spinner.hide();
      },
    });
  }
}