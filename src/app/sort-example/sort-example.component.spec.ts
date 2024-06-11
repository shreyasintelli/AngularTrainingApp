import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortExampleComponent } from './sort-example.component';

describe('SortExampleComponent', () => {
  let component: SortExampleComponent;
  let fixture: ComponentFixture<SortExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortExampleComponent]
    });
    fixture = TestBed.createComponent(SortExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
