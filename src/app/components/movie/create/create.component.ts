import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Casting, Castings } from 'src/app/models/Movie/Castings';
import { FormCasting, NewCasting } from 'src/app/models/Movie/Form/FormCasting';
import { MovieForm } from 'src/app/models/Movie/Form/MovieForm';
import { MovieForList } from 'src/app/models/Movie/MovieForList';
import { Person } from 'src/app/models/Person/Person';
import { CommonService } from 'src/app/shared/services/common.service';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-create', 
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  person:Person[];
  newMovieForm:FormGroup;
  arrayYearRelease:number[] = [];
  selectdYear:number;
  id:number;
  constructor(private _builder:FormBuilder,private _common:CommonService,private _service:MovieService,private _router:Router) { }

  ngOnInit(): void {
    this.initArrayYear();
    this._common.getPersons().subscribe((data)=>this.person = data);
    this.newMovieForm = this._builder.group({
      'title':[null,[Validators.maxLength(15),Validators.required]],
      'yearRelease':[null],
      'synopsis':[null,[Validators.maxLength(50)]],
      'director':[null,[Validators.required]],
      'writer':[null,[Validators.required]],
      'casting':this._builder.array([
        new FormGroup({ 
          'idPerson':new FormControl(null),
          'role':new FormControl(null)
        })
      ])
    })
    this.formArrayCasting()
  }
  formArrayCasting():FormArray{
    return this.newMovieForm.get('casting') as FormArray
  }
  addControlCasting():void{
    this.formArrayCasting().push(new FormGroup({
      'idPerson':new FormControl(null),
      'role':new FormControl(null)
    }));
  }
  initArrayYear()
  {
    const date = new Date();
    for(let i = 1980;i < date.getFullYear();i++)
    {
      this.arrayYearRelease.push(i);
    }
  }

  submitForm(){
    let newMovie = new MovieForm();
    newMovie.title = this.newMovieForm.get('title').value;
    newMovie.synopsis = this.newMovieForm.get('synopsis').value;
    newMovie.yearRelease = this.newMovieForm.get('yearRelease').value;
    newMovie.director = this.newMovieForm.get('director').value;
    newMovie.writer = this.newMovieForm.get('writer').value;

    let newCasting  = new FormCasting();
    newCasting.addCastings = this.newMovieForm.value['casting'];

    this._service.createMovie(newMovie,newCasting);
    
    this._router.navigate(['movie'])
  }

} 
