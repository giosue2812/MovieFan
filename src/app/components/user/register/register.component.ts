import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup } from '@angular/forms';
import { ValidatePassword } from 'src/app/shared/validators/checkPassword';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  constructor(private _builder:FormBuilder,private _service:UserService) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      'email':[null],
      'password':[null],
      'confirmPassword':[null],
      'birthDate':[null]
    },
    {
      validator:ValidatePassword.CheckPassword
    } as AbstractControlOptions)
  }

  submitForm(){
    this._service.register(this.form.getRawValue()).subscribe((data)=>{console.log(data)})
  }

}
