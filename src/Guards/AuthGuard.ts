import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    // Creating a canActivate guard like a service
    constructor(private authService: AuthService, private router: Router) {

    }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //     console.log("Route in Can activate guard", route);
    //     console.log("State in Can activate guard", state);
    //     // if user is logged in, allow the navigation to payments
    //     // if user is not logged in, navigate to login page
    //     var userName = prompt("Enter the name");
    //     if (userName == "sara") {
    //         return true;
    //     }
    //     else {
    //         // get the Router service
           
    //         this.router.navigate(["login"]);
    //         return false;
    //     }
    // }
    canActivate(): boolean {
        if (this.authService.isUserLoggedIn) {
          return true;
        } else {
          alert('Login first');
          this.router.navigate(['/login']);
          return false;
        }
      }
}