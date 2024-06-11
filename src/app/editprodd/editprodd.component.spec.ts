import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproddComponent } from './editprodd.component';

describe('EditproddComponent', () => {
  let component: EditproddComponent;
  let fixture: ComponentFixture<EditproddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditproddComponent]
    });
    fixture = TestBed.createComponent(EditproddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
