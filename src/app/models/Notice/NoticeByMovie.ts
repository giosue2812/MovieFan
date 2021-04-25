import { MovieForList } from "../Movie/MovieForList"

export interface NoticeByMovie{
  movie:MovieForList;
  noticeByMovie:[
    {
      isActive:boolean;
      email:"string";
      content:"string";
      dateNotice:Date
    }
  ]
}