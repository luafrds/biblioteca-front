import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "app/environments/environment";
import { EmprestimoListarRequest } from "../models/requests/emprestimo-listar.request";
import { PaginacaoResponse } from "app/shared/components/models/responses/paginacao.response";
import { Observable } from "rxjs";
import { EmprestimoResponse } from "../models/responses/emprestimo.response";


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
}
