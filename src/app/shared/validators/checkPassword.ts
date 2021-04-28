import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ValidatePassword{
    static CheckPassword(abstractControl:AbstractControl):ValidationErrors|null{
        let password = abstractControl.get('password').value;
        let confirmPassword = abstractControl.get('confirmPassword').value;
        if(password != confirmPassword){
            abstractControl.get('confirmPassword').setErrors({
                CheckPassword:true
            })
        }
        else{
            return null
        }
    }
}
