import { AlocacaoInterface } from './alocacao.interface'

export class Alocacao implements AlocacaoInterface{
    pageName: string;
    alocacaoID: number;
    projetoID: number;
    pid: number;
    auditoriaID: number;
    dataInicio: Date;
    dataFim: Date;
    percentualAloca: number;

}