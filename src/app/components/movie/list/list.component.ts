import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { MovieForList } from 'src/app/models/Movie/MovieForList';
import { Notice } from 'src/app/models/Notice/notice';
import { NoticeByMovie } from 'src/app/models/Notice/NoticeByMovie';
import { CreateComponent } from '../../notice/create/create.component';
import { NoticeService } from '../../notice/service/notice.service';
import { MovieService } from '../service/movie.service';
import { NoticeComponent } from './notice/notice.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  isVisible:boolean = true;
  obsBooleanVisible = of(this.isVisible);
  movies: MovieForList[];
  constructor(
    private _movie: MovieService,
    private _dialogService:NbDialogService
  ) { }

  ngOnInit(): void {
    this.obsBooleanVisible.subscribe((data) =>{
      this.isVisible = data;
    })
    this._movie.getListMovie().subscribe((data:MovieForList[]) => {
      this.movies = data
    },(error)=>{console.log(error)})
  }
  onVisible(){
    this.isVisible=false;
  }
  onClose(){
    this.isVisible = true;
  }
} 
