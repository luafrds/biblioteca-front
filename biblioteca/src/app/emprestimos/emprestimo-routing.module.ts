import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { EmprestimoComponent } from "app/core/paginas/emprestimos/paginas/emprestimo/emprestimo.component";

const routes: Routes = [
  {
    path: '',
    component: EmprestimoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimoRoutingModule { }

