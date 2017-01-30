import { Project } from '../../app/project/project';
import { ProjectPersistence } from '../persistence/project.persistence';

export class ProjectApplication{
/*
    Recupera uma lista de projetos
*/
getProjects(): Promise<Project[]>{
    let projectPersistence: ProjectPersistence = new ProjectPersistence();

    return projectPersistence.list();
}

/*
    Recupera um projeto específico
*/
getProject(projectId: number): Promise<Project>{
    let projectPersistence: ProjectPersistence = new ProjectPersistence();

    return projectPersistence.read(projectId);
}

/*
    Insere um projeto na base de dados
*/
create(project: Project): Promise<Project>{
        let projectPersistence: ProjectPersistence = new ProjectPersistence();

        return projectPersistence.create(project);
}

/*
    Atualiza um projeto na base de dados
    return projectPersistence.Update();
*/
update(projectID: number, client: number, startDate: Date, endDate: Date, concludeDate: Date, sponsor: number,name: string, wbs: string): Promise<Project[]>{
    let projectPersistence : ProjectPersistence = new ProjectPersistence();
    let projectUpdate : ProjectPersistence = new ProjectPersistence();

    return null;//projectPersistence.Update(projectUpdate);
}
/*
    Recupera um projeto específico
*/
delete(projectID: number): Promise<boolean>{
    let projectPersistence: ProjectPersistence = new ProjectPersistence();

    return projectPersistence.delete(projectID);
}


}
