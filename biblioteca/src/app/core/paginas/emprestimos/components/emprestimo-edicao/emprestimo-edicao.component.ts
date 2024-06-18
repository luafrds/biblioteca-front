import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMPRESTIMO_FORM } from 'app/emprestimos/formularios/emprestimo.form';
import { EmprestimoRequest } from 'app/emprestimos/models/requests/emprestimo.request';
import { EmprestimoResponse } from 'app/emprestimos/models/responses/emprestimo.response';
import { EmprestimoService } from 'app/emprestimos/services/emprestimo.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emprestimo-edicao',
  templateUrl: './emprestimo-edicao.component.html',
})
export class EmprestimoEdicaoComponent implements OnInit {
  @Output() listar: EventEmitter<EmprestimoResponse> = new EventEmitter();

  edicaoForm: FormGroup;

  request: EmprestimoRequest;

  idEditar: number;

  modalRef: BsModalRef;

  constructor(
    readonly builder: FormBuilder,
    readonly service: EmprestimoService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    readonly modalService: BsModalService
  ) { }

  ngOnInit() {
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.edicaoForm = this.builder.group(EMPRESTIMO_FORM);
  }

  editar(){
    this.request = new EmprestimoRequest(this.edicaoForm?.value);
    this.spinner.show();    
    this.service.editar(this.idEditar, this.request).subscribe({
      next: () => {
        this.spinner.hide();
        this.toastr.success("Empréstimo editado!", "Sucesso!");
        this.listar.emit();
        this.fecharModal();
      },
      error: () => {
        this.spinner.hide();
      },
    });
  }

  fecharModal(){
    this.modalRef.hide();
  }
}