import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { LivroRoutingModule } from "./livro-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LivroRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class LivroModule { }
