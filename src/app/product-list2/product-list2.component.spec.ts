import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList2Component } from './product-list2.component';

describe('ProductList2Component', () => {
  let component: ProductList2Component;
  let fixture: ComponentFixture<ProductList2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductList2Component]
    });
    fixture = TestBed.createComponent(ProductList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
