import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageDonneParentEnfant } from './passage-donne-parent-enfant';

describe('PassageDonneParentEnfant', () => {
  let component: PassageDonneParentEnfant;
  let fixture: ComponentFixture<PassageDonneParentEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassageDonneParentEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageDonneParentEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
