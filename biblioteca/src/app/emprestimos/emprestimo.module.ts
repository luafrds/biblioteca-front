import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { HttpClientModule } from "@angular/common/http";
import { EmprestimoRoutingModule } from "./emprestimo-routing.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxSpinnerModule } from "ngx-spinner";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmprestimoRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgSelectModule,
    NgxSpinnerModule,
    ModalModule,
    HttpClientModule
  ]
})
export class EmprestimoModule { }
