import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Inicio',
  templateUrl: './Inicio.component.html',
})
export class InicioComponent implements OnInit {
  titulo = 'Painel de Controle';
  subtitulo = 'Biblioteca';

  constructor() {}

  ngOnInit() {}

  selecionarTab(event) {
    const selecionadoTabId = event.target.value;
    this.ativarTab(selecionadoTabId);
  }
  
  selecionarTabPorClick(event, tabId: string) {
    event.preventDefault()
    this.atualizarSelect(tabId);
    this.ativarTab(tabId);
  }
  
  ativarTab(tabId: string) {
    const tabs = document.querySelectorAll(".nav-link");
    const tabConteudo = document.querySelectorAll(".tab-pane");
  
    tabs.forEach((tab: HTMLElement) => {
      tab.classList.remove("active");
    });
    tabConteudo.forEach((tabSelecionada: HTMLElement) => {
      tabSelecionada.classList.remove("active", "show");
    });
  
    const tabAtiva = document.querySelector(`#${tabId}-tab`);
    const conteudoAtivo = document.querySelector(`#${tabId}`);
  
    if (tabAtiva) {
      tabAtiva.classList.add("active");
    }
    if (conteudoAtivo) {
      conteudoAtivo.classList.add("active", "show");
    }
  }
  
  atualizarSelect(tabId: string) {
    const selectElement = document.getElementById('tabSelect') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = tabId;
    }
  }
}
