import { TestBed, inject } from '@angular/core/testing';

import { ViolationService } from './violation.service';

describe('ViolationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViolationService]
    });
  });

  it('should be created', inject([ViolationService], (service: ViolationService) => {
    expect(service).toBeTruthy();
  }));
});
