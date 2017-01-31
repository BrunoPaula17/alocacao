import { Professional } from '../../app/professional/professional';
import { ProfessionalPersistence } from '../persistence/professional.persistence';

export class ProfessionalApplication{

    /*
        Recupera a lista de profissionais na base de dados.
    */
    list(): Promise<Professional[]> {
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
         return professionalPersistence.list();
    }

    /*
        Recupera um profissional específico.
    */
    read(pid: number): Promise<Professional>{
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();

        pid = +pid;

        return professionalPersistence.read(pid);
    }

    /*
        Cria um novo profissional na base de dados.
    */
    create(professional: Professional): Promise<Professional>{                            
        
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();

        return professionalPersistence.create(professional);
        
    }

    /*  
        Atualiza as informações na base de dados.
    */
    update(professional: Professional): Promise<Professional>{
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        
        return professionalPersistence.update(professional);
    }

    /*
        Apaga logicamente as informações de um funcionário.
    */
    delete(professional: Professional): Promise<boolean>{

        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        
        /*
        if(isNaN(pid) && typeof pid === "number"){
            throw ("Por favor, informa o PID.");
        }else{
            return professionalPersistence.delete(pid);
        }
        */
        return professionalPersistence.delete(professional);
    }
}