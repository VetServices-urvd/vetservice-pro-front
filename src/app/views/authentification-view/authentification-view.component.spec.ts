import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationViewComponent } from './authentification-view.component';

describe('AuthentificationViewComponent', () => {
  let component: AuthentificationViewComponent;
  let fixture: ComponentFixture<AuthentificationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentificationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
