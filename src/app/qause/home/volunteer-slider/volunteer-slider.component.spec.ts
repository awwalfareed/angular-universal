import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerSliderComponent } from './volunteer-slider.component';

describe('VolunteerSliderComponent', () => {
  let component: VolunteerSliderComponent;
  let fixture: ComponentFixture<VolunteerSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
