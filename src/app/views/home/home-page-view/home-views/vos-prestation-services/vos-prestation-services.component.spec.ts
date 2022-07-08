import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VosPrestationServicesComponent } from './vos-prestation-services.component';

describe('VosPrestationServicesComponent', () => {
  let component: VosPrestationServicesComponent;
  let fixture: ComponentFixture<VosPrestationServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VosPrestationServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VosPrestationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
