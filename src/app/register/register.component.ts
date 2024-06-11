import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  serverErrors: string;
  startDateModel: string = '';
  endDateModel: string = '';
  endDateInvalid: boolean = false;
  dbStartDate: Date;

  constructor(private authService: AuthService, private router: Router) {
    this.serverErrors = "";
    const today = new Date();
    this.dbStartDate = new Date(today.getFullYear() - 100, 0, 1);
  }

  signInEventHandler(registerForm: any) {
    console.log("Form values", registerForm.value);
    if (this.endDateInvalid) {
      alert("End date should be greater than or equal to start date");
      return;
    }

    const userObject = registerForm.value;
    const result: any = this.authService.registerUser(userObject);
    if (result["status"] === true) {
      alert("Registration Successful");
      this.router.navigate(['login']);
    } else {
      alert("User email id already exists");
      this.serverErrors = "EAE";
    }
  }

  displayStartDate(ev: any) {
    console.log("Date selected", ev.target.value);
  }

  validateDates() {
    if (this.startDateModel && this.endDateModel) {
      this.endDateInvalid = new Date(this.endDateModel) < new Date(this.startDateModel);
    } else {
      this.endDateInvalid = false;
    }
  }
}
