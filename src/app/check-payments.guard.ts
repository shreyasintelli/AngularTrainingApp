import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const checkPaymentsGuard: CanActivateFn = (route, state) => {
  console.log("route:",route);
  console.log("state:",state)
var userName = prompt("enter name")
if (userName=="sher"){
  return true;

}
else{
 var router = inject(Router)
 router.navigate(["login"])
 return false
}
};
