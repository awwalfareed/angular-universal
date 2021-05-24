import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QauseFilterComponent } from './qause-filter.component';

describe('QauseFilterComponent', () => {
  let component: QauseFilterComponent;
  let fixture: ComponentFixture<QauseFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QauseFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QauseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
