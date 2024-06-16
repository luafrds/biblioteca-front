import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMPRESTIMO_FORM } from 'app/emprestimos/formularios/emprestimo.form';
import { EmprestimoRequest } from 'app/emprestimos/models/requests/emprestimo.request';
import { EmprestimoResponse } from 'app/emprestimos/models/responses/emprestimo.response';
import { EmprestimoService } from 'app/emprestimos/services/emprestimo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emprestimo-cadastro',
  templateUrl: './emprestimo-cadastro.component.html',
})
export class EmprestimoCadastroComponent implements OnInit {

  @Output() listar: EventEmitter<EmprestimoResponse> = new EventEmitter();

  cadastroForm: FormGroup;
  
  request = new EmprestimoRequest({});

  modalRef: BsModalRef;

  constructor(
    private readonly modalService: BsModalService,
    private readonly builder: FormBuilder,
    private readonly service: EmprestimoService,
    private readonly spinner: NgxSpinnerService,
    private readonly toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  iniciarFormulario(): void{
    this.cadastroForm = this.builder.group(EMPRESTIMO_FORM);
  }

  abrirModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, 
      {
        class: 'modal-dialog-centered' 
      }
    );
  }

  inserirEmprestimo(){
    this.spinner.show();
    this.request = new EmprestimoRequest(this.cadastroForm.value);
    this.service.inserir(this.request).subscribe({
      next: () => {
        this.toastr.success("Empréstimo cadastrado!", "Sucesso!");
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
