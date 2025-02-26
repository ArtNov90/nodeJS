import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyTrackerComponent } from './key-tracker.component';

describe('KeyTrackerComponent', () => {
  let component: KeyTrackerComponent;
  let fixture: ComponentFixture<KeyTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
