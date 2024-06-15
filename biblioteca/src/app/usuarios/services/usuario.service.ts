import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "app/environments/environment";
import { PaginacaoResponse } from "app/shared/components/models/responses/paginacao.response";
import { Observable } from "rxjs";
import { UsuarioListarRequest } from "../models/requests/usuario-listar.request";
import { UsuarioResponse } from "../models/responses/usuario.response";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private urlBase = environment.config.apis.biblioteca;

  constructor(private http: HttpClient) {}

  listar(request: UsuarioListarRequest): Observable<PaginacaoResponse<UsuarioResponse>> {
    return this.http.get<PaginacaoResponse<UsuarioResponse>>(
      this.urlBase + 'usuarios', { params: <any>request }
    );
  }
}
