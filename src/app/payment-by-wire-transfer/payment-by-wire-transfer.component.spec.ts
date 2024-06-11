import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentByWireTransferComponent } from './payment-by-wire-transfer.component';

describe('PaymentByWireTransferComponent', () => {
  let component: PaymentByWireTransferComponent;
  let fixture: ComponentFixture<PaymentByWireTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentByWireTransferComponent]
    });
    fixture = TestBed.createComponent(PaymentByWireTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
