import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirectionnalParentComponent } from './bidirectionnal-parent.component';

describe('BidirectionnalParentComponent', () => {
  let component: BidirectionnalParentComponent;
  let fixture: ComponentFixture<BidirectionnalParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidirectionnalParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidirectionnalParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
