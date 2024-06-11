import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouncingExampleComponent } from './debouncing-example.component';

describe('DebouncingExampleComponent', () => {
  let component: DebouncingExampleComponent;
  let fixture: ComponentFixture<DebouncingExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebouncingExampleComponent]
    });
    fixture = TestBed.createComponent(DebouncingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
