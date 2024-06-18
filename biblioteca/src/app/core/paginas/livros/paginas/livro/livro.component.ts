import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LIVRO_LISTAR_FORM } from 'app/livros/formularios/livro-listar.form';
import { LivroListarRequest } from 'app/livros/models/requests/livro-listar.request';
import { LivroResponse } from 'app/livros/models/responses/livro.response';
import { LivroService } from 'app/livros/services/livro.service';
import { PaginacaoResponse } from 'app/shared/components/models/responses/paginacao.response';
import { LivroEdicaoComponent } from '../../components/livro-edicao/livro-edicao.component';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
})
export class LivroComponent implements OnInit {

  @ViewChild(LivroEdicaoComponent) modal: LivroEdicaoComponent;

  livroForm?: FormGroup;

  response: PaginacaoResponse<LivroResponse>;

  request: LivroListarRequest = new LivroListarRequest({});

  carregando = false;

  mostrarPaginacao = false;

  atualizarValores: boolean = false;

  constructor(
    private readonly service: LivroService,
    private readonly builder: FormBuilder
  ) {}

  ngOnInit() {
    this.iniciarFormulario();
    this.listarLivros();
  }

  iniciarFormulario(): void {
    this.livroForm = this.builder.group(LIVRO_LISTAR_FORM);
  }

  listarLivros(): void {
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
    this.listarLivros();
  }

  filtrarRegistros(): void {
    if (this.livroForm.valid) {
      this.request = new LivroListarRequest(this.livroForm?.value);
      this.listarLivros();
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
    this.listarLivros();
  }

  limpar(): void {
    this.livroForm.reset();
  }

  editar(valoresIniciais: any){
    this.modal.edicaoForm.patchValue(valoresIniciais);
    this.modal.idEditar = valoresIniciais.Id;
  }

  excluir(id: number): void {
    this.carregando = true;
    this.service.excluir(id).subscribe({
      next: (response) => {
        this.listarLivros();
        this.carregando = false;
      },
      error: () => {
      },
    });
  }
}
