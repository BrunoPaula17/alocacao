import { Component } from '@angular/core';

@Component({
    selector: 'ava-wel-app',
    template: '<h1>{{ title }}</h1>'
})
export class WelcomeComponent {
    title: string = "Bem vindo a aplicação de alocação";
}