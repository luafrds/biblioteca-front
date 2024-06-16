import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LIVRO_FORM } from 'app/livros/formularios/livro.form';
import { LivroRequest } from 'app/livros/models/requests/livro.request';
import { LivroResponse } from 'app/livros/models/responses/livro.response';
import { LivroService } from 'app/livros/services/livro.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
})
export class LivroCadastroComponent implements OnInit {

  @Output() listar: EventEmitter<LivroResponse> = new EventEmitter();

  cadastroForm: FormGroup;
  
  request = new LivroRequest({});

  modalRef: BsModalRef;

  constructor(
    private readonly modalService: BsModalService,
    private readonly builder: FormBuilder,
    private readonly service: LivroService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void{
    this.cadastroForm = this.builder.group(LIVRO_FORM);
  }

  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, 
      {
        class: 'modal-dialog-centered' 
      }
    );
  }

  inserirLivro(){
    this.spinner.show();
    this.request = new LivroRequest(this.cadastroForm.value);
    this.service.inserir(this.request).subscribe({
      next: () => {
        this.toastr.success("Livro cadastrado!", "Sucesso!");
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
