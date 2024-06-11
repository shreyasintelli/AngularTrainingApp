import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkPaymentsGuard } from './check-payments.guard';

describe('checkPaymentsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkPaymentsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
