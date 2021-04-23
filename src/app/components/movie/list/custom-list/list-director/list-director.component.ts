import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import { MovieByPerson } from 'src/app/models/Movie/MovieByPerson';
import { MovieByProductOrWritrt } from 'src/app/models/Movie/MovieByProductOrWriter';
import { Person } from 'src/app/models/Person/Person';
import { CommonService } from 'src/app/shared/services/common.service';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-list-director',
  templateUrl: './list-director.component.html',
  styleUrls: ['./list-director.component.scss']
})
export class ListDirectorComponent implements OnInit {

  movieByProd:MovieByProductOrWritrt;
  choiceListPerson:FormControl;
  filterControl:Observable<Person[]>
  filterPerson:Person[];
  person:Person[];
  value:string;
  id:number;
  nameComplete:string;
  constructor(
    private _service:MovieService,
    private _common:CommonService
  ) { }

  ngOnInit(): void {
    this._common.getPersons().subscribe((data:Person[])=>{
      this.person = data;
    })
    this.filterControl = of(this.person);
    this.filterPerson = this.person;

    this.choiceListPerson = new FormControl();
    this.filterControl = this.choiceListPerson.valueChanges
    .pipe(
      startWith(''),
      map(f =>  this.filter(f))
    )
  }
  private filter(value:string):Person[]{
    const filterValue = value.toLowerCase();
    return this.person.filter(item => item.completeName.toLowerCase().includes(filterValue));
  }
  onModelChange(value:string){
    this.filterPerson = this.filter(value);
    this.filterPerson.forEach((x)=>{
      this.id = x.id;
    })
  }
  choiceProducteur(){
    this._service.getListMovieByProdOrWriter(this.id).subscribe((data:MovieByProductOrWritrt)=>{
      this.movieByProd = data;
    })
  }
}
