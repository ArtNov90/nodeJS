import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicParentComponent } from './dynamic-parent.component';

describe('DynamicParentComponent', () => {
  let component: DynamicParentComponent;
  let fixture: ComponentFixture<DynamicParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
