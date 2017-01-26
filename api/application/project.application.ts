import { Project } from '../../app/project/project';
import { ProjectPersistence } from '../persistence/project.persistence';

export class ProjectApplication{
/*
    Recupera uma lista de projetos
*/
List(): Project[]{
    let projectPersistence: ProjectPersistence = new ProjectPersistence();

    return projectPersistence.List();
}

/*
    Recupera um projeto específico
*/
Read(projectID: number): Project{
    let projectPersistence: ProjectPersistence = new ProjectPersistence();

    return projectPersistence.Read(projectID);
}

/*
    Insere um projeto na base de dados
*/
Create(projectID: number, clientID: number, client:string, startDate: Date, endDate: Date, concludeDate: Date, ): Project[]{
    let projectPersistence : ProjectPersistence = new ProjectPersistence();
    let projectCreate : ProjectPersistence = new ProjectPersistence();

    // project = {
    //     "projectID": projectID,
    //     "clientID": clientID,
    //     "client": null,
    //     "startDate": new Date("2017-01-15T12:21:00.761Z"),
    //     "endDate": new Date("2017-05-15T12:21:00.761Z"),
    //     "concludeDate": null,
    //     "sponsorID": 9,
    //     "sponsor": null,
    //     "name": "PRJ009",
    //     "wbs": "WBS00009"
    // }

    return projectPersistence.Create(projectCreate);
}
/*
    Atualiza um projeto na base de dados
    return projectPersistence.Update();
*/
Update(projectID: number, client: number, startDate: Date, endDate: Date, concludeDate: Date, sponsor: number,name: string, wbs: string): Project[]{
    let projectPersistence : ProjectPersistence = new ProjectPersistence();
    let projectUpdate : ProjectPersistence = new ProjectPersistence();

    return projectPersistence.Update(projectUpdate);
}
/*
    Recupera um projeto específico
*/
Delete(projectID: number): boolean[]{
    let projectPersistence: ProjectPersistence = new ProjectPersistence();

    return projectPersistence.Delete(projectID);
}


}
