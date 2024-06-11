import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkPaymentsGuardGuard } from './check-payments-guard.guard';

describe('checkPaymentsGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkPaymentsGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
