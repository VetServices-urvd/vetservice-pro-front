import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutClientAlertComponent } from './ajout-client-alert.component';

describe('AjoutClientAlertComponent', () => {
  let component: AjoutClientAlertComponent;
  let fixture: ComponentFixture<AjoutClientAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutClientAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutClientAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
