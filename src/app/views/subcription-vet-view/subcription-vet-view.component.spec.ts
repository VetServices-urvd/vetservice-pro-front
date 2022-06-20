import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionVetViewComponent } from './subcription-vet-view.component';

describe('SubcriptionVetViewComponent', () => {
  let component: SubcriptionVetViewComponent;
  let fixture: ComponentFixture<SubcriptionVetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriptionVetViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriptionVetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
