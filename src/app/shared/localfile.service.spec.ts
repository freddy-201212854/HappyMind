import { TestBed } from '@angular/core/testing';

import { LocalfileService } from './localfile.service';

describe('LocalfileService', () => {
  let service: LocalfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
