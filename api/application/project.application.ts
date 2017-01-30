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
*/
update(project: Project): Promise<Project>{
        let projectPersistence: ProjectPersistence = new ProjectPersistence();

        return projectPersistence.update(project);
}
/*
    Recupera um projeto específico
*/
delete(projectID: number): Promise<boolean>{
    let projectPersistence: ProjectPersistence = new ProjectPersistence();

    return projectPersistence.delete(projectID);
}


}
