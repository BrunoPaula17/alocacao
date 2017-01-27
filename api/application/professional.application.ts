import { Professional } from '../../app/professional/professional';
import { ProfessionalPersistence } from '../persistence/professional.persistence';

export class ProfessionalApplication{

    /*
        Recupera a lista de profissionais na base de dados.
    */
    List(): Promise<Professional[]> {
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
         return professionalPersistence.list();
    }

    /*
        Recupera um profissional específico.
    */
    Read(pid: number): Promise<Professional>{
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        return professionalPersistence.read(pid);
    }

    /*
        Cria um novo profissional na base de dados.
    */
    Create(pid: number, eid: string, name: string, email: string,roleID: number, prefix: number, phone: string): Promise<Professional>{                            
        
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();

        let professional : Professional = new Professional();
        
        professional = {
            "pid": pid,
            "eid": eid,
            "name": name,
            "email": email,
            "roleID": roleID,
            "prefix": prefix,
            "phone": phone,
            "role": null,
            "deleted": false
        };

        return professionalPersistence.create(professional);
        
    }

    /*  
        Atualiza as informações na base de dados.
    */
    Update(pid: number, eid: string, name: string, email: string, 
           roleID: number, prefix: number, phone: string): Promise<Professional>{
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        
        let professional : Professional = new Professional();
        
        professional = {
            "pid": pid,
            "eid": eid,
            "name": name,
            "email": email,
            "roleID": roleID,
            "prefix": prefix,
            "phone": phone,
            "role": null,
            "deleted": false
        };
       
        return professionalPersistence.update(professional);
    }

    /*
        Apaga logicamente as informações de um funcionário.
    */
    Delete(pid: number): Promise<boolean>{

        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        
        /*
        if(isNaN(pid) && typeof pid === "number"){
            throw ("Por favor, informa o PID.");
        }else{
            return professionalPersistence.delete(pid);
        }
        */
        return professionalPersistence.delete(pid);
    }
}