import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateurConsultComponent } from './collaborateur-consult.component';

describe('CollaborateurConsultComponent', () => {
  let component: CollaborateurConsultComponent;
  let fixture: ComponentFixture<CollaborateurConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborateurConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateurConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
