import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerRegisterVerifyComponent } from './volunteer-register-verify.component';

describe('VolunteerRegisterVerifyComponent', () => {
  let component: VolunteerRegisterVerifyComponent;
  let fixture: ComponentFixture<VolunteerRegisterVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerRegisterVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegisterVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
