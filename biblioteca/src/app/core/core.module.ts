import { NgModule } from "@angular/core";
import { CoreRoutingModule } from "./core-routing.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InicioComponent } from "./paginas/Inicio/Inicio.component";
import { SharedModule } from "app/shared/shared.module";
import { EmprestimoComponent } from "./paginas/emprestimos/paginas/emprestimo/emprestimo.component";
import { UsuarioComponent } from "./paginas/usuarios/paginas/usuario/usuario.component";
import { LivroComponent } from "./paginas/livros/paginas/livro/livro.component";

@NgModule({
  declarations: [InicioComponent, EmprestimoComponent, UsuarioComponent, LivroComponent],
  imports: [
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SharedModule
  ],
  providers: [],
})
export class CoreModule {}
