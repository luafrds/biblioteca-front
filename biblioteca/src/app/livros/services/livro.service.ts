import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "app/environments/environment";
import { PaginacaoResponse } from "app/shared/components/models/responses/paginacao.response";
import { Observable } from "rxjs";
import { LivroListarRequest } from "../models/requests/livro-listar.request";
import { LivroResponse } from "../models/responses/livro.response";
import { LivroRequest } from "../models/requests/livro.request";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  private urlBase = environment.config.apis.biblioteca;

  constructor(private http: HttpClient) {}

  listar(request: LivroListarRequest): Observable<PaginacaoResponse<LivroResponse>> {
    return this.http.get<PaginacaoResponse<LivroResponse>>(
      this.urlBase + 'livros', { params: <any>request }
    );
  }

  inserir(request: LivroRequest): Observable<LivroResponse> {
    return this.http.post<LivroResponse>(
      this.urlBase + 'livros', request);
  }
}
