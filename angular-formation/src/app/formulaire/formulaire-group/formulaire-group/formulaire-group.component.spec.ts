import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireGroupComponent } from './formulaire-group.component';

describe('FormulaireGroupComponent', () => {
  let component: FormulaireGroupComponent;
  let fixture: ComponentFixture<FormulaireGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
