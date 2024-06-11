import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { checkPasswordMatching } from 'src/Validators/checkPasswordMatching';

@Directive({
  selector: '[appMatchPasswords]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:MatchPasswordsDirective,
    multi:true
  }]

})
export class MatchPasswordsDirective implements Validator{
@Input() appMatchPasswords:string[];
  constructor() { 
    this.appMatchPasswords=[];
  }
  validate(formGroup:FormGroup):ValidationErrors|null {
  return  checkPasswordMatching(this.appMatchPasswords[0],this.appMatchPasswords[1])(formGroup);
    
  }
  
}
