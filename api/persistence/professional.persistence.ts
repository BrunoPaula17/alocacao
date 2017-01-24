import {Professional } from '../../app/professional/Professional';
import { ICrud } from './crud.interface';

export class ProfessionalPersistence implements ICrud<Professional>{

<<<<<<< HEAD
    /*
        
    */
    private professionals: Professional[] = [ 
        {

=======
    private professional: 
        Professional[]=[{
>>>>>>> b1858600dba0d7db7b3e91fb9aaca95377e7f431
            "pid": 10715376,
            "eid": "ronye.peterson.anjos",
            "name": "Ronye Peterson Martins dos Anjos",
            "email": "ronye.peterson.anjos@avanade.com",
            "roleID": 1,
            "prefix": 11,
            "phone": "971537512",
            "role": null,
            "deleted":false
        },
        {
            "pid": 10715377,
            "eid": "thomas.anjos",
            "name": "Thomas Jefferson Martins dos Anjos",
            "email": "thomas.anjos@avanade.com",
            "roleID": 2,
            "prefix": 11,
            "phone": "963484588",
<<<<<<< HEAD
            "deleted": false,
            "role": null
=======
            "role": null,
            "deleted":false
>>>>>>> b1858600dba0d7db7b3e91fb9aaca95377e7f431
        },
        {
            "pid": 10715378,
            "eid": "elziria.anjos",
            "name": "Elziria Martins dos Anjos",
            "email": "elziria.dos.anjos@avanade.com",
            "roleID":3,
            "prefix": 11,
            "phone": "984841212",
            "role": null,
            "deleted":false
        },
        {
            "pid": 10715379,
            "eid": "jose.dos.anjos",
            "name": "Jose dos Anjos",
            "email": "jose.dos.anjos@avanade.com",
            "roleID": 4,
            "prefix": 11,
            "phone": "931312323",
            "role": null,
            "deleted":false
        }
<<<<<<< HEAD
    ];

    /*
        Retorna a lista de profissionais.
    */
=======
        ];
        
>>>>>>> b1858600dba0d7db7b3e91fb9aaca95377e7f431
    getProfessionals(): Professional[] {
        return this.professionals;
    }

    /*
        Retorna um funcionário específico selecionado na tabela.
    */
    getProfessional(pid: number): Professional {
        return this.professionals.find(professional => professional.pid === pid);
    }

<<<<<<< HEAD
    
    /*
        Criação de um novo profissional na base de dados.
    */
    Create(professional: Professional): Professional {
        return null;
    }
=======
    insertProfessional(                     
                        pid: number,
                        eid: string,
                        name: string,
                        email: string,
                        roleID:number,
                        prefix: number,
                        phone: string ): number {
        
        return pid;
>>>>>>> b1858600dba0d7db7b3e91fb9aaca95377e7f431

    /*
        Retorna a lista de profissionais.
    */
    List(): Professional[] {
        return this.professionals;
    }

<<<<<<< HEAD
    /*
        Retorna um funcionário específico selecionado na tabela.
    */
    Read(pid: number): Professional {
        return this.professionals.find(professional => professional.pid === pid);
    }

    /*
        Atualiza as informações do profissional 
    */
    Update(professionalUpdate: Professional): Professional {
        let professional: Professional = this.Read(professionalUpdate.pid);
        professional = professionalUpdate;
        return professional;
    }

    /*
        Deleta logicamente as informações do profissional
    */
    Delete(pid: number): boolean {
        return null;
=======
    updateProfessional( 
                        pid: number,
                        eid: string,
                        name: string,
                        email: string,
                        roleID:number,
                        prefix: number,
                        phone: string ): number {

        let _professionalArray:Professional;
        _professionalArray = this.professional.find(professional => professional.pid === pid);
        
        _professionalArray.eid= eid;
        _professionalArray.name= name;
        _professionalArray.email= email;
        _professionalArray.roleID=roleID;
        _professionalArray.prefix= prefix;
        _professionalArray.phone=phone 

       return pid;
    
}

    deleteProfessional(pid: number ): boolean {
            
        let _professionalArray:Professional;
        
        _professionalArray = this.professional.find(professional => professional.pid === pid);
        _professionalArray.deleted = true;
        
        return false;       
        
>>>>>>> b1858600dba0d7db7b3e91fb9aaca95377e7f431
    }

}

    
