import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User/User';
import {ValidatePassword } from 'src/app/shared/validators/checkPassword';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  
  form:FormGroup
  user:User
  constructor(private _activatedRoute:ActivatedRoute,private _builder:FormBuilder,private _service:UserService) { }

  ngOnInit(): void {
    this.user = this._activatedRoute.snapshot.data["user"];
    console.log(this.form)
    this.initForm();
  }
  initForm(){
    this.form = this._builder.group(
      {
        id:[null],
        email:[null],
        password:[null],
        confirmPassword:[null]
      },
      {
        validator:ValidatePassword.CheckPassword
      } as AbstractControlOptions)
    }

  submitForm(){
    this._service.resetPassword(this.form.getRawValue()).subscribe((data)=>{console.log(data)})
  }

}
