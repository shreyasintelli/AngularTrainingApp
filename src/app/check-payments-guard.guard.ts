import { CanActivateFn } from '@angular/router';

export const checkPaymentsGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
