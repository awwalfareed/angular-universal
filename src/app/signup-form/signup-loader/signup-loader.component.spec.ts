import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLoaderComponent } from './signup-loader.component';

describe('SignupLoaderComponent', () => {
  let component: SignupLoaderComponent;
  let fixture: ComponentFixture<SignupLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
