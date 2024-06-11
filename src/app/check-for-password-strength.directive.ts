import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import {passwordStrengthValidator} from "../Validators/passwordStrengthValidator"

@Directive({
  selector: '[appCheckForPasswordStrength]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:CheckForPasswordStrengthDirective,
    multi:true
  }]
})
export class CheckForPasswordStrengthDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return passwordStrengthValidator()(control);
    
  }
  

}
