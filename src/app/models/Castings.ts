import { MovieForList } from "./MovieForList";
import { MovieWithDirctorAndWriter } from "./MovieWithDirectorAndWriter";

export interface Castings{
    castings:Casting[],
    movies:MovieForList,
    movieWithDirctorAndWriter:MovieWithDirctorAndWriter
}
export interface Casting{
    actor:string;
    role:string;
}