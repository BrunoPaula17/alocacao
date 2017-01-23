import {Professional } from '../../app/professional/Professional'

export class ProfessionalPersistence{

    private professional: 
        Professional[]=[{

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
    private professional: Professional[]=[{

        "pid": 10715376,
        "eid": "ronye.peterson.anjos",
        "name": "Ronye Peterson Martins dos Anjos",
        "email": "ronye.peterson.anjos@avanade.com",
        "roleID": 1,
        "prefix": 11,
        "phone": "971537512",
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
        "role": null
    }
    ];

    getProfessionals(): Professional[] {
        return this.professional;
    }

    getProfessional(pid: number): Professional {
        return this.professional.find(professional => professional.pid === pid);
    }

    insertProfessional(                     
                        pid: number,
                        eid: string,
                        name: string,
                        email: string,
                        roleID:number,
                        prefix: number,
                        phone: string ): Professional {

        
        professional[]=[{
            "pid": pid,
            "eid": eid,
            "name": name,
            "email": email,
            "roleID": roleID,
            "prefix": prefix,
            "phone": phone,
            "deleted": false,
            "role": null
        }]
                            
       return pid;

    }

    updateProfessional( 
                        pid: number,
                        eid: string,
                        name: string,
                        email: string,
                        roleID:number,
                        prefix: number,
                        phone: string ): Professional {

    professional[this.professional.find(professional => professional.pid === pid)]=[{
            "eid": eid,
            "name": name,
            "email": email,
            "roleID": roleID,
            "prefix": prefix,
            "phone": phone,
            "deleted": false,
            "role": null
        }]
                            
       return pid;
    }

    deleteProfessional(pid: number ): boolean {
        
        if this.professional.find(professional => professional.pid === pid)] {
            professional[this.professional.find(professional => professional.pid === pid)]=[{
                "deleted": true,
            }]
            return true;
        } else
            return false;
        
    }
    
}