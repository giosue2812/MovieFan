import { User } from "../User/User"

export interface NoticeWithUser{
    user:User;
    noticeByUser:[
        {
            title:string;
            content:string;
            dateNotice:Date;
        }
    ]
}