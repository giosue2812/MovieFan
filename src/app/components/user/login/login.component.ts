
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenResponse } from 'src/app/models/User/token';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup
  token:TokenResponse
  constructor(private _builder:FormBuilder,private _service:UserService) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      'email':[null],
      'password':[null]
    })
  }
  submitForm(){
    this._service.login(this.form.getRawValue()).subscribe((data:string)=>{
      sessionStorage.setItem('token',data)
    })
  }
} 
