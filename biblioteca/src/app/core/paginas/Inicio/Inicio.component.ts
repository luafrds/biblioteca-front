import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Inicio',
  templateUrl: './Inicio.component.html',
})
export class InicioComponent implements OnInit {
  titulo = "Painel de Controle";
  subtitulo = "Biblioteca";

  constructor() { }

  ngOnInit() {
  }

}
