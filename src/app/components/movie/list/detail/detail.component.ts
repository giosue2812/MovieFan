import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Castings } from 'src/app/models/Movie/Castings';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Output() closeDetail:EventEmitter<boolean>
  @Input() id;
  movie:Castings
  constructor(
    private _movie:MovieService
  ) {
    this.closeDetail = new EventEmitter<boolean>();
   }

  ngOnInit(): void {
    this._movie.getDetailMovie(this.id).subscribe((data:Castings)=>{
      this.movie = data;
    })
  }

  public onClose(){
    this.closeDetail.emit(true);
  }
}
