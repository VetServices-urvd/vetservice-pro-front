import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteAbonnementViewComponent } from './compte-abonnement-view.component';

describe('CompteAbonnementViewComponent', () => {
  let component: CompteAbonnementViewComponent;
  let fixture: ComponentFixture<CompteAbonnementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteAbonnementViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteAbonnementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
