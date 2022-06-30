import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteSupprimeAlertComponent } from './compte-supprime-alert.component';

describe('CompteSupprimeAlertComponent', () => {
  let component: CompteSupprimeAlertComponent;
  let fixture: ComponentFixture<CompteSupprimeAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteSupprimeAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteSupprimeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
