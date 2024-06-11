import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  serverErrors:string;
  constructor( private authService:AuthService ,private router :Router)

  {
    this.serverErrors="";
   
    var today=new Date();
    this.dbStartDate=new Date((today.getFullYear()) -100,0,1);
  }
  dbStartDate:Date;
  signInEventHandler(registerForm:any)
  {
   
    console.log("Form values",registerForm.value);
    var userObject = registerForm.value;
    var result:any =this.authService.registerUser(userObject)
    if(result["status"]==true){
      alert("registration Successfull")
      this.router.navigate(['login'])

    }
    else{
      alert("user emailid already exists")
      this.serverErrors="EAE"
    }
  }
  displayStartDate(ev:any)
  {
    console.log("date selected",ev.target.value);
  }
 
}
