import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniqueModifComponent } from './clinique-modif.component';

describe('CliniqueModifComponent', () => {
  let component: CliniqueModifComponent;
  let fixture: ComponentFixture<CliniqueModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliniqueModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniqueModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
