import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoRegisterVerifyComponent } from './ngo-register-verify.component';

describe('NgoRegisterVerifyComponent', () => {
  let component: NgoRegisterVerifyComponent;
  let fixture: ComponentFixture<NgoRegisterVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoRegisterVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoRegisterVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
