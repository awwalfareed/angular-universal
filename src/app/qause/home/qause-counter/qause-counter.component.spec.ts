import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QauseCounterComponent } from './qause-counter.component';

describe('QauseCounterComponent', () => {
  let component: QauseCounterComponent;
  let fixture: ComponentFixture<QauseCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QauseCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QauseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
