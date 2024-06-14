import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./paginas/Inicio/Inicio.component";

const rotas: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "inicio",
	},
	{
		path: 'inicio',
		component: InicioComponent,
	},
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(rotas, { scrollPositionRestoration: "enabled"})],
	exports: [RouterModule]
})
export class CoreRoutingModule {}
