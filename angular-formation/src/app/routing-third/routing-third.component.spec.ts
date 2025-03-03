import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingThirdComponent } from './routing-third.component';

describe('RoutingThirdComponent', () => {
  let component: RoutingThirdComponent;
  let fixture: ComponentFixture<RoutingThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingThirdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
