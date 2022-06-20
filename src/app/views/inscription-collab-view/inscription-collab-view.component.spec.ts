import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCollabViewComponent } from './inscription-collab-view.component';

describe('InscriptionCollabViewComponent', () => {
  let component: InscriptionCollabViewComponent;
  let fixture: ComponentFixture<InscriptionCollabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCollabViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionCollabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
