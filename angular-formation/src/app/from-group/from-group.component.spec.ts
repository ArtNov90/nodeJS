import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromGroupComponent } from './from-group.component';

describe('FromGroupComponent', () => {
  let component: FromGroupComponent;
  let fixture: ComponentFixture<FromGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
