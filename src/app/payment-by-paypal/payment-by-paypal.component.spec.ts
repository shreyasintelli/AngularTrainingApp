import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentByPaypalComponent } from './payment-by-paypal.component';

describe('PaymentByPaypalComponent', () => {
  let component: PaymentByPaypalComponent;
  let fixture: ComponentFixture<PaymentByPaypalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentByPaypalComponent]
    });
    fixture = TestBed.createComponent(PaymentByPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
