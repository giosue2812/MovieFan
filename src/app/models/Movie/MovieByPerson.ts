import { Person } from "../Person/Person"

export interface MovieByPerson{
    person:Person;
    movieByPerson:[{
        title:string,
        synopsis:string,
        role?:string;
    }]
}
