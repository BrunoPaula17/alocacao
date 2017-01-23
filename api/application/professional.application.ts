import { Professional } from '../../app/professional/professional';
import { ProfessionalPersistence } from '../persistence/professional.persistence';

export class ProfessionalApplication{
    getProfessionals(): Professional[]{
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();

        return professionalPersistence.getProfessionals();
    }

    getProfessional(pid: number): Professional{
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();

        return  professionalPersistence.getProfessional(pid);
    }

    insertProfessionals(pid: number, eid: string, name: string, email: string, 
                        roleID: number, prefix: number, phone: string): Professional{                            
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();

        if((isNaN(pid) || pid === null)||
           (eid === null)||(email === null)||
           (isNaN(roleID) || roleID === null)||
           (prefix === null)||(phone === null)){
            throw ("Por favor, verificar as informações.");
        }else{
            return null;//professionalPersistence.insertProfessional(pid, eid, name, email, roleID, prefix, phone);
        }
    }

    updateProfessional(pid: number, eid: string, name: string, email: string, 
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

    deleteProfessional(pid: number): Professional{

        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        
        if(isNaN(pid) && typeof pid === "number"){
            throw ("Por favor, informa o PID.");
        }else{
            return null;//professionalPersistence.deleteProfessional(pid);
        }
    }
}