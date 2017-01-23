import {Professional } from '../../app/professional/Professional'

export class ProfessionalPersistence{

    private Professional: Professional[]=[{

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

    getProfessional(id: number): Professional {
        return this.professional.find(professional => professional.pid === id);
    }

}