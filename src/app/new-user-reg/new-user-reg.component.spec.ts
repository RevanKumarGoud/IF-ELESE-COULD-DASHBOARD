import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserRegComponent } from './new-user-reg.component';

describe('NewUserRegComponent', () => {
  let component: NewUserRegComponent;
  let fixture: ComponentFixture<NewUserRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserRegComponent]
    });
    fixture = TestBed.createComponent(NewUserRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
