import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugTrackingComponent } from './bug-tracking.component';

describe('BugTrackingComponent', () => {
  let component: BugTrackingComponent;
  let fixture: ComponentFixture<BugTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
