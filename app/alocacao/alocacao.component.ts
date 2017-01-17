import { Component } from '@angular/core'
import { Alocacao } from './alocacao'

@Component({
    selector: 'ava-alo-app',
    templateUrl: './app/alocacao/alocacao.html'
})
export class AlocacaoComponent {
    model: Alocacao = {
            "pageName": "Alocação",
            "alocacaoID": 1,
            "projetoID": 1,
            "pid": 11036009,
            "auditoriaID": 1,
            "dataInicio": null,
            "dataFim": null,
            "percentualAloca": 0.3
        };
}