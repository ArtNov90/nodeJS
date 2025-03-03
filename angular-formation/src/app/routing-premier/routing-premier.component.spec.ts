import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPremierComponent } from './routing-premier.component';

describe('RoutingPremierComponent', () => {
  let component: RoutingPremierComponent;
  let fixture: ComponentFixture<RoutingPremierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingPremierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingPremierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
