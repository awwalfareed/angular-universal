import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanyouDonationComponent } from './thanyou-donation.component';

describe('ThanyouDonationComponent', () => {
  let component: ThanyouDonationComponent;
  let fixture: ComponentFixture<ThanyouDonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanyouDonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanyouDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
