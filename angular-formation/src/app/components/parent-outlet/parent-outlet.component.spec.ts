import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOutletComponent } from './parent-outlet.component';

describe('ParentOutletComponent', () => {
  let component: ParentOutletComponent;
  let fixture: ComponentFixture<ParentOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
