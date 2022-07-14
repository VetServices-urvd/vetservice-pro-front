import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitManagerViewComponent } from './produit-manager-view.component';

describe('ProduitManagerViewComponent', () => {
  let component: ProduitManagerViewComponent;
  let fixture: ComponentFixture<ProduitManagerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitManagerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
