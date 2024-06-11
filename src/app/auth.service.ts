import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // ng g s auth
  usersArr = [
    "sara@intelliswift.com",
    "joe@intelliswift.com",
  ];
  userCredentialArr=[
    {emailId:"sara@intelliswift.com",password:"Sara123#"},
    {emailId:"joe@intelliswift.com",password:"Sara123#"},

  ];
  isUserLoggedIn: boolean;
  constructor() {
    this.isUserLoggedIn = false;
  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  setUserLoggedOut() {
    this.isUserLoggedIn = false;
  }
  registerUser(userObject: any): Object {
    var pos = this.usersArr.findIndex(emailId => userObject.emailId == emailId);
    if (pos >= 0) {
      // response is failure
      // check the response status code
      // response status code in 400's
      return { status: false, message: "EAE" };
    }
    else {
      // send a request to server to store the details
      // response is successful;
           return { status: true, message: "" }

    }

    // response status code in 500's
   // return { status: false, message: "Server error" };


  }
  loginUser(userEmailId:string,password:string)
  {
    // send a POST request to the server
    var pos=this.usersArr.findIndex(user=>user ==userEmailId );
    if(pos >=0)
      {
        var pos1=this.userCredentialArr.findIndex(user => user.emailId==userEmailId && user.password==password)
        if(pos1>=0)
          {
            this.setUserLoggedIn();
            return {status:true,message:""};
          }
          else
          {
            return {status:false,message:"Email Id and password do not match"}
          }
      }
      else
      {
        return {status:false,message:"Email Id does not exists"}
      }
  }
}
