import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousManagerViewComponent } from './rendez-vous-manager-view.component';

describe('RendezVousManagerViewComponent', () => {
  let component: RendezVousManagerViewComponent;
  let fixture: ComponentFixture<RendezVousManagerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVousManagerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
