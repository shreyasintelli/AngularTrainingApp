import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentByCardComponent } from './payment-by-card.component';

describe('PaymentByCardComponent', () => {
  let component: PaymentByCardComponent;
  let fixture: ComponentFixture<PaymentByCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentByCardComponent]
    });
    fixture = TestBed.createComponent(PaymentByCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
