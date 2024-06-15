import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMPRESTIMO_LISTAR_FORM } from 'app/emprestimos/formularios/emprestimo-listar.form';
import { EmprestimoListarRequest } from 'app/emprestimos/models/requests/emprestimo-listar.request';
import { EmprestimoResponse } from 'app/emprestimos/models/responses/emprestimo.response';
import { EmprestimoService } from 'app/emprestimos/services/emprestimo.service';
import { PaginacaoResponse } from 'app/shared/components/models/responses/paginacao.response';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
})
export class EmprestimoComponent implements OnInit {
  emprestimoForm?: FormGroup;

  response: PaginacaoResponse<EmprestimoResponse>;

  request: EmprestimoListarRequest = new EmprestimoListarRequest({});

  carregando = false;

  mostrarPaginacao = false;

  atualizarValores: boolean = false;

  constructor(
    private readonly service: EmprestimoService,
    private readonly builder: FormBuilder
  ) {}

  ngOnInit() {
    this.iniciarFormulario();
    this.listarEmprestimos();
  }

  iniciarFormulario(): void {
    this.emprestimoForm = this.builder.group(EMPRESTIMO_LISTAR_FORM);
  }

  listarEmprestimos(): void {
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
    this.listarEmprestimos();
  }

  filtrarRegistros(): void {
    if (this.emprestimoForm.valid) {
      this.request = new EmprestimoListarRequest(this.emprestimoForm?.value);
      this.listarEmprestimos();
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
    this.listarEmprestimos();
  }

  limpar(): void {
    this.emprestimoForm.reset();
  }
}
