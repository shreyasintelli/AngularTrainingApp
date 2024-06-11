import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { checkPasswordMatching } from 'src/Validators/checkPasswordMatching';
import { passwordStrengthValidator } from 'src/Validators/passwordStrengthValidator';
@Component({
  selector: 'app-register-reactive-form',
  templateUrl: './register-reactive-form.component.html',
  styleUrls: ['./register-reactive-form.component.css']
})
export class RegisterReactiveFormComponent {
  registerReactive : FormGroup;
  constructor( private fb:FormBuilder){
    this.registerReactive = this.fb.group(
      {
        firstName: ['', { validators: [Validators.required, Validators.minLength(3)], updateOn: "blur" }],
        lastName: ['', { validators: [Validators.required, Validators.minLength(3)], updateOn: "blur" }],
        password: ['', { validators: [Validators.required, Validators.minLength(8), passwordStrengthValidator()] ,updateOn:"blur"}],
        confirmPassword: ["", { validators: [Validators.required, Validators.minLength(8)] }]

      },
      {validators: [ checkPasswordMatching('password','confirmPassword')], updateOn:"change"}
    )


  }
  submitEventHandler() {
    console.log("Reactive Register Form submitted", this.registerReactive);
  }
  get lastName() {
    return this.registerReactive.controls['lastName'];
  }
  get password() {
    return this.registerReactive.controls['password'];
  }
  get confirmPassword() {
    return this.registerReactive.controls['confirmPassword'];
  }
}
