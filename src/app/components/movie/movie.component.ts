import { Component, OnInit } from '@angular/core';
import { MovieForList } from 'src/app/models/MovieForList';
import { MovieService } from './service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
