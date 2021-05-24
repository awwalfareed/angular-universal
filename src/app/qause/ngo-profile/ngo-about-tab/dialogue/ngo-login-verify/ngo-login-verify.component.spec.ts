import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoLoginVerifyComponent } from './ngo-login-verify.component';

describe('NgoLoginVerifyComponent', () => {
  let component: NgoLoginVerifyComponent;
  let fixture: ComponentFixture<NgoLoginVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoLoginVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoLoginVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
