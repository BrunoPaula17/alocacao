import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from './project';
import { ProjectService } from '../project/project.service';
import { Customer } from '../customer/customer';
import { Professional } from '../professional/professional';

//import { CustomerService } from '../customer/customer.service'
import { ProfessionalService } from '../professional/professional.service'

@Component({
    selector: 'ava-prj-dtl-app',
    templateUrl: './app/project/project-details.html'
})
export class ProjectDetailsComponent implements OnInit {
    
    constructor(private _router:ActivatedRoute,
                private _projectService: ProjectService,
                private _location:Location) {}

    action: string;
    project: Project;
    customers: Customer[];
    sponsors: Professional[];

    
    /*
        Método disparado ao inicializar a tela, logo após carregar o Html.
    */
    ngOnInit(): void {
        this._router.params.subscribe((params: Params) => {
            let projectId: number = +params['projectId'];
            this.action = params['action'];


            this.getDetails(projectId);
        });
    }

    /*
        Volta para a última página chamada.
    */
    goBack(): void {
        this._location.back();
    }

    /*
        Retorna os detalhes de um projeto específico.
    */
    getDetails(projectId: number): void {
        this._projectService.getProjectDetail(projectId)
            .then((project: Project) => {
                this.project = project;
            });
    }

    /*
        Realiza as alterações dos campos e habilita os botões de salvar.
    */
    updateButton(): void {
        
    }


    /*
        Realiza a inclusão / atualização das informações do projeto na base de dados.
    */
    saveButton(project: Project): void {

        if(this.action === 'create') {
                    this._projectService.createProject(project)
                            .then(project => this.project = project);  
        } else {
                    this._projectService.updateProject(project)
                            .then(project => this.project = project);  
        }
   
    }


    /* 
        Realiza a exclusão das informações do projeto na base de dados.
    */
    deleteButton(projectId:number): void {
        this._projectService.deleteProject(projectId)
                            .then(project => this.project = project);
    }
    
    

}