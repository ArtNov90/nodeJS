import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirectionnalChildComponent } from './bidirectionnal-child.component';

describe('BidirectionnalChildComponent', () => {
  let component: BidirectionnalChildComponent;
  let fixture: ComponentFixture<BidirectionnalChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidirectionnalChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidirectionnalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
