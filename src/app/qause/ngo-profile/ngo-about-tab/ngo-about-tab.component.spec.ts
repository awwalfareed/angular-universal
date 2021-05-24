import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoAboutTabComponent } from './ngo-about-tab.component';

describe('NgoAboutTabComponent', () => {
  let component: NgoAboutTabComponent;
  let fixture: ComponentFixture<NgoAboutTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoAboutTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoAboutTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
