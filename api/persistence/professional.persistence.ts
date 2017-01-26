import {Professional } from '../../app/professional/Professional';
import { ICrud } from './crud.interface';

export class ProfessionalPersistence implements ICrud<Professional>{

    /*
        
    */
    private professionals: Professional[] = [ 
        {

            "pid": 10715376,
            "eid": "ronye.peterson.anjos",
            "name": "Ronye Peterson Martins dos Anjos",
            "email": "ronye.peterson.anjos@avanade.com",
            "roleID": 1,
            "prefix": 11,
            "phone": "971537512",
            "deleted": false,
            "role": null
        },
        {
            "pid": 10715377,
            "eid": "thomas.anjos",
            "name": "Thomas Jefferson Martins dos Anjos",
            "email": "thomas.anjos@avanade.com",
            "roleID": 2,
            "prefix": 11,
            "phone": "963484588",
            "deleted": false,
            "role": null
        },
        {
            "pid": 10715378,
            "eid": "elziria.anjos",
            "name": "Elziria Martins dos Anjos",
            "email": "elziria.dos.anjos@avanade.com",
            "roleID":3,
            "prefix": 11,
            "phone": "984841212",
            "deleted": false,
            "role": null
        },
        {
            "pid": 10715379,
            "eid": "jose.dos.anjos",
            "name": "Jose dos Anjos",
            "email": "jose.dos.anjos@avanade.com",
            "roleID": 4,
            "prefix": 11,
            "phone": "931312323",
            "deleted": false,
            "role": null
        }
        ];

    /*
        Retorna a lista de profissionais.
    */
    List(): Professional[] {
        return this.professionals;
    }

    /*
        Retorna um funcionário específico selecionado na tabela.
    */
    Read(pid: number): Professional {
        return this.professionals.find(professional => professional.pid === pid);
        
    }
      
    /*
        Criação de um novo profissional na base de dados.
    */
    Create(professionalCreate: Professional): Professional {
        if (professionalCreate.pid = undefined) {
            return null
           }
        else
            this.professionals.push(professionalCreate);
            return this.professionals.find(professional => professional.pid === professionalCreate.pid);
    }

    /*
        Atualiza as informações do profissional 
    */
    Update(professionalUpdate: Professional): Professional {
        let _professionalUpdate:Professional 
        _professionalUpdate = this.professionals.find(professional => professional.pid === professionalUpdate.pid);

        if (professionalUpdate != null) {
            _professionalUpdate = professionalUpdate;
            return professionalUpdate
    }
        else
            return null;
    }

    /*
        Deleta logicamente as informações do profissional
    */
    Delete(pid: number): boolean {
        let _professionalDelete:Professional
        _professionalDelete = this.professionals.find(professional => professional.pid === pid);  
                
        if (_professionalDelete != null) {
           _professionalDelete.deleted = true;  
           return _professionalDelete.deleted;
        }
        else
            return false;
    }

}

    
