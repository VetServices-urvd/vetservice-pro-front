import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniqueDeleteAlertComponent } from './clinique-delete-alert.component';

describe('CliniqueDeleteAlertComponent', () => {
  let component: CliniqueDeleteAlertComponent;
  let fixture: ComponentFixture<CliniqueDeleteAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliniqueDeleteAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniqueDeleteAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
