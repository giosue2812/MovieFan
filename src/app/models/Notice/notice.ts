import { MovieForList } from "../Movie/MovieForList";
import { User } from "../User/User";
import { NoticeWithUser } from "./NoticeWithUser";

export interface Notice{
    id:number;
    content:string;
    dateNotice:Date;
    isActive:boolean;
    idMovie:number;
    idUsers:number;
    movie:MovieForList;
    user:User
}
