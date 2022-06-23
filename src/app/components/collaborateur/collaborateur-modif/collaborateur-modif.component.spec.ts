import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateurModifComponent } from './collaborateur-modif.component';

describe('CollaborateurModifComponent', () => {
  let component: CollaborateurModifComponent;
  let fixture: ComponentFixture<CollaborateurModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborateurModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateurModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
