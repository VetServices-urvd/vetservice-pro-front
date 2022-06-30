import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementReactivationAlertComponent } from './abonnement-reactivation-alert.component';

describe('AbonnementReactivationAlertComponent', () => {
  let component: AbonnementReactivationAlertComponent;
  let fixture: ComponentFixture<AbonnementReactivationAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementReactivationAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementReactivationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
