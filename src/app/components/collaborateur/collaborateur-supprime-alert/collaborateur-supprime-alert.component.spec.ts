import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateurSupprimeAlertComponent } from './collaborateur-supprime-alert.component';

describe('CollaborateurSupprimeAlertComponent', () => {
  let component: CollaborateurSupprimeAlertComponent;
  let fixture: ComponentFixture<CollaborateurSupprimeAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborateurSupprimeAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateurSupprimeAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
