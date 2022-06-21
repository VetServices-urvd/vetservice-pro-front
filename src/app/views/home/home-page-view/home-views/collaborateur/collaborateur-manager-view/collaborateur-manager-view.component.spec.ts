import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateurManagerViewComponent } from './collaborateur-manager-view.component';

describe('CollaborateurManagerViewComponent', () => {
  let component: CollaborateurManagerViewComponent;
  let fixture: ComponentFixture<CollaborateurManagerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborateurManagerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateurManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
