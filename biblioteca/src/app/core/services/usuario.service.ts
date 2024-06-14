import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "app/environments/environment";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private urlBase = environment.config.apis.biblioteca;

  constructor(private http: HttpClient) {}

}
