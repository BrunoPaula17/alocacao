import { Router, Request, Response } from 'express';
import { Professional } from '../../app/professional/professional';
import { ProfessionalApplication } from '../application/professional.application';

const professionalRouter: Router = Router();

/*
    Recupera a lista de professionais da base de dados.
*/
professionalRouter.get('/list', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();
    
    professionalApp.list()
        .then((professionals: Professional[]) => {
            response.json(professionals);
        })
});

/*
    Recupera um profissional da base de dados.
*/
professionalRouter.get('/details/:pid', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();
    let pid: number = +request.params.pid;
    
    professionalApp.read(pid)
        .then((professional: Professional) =>  {
            response.json(professional);
    })
 });

/*
   Atualiza um profissional na base de dados.
*/
professionalRouter.put('/update/', (request: Request, response: Response) => {
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();

    let professional = JSON.parse(request.body.professional);

    professionalApp.update(professional)
        .then((professional: Professional) =>  {
            response.json(professional);
    })
});

/*
    Deleta um profissional na base de dados.
*/
professionalRouter.delete('/delete/:pid', (request: Request, response: Response) => {
        let professionalApp: ProfessionalApplication = new ProfessionalApplication();

        let pid = +request.params.pid;

       professionalApp.delete(pid)
                      .then(() => {
                          response.json(true);
                      })
                      .catch((() => {
                        response.json(false); 
                      }));
});

professionalRouter.post('/insert/', (request: Request, response: Response) => {  
    let professionalApp: ProfessionalApplication = new ProfessionalApplication();  

    let professional: Professional = new Professional();
    professional = JSON.parse(request.body.professional);
   
    professionalApp.create(professional)  
        .then((professional: Professional) =>  {  
            response.json(professional);  
    })  
});  

export { professionalRouter }
