import { TestBed } from '@angular/core/testing';

import { RdvManagerService } from './rdv-manager.service';

describe('RdvManagerService', () => {
  let service: RdvManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdvManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
