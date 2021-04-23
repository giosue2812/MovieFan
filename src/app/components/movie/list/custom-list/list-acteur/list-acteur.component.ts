import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MovieByPerson } from 'src/app/models/Movie/MovieByPerson';
import { Person } from 'src/app/models/Person/Person';
import { CommonService } from 'src/app/shared/services/common.service';
import { MovieService } from '../../../service/movie.service';

@Component({
  selector: 'app-list-acteur',
  templateUrl: './list-acteur.component.html',
  styleUrls: ['./list-acteur.component.scss']
})
export class ListActeurComponent implements OnInit {

  movieByActor:MovieByPerson;
  choiceListPerson:FormControl;
  filterControl:Observable<Person[]>
  filterPerson:Person[]
  person:Person[]
  value:string
  id:number;

  constructor(
    private _service:MovieService,
    private _common:CommonService
  ) { }

  ngOnInit(): void {
    this._common.getPersons().subscribe((data:Person[])=>{
      this.person = data
    })
    this.filterControl = of(this.person);
    this.filterPerson = this.person;

    this.choiceListPerson = new FormControl();
    this.filterControl = this.choiceListPerson.valueChanges
    .pipe(
      startWith(''),
      map(f => this.filter(f))
    );
  }
  private filter(value: string): Person[] {
    const filterValue = value.toLowerCase();
    return this.person.filter(item => item.completeName.toLowerCase().includes(filterValue));
  }

  onModelChange(value: string) {
    this.filterPerson = this.filter(value);
    this.filterPerson.forEach((x) => {
      this.id = x.id
    })
  }
  choiceActor(){
    this._service.getListMovieByPerson(this.id).subscribe((data:MovieByPerson) => {
      this.movieByActor = data;
    });
  }
}
