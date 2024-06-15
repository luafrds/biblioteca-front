import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LivroComponent } from "app/core/paginas/livros/paginas/livro/livro.component";

const routes: Routes = [
  {
    path: '',
    component: LivroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroRoutingModule { }

