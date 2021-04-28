import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/Person/Person';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.scss']
})
export class UpdatePersonComponent implements OnInit {

  form:FormGroup;
  person:Person;
  constructor(private _builder:FormBuilder,private _service:PersonService,private _activatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.person = this._activatedRoute.snapshot.data['objPerson'];
    this.form = this._builder.group({
      'id':[null],
      'firstName':[null],
      'lastName':[null]
    })
  }
  submitForm(){
    this._service.updatePerson(this.form.getRawValue()).subscribe((data)=>{this.route.navigate(['person'])})
  }
}
