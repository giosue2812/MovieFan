import { NoticeByMovie } from "../Notice/NoticeByMovie";

export interface MovieForList{
    id: number;
    title: string;
    yearRelease: number;
    synopsis: string;
    noticeByMovie:NoticeByMovie
}