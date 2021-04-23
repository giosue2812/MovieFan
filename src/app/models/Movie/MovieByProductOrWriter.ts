import { Person } from "../Person/Person"

export interface MovieByProductOrWritrt{
    person:Person,
    personProdWritMovies:[{
        title:string;
        synopsis:string;
    }]
}