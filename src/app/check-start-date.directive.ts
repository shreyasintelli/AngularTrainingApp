import { Directive ,Input} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { checkStartDateBegin } from 'src/Validators/checkStartDateBegin';

@Directive({
  selector: '[appCheckStartDate]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:CheckStartDateDirective,
    multi:true
  }]
})
export class CheckStartDateDirective implements Validator {
@Input() appCheckStartDate:Date;
  constructor() {
    this.appCheckStartDate=new Date();
   }
  validate(control: AbstractControl): ValidationErrors | null {
     return checkStartDateBegin(this.appCheckStartDate)(control);
  }
  

}
