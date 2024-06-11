import { TestBed } from '@angular/core/testing';

import { WorkWithProductsService } from './work-with-products.service';

describe('WorkWithProductsService', () => {
  let service: WorkWithProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkWithProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
