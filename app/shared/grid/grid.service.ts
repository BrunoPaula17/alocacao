import { Injectable, Input, Output } from '@angular/core';
import { Header } from '../grid/grid-header';

@Injectable()
export class CustomGridService<T> {
    //Cabeçalho dinânico da grid
    //Deve ser preenchido junto a classe do modelo para manter a unicidade das informações {Ex. "project.ts"}
    @Input() headers: Header[];
    //Lista de objetos que deve ser tipada durante a criação do serviço no component {Ex. "project.component.ts"}
    @Input() models: T[];
    //Propriedades de linkagem entre funções dos componentes e o que é exibido na grid { Ex. "project.service.ts"}
    @Input() public insert: Function;
    @Input() public update: Function;
    @Input() public delete: Function;
    //Propriedades de paginação
    public page: number;
    public rows: number = 10;
    showRows(line: number): boolean{
       return Boolean(line <= this.rows);
    }
    public pages: number;
}