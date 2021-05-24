import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedDonationComponent } from './failed-donation.component';

describe('FailedDonationComponent', () => {
  let component: FailedDonationComponent;
  let fixture: ComponentFixture<FailedDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
