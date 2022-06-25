import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniqueConsultComponent } from './clinique-consult.component';

describe('CliniqueConsultComponent', () => {
  let component: CliniqueConsultComponent;
  let fixture: ComponentFixture<CliniqueConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliniqueConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniqueConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
