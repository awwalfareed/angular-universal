import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoStoriesComponent } from './ngo-stories.component';

describe('NgoStoriesComponent', () => {
  let component: NgoStoriesComponent;
  let fixture: ComponentFixture<NgoStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
