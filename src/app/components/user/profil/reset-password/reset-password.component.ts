import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
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
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _builder:FormBuilder,
    private _service:UserService,
    private _toastService:NbToastrService,
    private _router:Router ) { }

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
        password:[null,Validators.required],
        confirmPassword:[null,Validators.required]
      },
      {
        validator:ValidatePassword.CheckPassword
      } as AbstractControlOptions)
    }

  submitForm(){
    this._service.resetPassword(this.form.getRawValue()).subscribe((data)=>{
      if(data){
      this._toastService.show(status = 'success',`Votre mot de passe a été modifié`,{status})
      this._service.logout()
      this._router.navigate(['/user/login'])
      }
    })
  }

}
