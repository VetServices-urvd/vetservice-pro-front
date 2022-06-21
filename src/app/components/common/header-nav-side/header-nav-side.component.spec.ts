import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavSideComponent } from './header-nav-side.component';

describe('HeaderNavSideComponent', () => {
  let component: HeaderNavSideComponent;
  let fixture: ComponentFixture<HeaderNavSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
