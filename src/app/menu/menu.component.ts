import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentRoute: string;
  isUserLoggedIn:boolean
  authService:AuthService

  constructor(private router: Router) {
    this.authService = inject(AuthService)

    this.currentRoute = '';
    this.isUserLoggedIn= this.authService.isUserLoggedIn
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called ")
    
    
   }
   ngAfterContentChecked(): void {
     this.isUserLoggedIn=this.authService.isUserLoggedIn;
     console.log(" ngAfterContentChecked called", this.isUserLoggedIn);
     
 
   }
   ngAfterViewInit(): void {
     console.log("ngAfterViewInit ")
    
   }
   ngAfterViewChecked(): void {
     
     this.isUserLoggedIn=this.authService.isUserLoggedIn;
     console.log("ngAfterViewChecked", this.isUserLoggedIn);
 
   }
 
   logoutEventHandler()
   {
     this.authService.setUserLoggedOut();
     alert("Logged Out Successfully")
     this.router.navigate(['login'])

   }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

}
