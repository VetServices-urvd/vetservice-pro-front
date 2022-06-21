import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniqueManagerViewComponent } from './clinique-manager-view.component';

describe('CliniqueManagerViewComponent', () => {
  let component: CliniqueManagerViewComponent;
  let fixture: ComponentFixture<CliniqueManagerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliniqueManagerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniqueManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
