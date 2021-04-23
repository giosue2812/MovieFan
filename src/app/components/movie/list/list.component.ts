import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieForList } from 'src/app/models/Movie/MovieForList';
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
    private _movie: MovieService
  ) { }

  ngOnInit(): void {
    this.obsBooleanVisible.subscribe((data) =>{
      this.isVisible = data;
    })
    this._movie.getListMovie().subscribe((data:MovieForList[]) => {this.movies = data},(error)=>{console.log(error)})
  }

  public onVisible(){
    this.isVisible=false;
  } 
  public onClose(){
    this.isVisible = true;
  } 
} 
