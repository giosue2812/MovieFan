import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Castings } from 'src/app/models/Movie/Castings';
import { FormCasting } from 'src/app/models/Movie/Form/FormCasting';
import { MovieForm } from 'src/app/models/Movie/Form/MovieForm';
import { Person } from 'src/app/models/Person/Person';
import { CommonService } from 'src/app/shared/services/common.service';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  person:Person[];
  newMovieForm:FormGroup;
  arrayYearRelease:number[] = [];
  movie:Castings;
  constructor(private _builder:FormBuilder,private _common:CommonService,private _service:MovieService,private _activated:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.initArrayYear();
    this._common.getPersons().subscribe((data)=>this.person = data);
    this._service.getDetailMovie(this._activated.snapshot.params['id']).subscribe((data)=>{this.movie = data;})
    this.newMovieForm = this._builder.group({
      'id':[this._activated.snapshot.params['id']],
      'title':[null,[Validators.maxLength(15)]],
      'yearRelease':[null],
      'synopsis':[null],
      'director':[null],
      'writer':[null],
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
    newMovie.id = this.newMovieForm.get('id').value;
    newMovie.title = this.newMovieForm.get('title').value;
    newMovie.synopsis = this.newMovieForm.get('synopsis').value;
    newMovie.yearRelease = this.newMovieForm.get('yearRelease').value ? this.newMovieForm.get('yearRelease').value:this.movie.movieWithDirctorAndWriter.yearRelease;
    newMovie.director = this.newMovieForm.get('director').value ? this.newMovieForm.get('director').value: this.person.find((p)=>p.completeName == this.movie.movieWithDirctorAndWriter.director).id;
    newMovie.writer = this.newMovieForm.get('writer').value ? this.newMovieForm.get('writer').value: this.person.find((p)=>p.completeName == this.movie.movieWithDirctorAndWriter.writer).id;
    let newCasting = new FormCasting();
    newCasting.addCastings = this.newMovieForm.value['casting'];
    if(newCasting.addCastings.find(p => p.idPerson) == null) this._service.editMovie(newMovie,null)
    else this._service.editMovie(newMovie,newCasting);
    this._router.navigate(['movie'])
  }
}
