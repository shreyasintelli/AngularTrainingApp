import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  serverErrors:string;

  constructor(private autService:AuthService, private router:Router ) {
    this.serverErrors=""


}
loginEventHandler(loginForm:any){
  var result =this.autService.loginUser(loginForm.value.emailId,loginForm.value.password)
if(result.status){
  alert("login Successfull")
this.router.navigate(['home'])

}
else{
 this.serverErrors = result.message;
 alert(this.serverErrors)
}
}
redirectToRegister(){
  this.router.navigate(["register"])
}



}
