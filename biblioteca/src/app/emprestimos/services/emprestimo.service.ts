import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "app/environments/environment";
import { EmprestimoListarRequest } from "../models/requests/emprestimo-listar.request";
import { PaginacaoResponse } from "app/shared/components/models/responses/paginacao.response";
import { Observable } from "rxjs";
import { EmprestimoResponse } from "../models/responses/emprestimo.response";
import { EmprestimoRequest } from "../models/requests/emprestimo.request";

@Injectable({
  providedIn: "root",
})
export class EmprestimoService {
  private urlBase = environment.config.apis.biblioteca;

  constructor(private http: HttpClient) {}

  listar(request: EmprestimoListarRequest): Observable<PaginacaoResponse<EmprestimoResponse>> {
    return this.http.get<PaginacaoResponse<EmprestimoResponse>>(
      this.urlBase + 'emprestimos', { params: <any>request }
    );
  }

  inserir(request: EmprestimoRequest): Observable<EmprestimoResponse> {
    return this.http.post<EmprestimoResponse>(
      this.urlBase + 'emprestimos', request);
  }

  editar(Id: number, request: EmprestimoRequest ): Observable<EmprestimoRequest> {
    return this.http.put<EmprestimoResponse>(
      `${this.urlBase}emprestimos/${Id}`,
      request
    );
  }

  excluir(Id: number) {return this.http.delete(`${this.urlBase}emprestimos/${Id}`);
  }
}
