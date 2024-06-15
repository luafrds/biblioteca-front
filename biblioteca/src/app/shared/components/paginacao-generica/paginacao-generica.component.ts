import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import { PaginacaoResponse } from "../models/responses/paginacao.response";

@Component({
    selector: "app-paginacao-generica",
    templateUrl: "./paginacao-generica.component.html",
})
export class PaginacaoGenericaComponent implements OnInit, OnChanges {
    @Input() response: PaginacaoResponse<any>;
    @Input() request: any;
    @Input() atualizarValores: boolean = false;
    @Output() atualizarLista = new EventEmitter();

    valorSelecionado: string = "10";
    numPaginas: number = 0;
    paginasExibidas: number[] = [];
    paginasExibidasMax: number = 4;

    constructor() { }
    
    ngOnChanges(): void {
        this.calcularNumPaginas();
        this.calcularPaginasExibidas();
    }

    ngOnInit(): void {
        this.calcularNumPaginas();
        this.calcularPaginasExibidas();
    }

    paginaAnterior(): void {
        if (this.request && this.request.Pg > 1) {
            this.request.Pg--;
            this.atualizarLista.emit();
            this.calcularPaginasExibidas();
        }
    }

    proximaPagina(): void {
        if (this.request && this.request.Pg < this.numPaginas) {
            this.request.Pg++;
            this.atualizarLista.emit();
            this.calcularPaginasExibidas();
        }
    }

    public alterarConsulta(valorSelecionado: string): void {
        this.request.Qt = Number(valorSelecionado);

        this.irParaPrimeiraPagina();
        this.atualizarLista.emit();
        this.calcularNumPaginas();
        this.calcularPaginasExibidas();
    }

    irParaPagina(pagina: number): void {
        if (this.request && pagina >= 1 && pagina <= this.response?.Total) {
            this.request.Pg = pagina;
            this.atualizarLista.emit();
            this.calcularPaginasExibidas();
        }
    }

    irParaPrimeiraPagina(): void {
        this.irParaPagina(1);
        this.calcularPaginasExibidas();
    }

    irParaUltimaPagina(): void {
        this.irParaPagina(this.numPaginas);
        this.calcularPaginasExibidas();
    }

    calcularNumPaginas() {
        this.numPaginas = Math.ceil(this.response?.Total / this.request.Qt);
    }

    calcularPaginasExibidas() {
        const totalPaginas = this.numPaginas;
        const paginaAtual = this.request.Pg;
        const paginasExibidasMax = this.paginasExibidasMax;

        let inicio: number;
        let fim: number;

        if (totalPaginas <= paginasExibidasMax) {
            inicio = 1;
            fim = totalPaginas;
        } else {
            const limiteInferior = Math.floor(paginasExibidasMax / 2);
            const limiteSuperior = totalPaginas - limiteInferior;

            if (paginaAtual <= limiteInferior) {
                inicio = 1;
                fim = paginasExibidasMax;
            } else if (paginaAtual >= limiteSuperior) {
                inicio = Math.max(totalPaginas - paginasExibidasMax + 1, 1);
                fim = totalPaginas;
            } else {
                inicio = paginaAtual - limiteInferior;
                fim = paginaAtual + limiteInferior;
            }
        }

        this.paginasExibidas = Array.from(
            { length: fim - inicio + 1 },
            (_, index) => index + inicio
        );
    }
}
