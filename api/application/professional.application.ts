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

    // setProfessional(pid: number): Professional{
        
    // }
}