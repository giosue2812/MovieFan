import { Component, OnInit } from '@angular/core';
import { MovieForList } from 'src/app/models/MovieForList';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movie: MovieForList[];
  constructor(
    private _movie: MovieService
  ) { }

  ngOnInit(): void {
    this._movie.getListMovie().subscribe((data:MovieForList[]) => {this.movie = data},(error)=>{console.log(error)})
  }

}
