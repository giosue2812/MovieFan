
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
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
  constructor(private _builder:FormBuilder,private _service:UserService,private _router:Router,private _toastService:NbToastrService) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      'email':[null],
      'password':[null]
    })
  }
  submitForm(){
    this._service.login(this.form.getRawValue()).subscribe((data:string)=>{
      localStorage.setItem('token',data)
      this._service.decodeToken();
      this._router.navigate(['movie'])
    },(error)=>{
      this._toastService.show(status = 'danger','Mot de passe pou email incorrecte',{status}       
      )
    })
  }
} 
