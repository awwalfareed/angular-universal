import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoInspiringStoriesComponent } from './ngo-inspiring-stories.component';

describe('NgoInspiringStoriesComponent', () => {
  let component: NgoInspiringStoriesComponent;
  let fixture: ComponentFixture<NgoInspiringStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoInspiringStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoInspiringStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
