import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "./components/header/header.component";
import { PaginacaoGenericaComponent } from "./components/paginacao-generica/paginacao-generica.component";

@NgModule({
  declarations: [
    HeaderComponent,
    PaginacaoGenericaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    PaginacaoGenericaComponent
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
