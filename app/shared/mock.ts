import { Booking } from '../booking/booking';
import { Professional } from '../professional/professional';
import { Project } from '../project/project';
import { Customer } from '../customer/customer';
import { Role } from '../role/role';

export const BOOKINGS: Booking[] = [
    {
        "bookingID": 1,
        "projectID": 1,
        "pid": 10715376,
        "auditID": 1,
        "initialDate": new Date("2017-02-17T02:00:00.000Z"),
        "endDate": new Date("2017-03-03T03:00:00.000Z"),
        "bookingPercentual": 1,
        "project": null,
        "professional": null
    },
    {
        "bookingID": 1,
        "projectID": 1,
        "pid": 10715377,
        "auditID": 1,
        "initialDate": new Date("2017-02-16T02:00:00.000Z"),
        "endDate": new Date("2017-03-03T03:00:00.000Z"),
        "bookingPercentual": 1,
                "project": null,
        "professional": null
    },
    {
        "bookingID": 1,
        "projectID": 1,
        "pid": 10715378,
        "auditID": 1,
        "initialDate": new Date("2017-02-16T02:00:00.000Z"),
        "endDate": new Date("2017-03-03T03:00:00.000Z"),
        "bookingPercentual": 1,
                "project": null,
        "professional": null
    }
];

export const PROFESSIONALS: Professional[] = [
    {
        "pid": 10715376,
        "eid": "ronye.peterson.anjos",
        "name": "Ronye Peterson Martins dos Anjos",
        "email": "ronye.peterson.anjos@avanade.com",
        "roleID": 10,
        "prefix": 11,
        "phone": 971537512
    },
    {
        "pid": 10715377,
        "eid": "thomas.anjos",
        "name": "Thomas Jefferson Martins dos Anjos",
        "email": "thomas.anjos@avanade.com",
        "roleID": 9,
        "prefix": 11,
        "phone": 963484588
    },
    {
        "pid": 10715378,
        "eid": "elziria.anjos",
        "name": "Elziria Martins dos Anjos",
        "email": "elziria.dos.anjos@avanade.com",
        "roleID": 9,
        "prefix": 11,
        "phone": 984841212
    },
    {
        "pid": 10715379,
        "eid": "jose.dos.anjos",
        "name": "Jose dos Anjos",
        "email": "jose.dos.anjos@avanade.com",
        "roleID": 8,
        "prefix": 11,
        "phone": 931312323
    }
]

export const CUSTOMERS: Customer[] = [{
    "customerID": 1,
    "name": "Santander",
    "responsible": 10775951
},

{
    "customerID": 2,
    "name": "Itaú",
    "responsible": 10775951
},

{
    "customerID": 3,
    "name": "Safra",
    "responsible": 10775951
}];

export const ROLES: Role[] = [
    {
        "roleId": 1,
        "name": "Associate Software Engineer",
        "brc": "2017SE",
        "level": 12,
        "description": "Initial software development"
    },
    {
        "roleId": 2,
        "name": "Software Engineer",
        "brc": "2017SE2",
        "level": 11,
        "description": "Software development"
    },
    {
        "roleId": 3,
        "name": "Senior Software Engineer",
        "brc": "2017SES",
        "level": 10,
        "description": "Senior software development"
    },
    {
        "roleId": 4,
        "name": "System Analyst",
        "brc": "2017SA",
        "level": 9,
        "description": "Role`s description"
    },
    {
        "roleId": 5,
        "name": "Senior System Analyst",
        "brc": "2017SSA",
        "level": 8,
        "description": "Role`s description"
    }];
export const PROJECTS: Project[] = [
    { "projectID": 1, "clientID": 1, "startDate": new Date('2017-02-11T12:21:00.761Z'), "endDate": new Date('2017-01-26T12:21:00.761Z'), "concludeDate": null, "sponsor": 1, "name": "PRJ001", wbs: "WBS00001" },
    { "projectID": 2, "clientID": 2, "startDate": new Date('2017-03-12T12:21:00.761Z'), "endDate": new Date('2017-01-27T12:21:00.761Z'), "concludeDate": null, "sponsor": 2, "name": "PRJ002", wbs: "WBS00002" },
    { "projectID": 3, "clientID": 3, "startDate": new Date('2017-01-13T12:21:00.761Z'), "endDate": new Date('2017-01-12T12:21:00.761Z'), "concludeDate": null, "sponsor": 3, "name": "PRJ003", wbs: "WBS00003" },
    { "projectID": 4, "clientID": 4, "startDate": new Date('2017-01-14T12:21:00.761Z'), "endDate": new Date('2017-01-30T12:21:00.761Z'), "concludeDate": null, "sponsor": 4, "name": "PRJ004", wbs: "WBS00004" },
    { "projectID": 5, "clientID": 5, "startDate": new Date('2017-05-15T12:21:00.761Z'), "endDate": new Date('2017-01-6T12:21:00.761Z'), "concludeDate": null, "sponsor": 5, "name": "PRJ005", wbs: "WBS00005" },
    { "projectID": 6, "clientID": 6, "startDate": new Date('2017-06-16T12:21:00.761Z'), "endDate": new Date('2017-01-2T12:21:00.761Z'), "concludeDate": null, "sponsor": 6, "name": "PRJ006", wbs: "WBS00006" },
    { "projectID": 7, "clientID": 7, "startDate": new Date('2017-07-17T12:21:00.761Z'), "endDate": new Date('2017-01-16T12:21:00.761Z'), "concludeDate": null, "sponsor": 7, "name": "PRJ007", wbs: "WBS00007" },
    { "projectID": 8, "clientID": 8, "startDate": new Date('2017-05-18T12:21:00.761Z'), "endDate": new Date('2017-01-12T12:21:00.761Z'), "concludeDate": null, "sponsor": 8, "name": "PRJ008", wbs: "WBS00008" },
    { "projectID": 9, "clientID": 9, "startDate": new Date('2017-07-19T12:21:00.761Z'), "endDate": new Date('2017-01-46T12:21:00.761Z'), "concludeDate": null, "sponsor": 9, "name": "PRJ009", wbs: "WBS00009" },
    { "projectID": 10, "clientID": 10, "startDate": new Date('2017-04-16T12:21:00.761Z'), "endDate": new Date('2017-02-26T12:21:00.761Z'), "concludeDate": null, "sponsor": 10, "name": "PRJ010", wbs: "WBS00011" },
    { "projectID": 11, "clientID": 11, "startDate": new Date('2017-05-16T12:21:00.761Z'), "endDate": new Date('2017-03-20T12:21:00.761Z'), "concludeDate": null, "sponsor": 11, "name": "PRJ011", wbs: "WBS00012" },
    { "projectID": 12, "clientID": 12, "startDate": new Date('2017-06-16T12:21:00.761Z'), "endDate": new Date('2017-04-22T12:21:00.761Z'), "concludeDate": null, "sponsor": 12, "name": "PRJ012", wbs: "WBS00013" },
    { "projectID": 13, "clientID": 13, "startDate": new Date('2017-07-16T12:21:00.761Z'), "endDate": new Date('2017-05-21T12:21:00.761Z'), "concludeDate": null, "sponsor": 13, "name": "PRJ013", wbs: "WBS00014" },
    { "projectID": 14, "clientID": 14, "startDate": new Date('2017-08-16T12:21:00.761Z'), "endDate": new Date('2017-01-26T12:21:00.761Z'), "concludeDate": null, "sponsor": 14, "name": "PRJ014", wbs: "WBS00015" },
    { "projectID": 15, "clientID": 15, "startDate": new Date('2017-09-16T12:21:00.761Z'), "endDate": new Date('2017-01-26T12:21:00.761Z'), "concludeDate": null, "sponsor": 15, "name": "PRJ015", wbs: "WBS00016" }
]