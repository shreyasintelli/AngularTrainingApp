import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentByApplepayComponent } from './payment-by-applepay.component';

describe('PaymentByApplepayComponent', () => {
  let component: PaymentByApplepayComponent;
  let fixture: ComponentFixture<PaymentByApplepayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentByApplepayComponent]
    });
    fixture = TestBed.createComponent(PaymentByApplepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
