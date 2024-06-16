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
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from "@ng-select/ng-select";
import { ToastrModule } from "ngx-toastr";
import { ModalModule } from "ngx-bootstrap/modal";
import { UsuarioCadastroComponent } from "./paginas/usuarios/components/usuario-cadastro/usuario-cadastro.component";

@NgModule({
  declarations: [
    InicioComponent,
    EmprestimoComponent,
    UsuarioComponent,
    UsuarioCadastroComponent,
    LivroComponent
  ],
  imports: [
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    NgxSpinnerModule,
    NgSelectModule,
    ToastrModule.forRoot(),
    ModalModule,
  ],
  providers: [],
})
export class CoreModule {}
