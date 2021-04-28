import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { MovieForList } from 'src/app/models/Movie/MovieForList';
import { InsertComponent } from '../../person/insert/insert.component';
import { UserService } from '../../user/service/user.service';
import { MovieService } from '../service/movie.service';

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
    public _user:UserService
  ) { }

  ngOnInit(): void {
    this.loadItem();
    this.obsBooleanVisible.subscribe((data) =>{
      this.isVisible = data;
    })
  }
  loadItem(){
    this._movie.getListMovie().subscribe((data:MovieForList[])=>{
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
