import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerLoginVerifyComponent } from './volunteer-login-verify.component';

describe('VolunteerLoginVerifyComponent', () => {
  let component: VolunteerLoginVerifyComponent;
  let fixture: ComponentFixture<VolunteerLoginVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerLoginVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerLoginVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
