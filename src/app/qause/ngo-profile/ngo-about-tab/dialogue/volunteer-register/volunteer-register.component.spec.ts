import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerRegisterComponent } from './volunteer-register.component';

describe('VolunteerRegisterComponent', () => {
  let component: VolunteerRegisterComponent;
  let fixture: ComponentFixture<VolunteerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
