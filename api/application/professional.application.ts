import { Professional } from '../../app/professional/professional';
import { ProfessionalPersistence } from '../persistence/professional.persistence';

export class ProfessionalApplication{

    /*
        Recupera a lista de profissionais na base de dados.
    */
    List(): Professional[]{
        
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();

        return professionalPersistence.List();
    }

    /*
        Recupera um profissional específico.
    */
    Read(pid: number): Professional{
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        return professionalPersistence.Read(pid);
    }

    /*
        Cria um novo profissional na base de dados.
    */
    Create(pid: number, eid: string, name: string, email: string, 
                        roleID: number, prefix: number, phone: string): Professional{                            
        
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();

        if((isNaN(pid) || pid === null)||
           (eid === null)||(email === null)||
           (isNaN(roleID) || roleID === null)||
           (prefix === null)||(phone === null)){
            throw ("Por favor, verificar as informações.");
        }else{
            return null; //professionalPersistence.Create(pid, eid, name, email, roleID, prefix, phone);
        }
    }

    /*  
        Atualiza as informações na base de dados.
    */
    Update(pid: number, eid: string, name: string, email: string, 
                        roleID: number, prefix: number, phone: string): Professional{
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        
        if((isNaN(pid) || pid === null)||
           (eid === null)||(email === null)||
           (isNaN(roleID) || roleID === null)||
           (prefix === null)||(phone === null)){
            throw ("Por favor, verificar as informações.");
        }else{
            return null;//professionalPersistence.updateProfessional(pid, eid, name, email, roleID, prefix, phone);
        }
    }

    /*
        Apaga logicamente as informações de um funcionário.
    */
    Delete(pid: number): Professional{

        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        
        if(isNaN(pid) && typeof pid === "number"){
            throw ("Por favor, informa o PID.");
        }else{
            return null;//professionalPersistence.deleteProfessional(pid);
        }
    }
}