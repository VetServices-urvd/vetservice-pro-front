import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibliteFormComponent } from './disponiblite-form.component';

describe('DisponibliteFormComponent', () => {
  let component: DisponibliteFormComponent;
  let fixture: ComponentFixture<DisponibliteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisponibliteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibliteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
