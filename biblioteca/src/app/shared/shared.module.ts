import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "./components/header/header.component";
import { PaginacaoGenericaComponent } from "./components/paginacao-generica/paginacao-generica.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    HeaderComponent,
    PaginacaoGenericaComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    NgxSpinnerModule,
    RouterModule,
    ToastrModule.forRoot(),
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    PaginacaoGenericaComponent
  ],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
