import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'

import { Header } from '../shared/grid/grid-header';
import { CustomGridService } from '../shared/grid/grid.service';

import { Project } from './project';
import { Customer } from '../customer/customer';
import { Professional } from '../professional/professional';

import { ProjectService } from './project.service';
import { CustomerService } from '../customer/customer.service'
import { ProfessionalService } from '../professional/professional.service';


@Component({
    selector: 'ava-prj-app',
    templateUrl: './app/project/project.html'
})

export class ProjectComponent implements OnInit {

    constructor(private _projectService : ProjectService,
                private _professionalService: ProfessionalService,
                private _customerService: CustomerService) {}


    projects: Project[];
    customers: Customer[];
    professionals: Professional[];

    /*
        Método disparado ao inicializar a tela, logo após carregar o Html.
    */
    ngOnInit() {

        this._customerService.getCustomerList()
                             .then((customer: Customer[]) => {
                                this.customers = customer;
                                return this._professionalService.getProfessionalList();
                             })
                             .then((professional: Professional[]) => {
                                 this.professionals = professional;
                                 return this._projectService.getProjectsList();
                             })
                             .then((project: Project[]) => {
                                 this.projects = project;

                                 this.getProjectsDetails();
                             })

    }


    /*
        Recupera os detalhes dos projetos a partir dos clientes e profissionais.
    */
    getProjectsDetails(){
        this.projects.forEach ((item) => {
            this.getCustomersList(item);
            this.getProfessionalList(item);
        });
    }
    
    /*
        Recupera a lista de clientes.
    */
    getCustomersList(project: Project){
        project.customer = this.customers.find(customer => customer.customerID === project.customer.customerID);

    }

    /*
        Recupera a lista de profissionais.
    */
    getProfessionalList(project: Project){
        project.sponsor = this.professionals.find(professional => professional.pid === project.sponsor.pid);
    }
    

}