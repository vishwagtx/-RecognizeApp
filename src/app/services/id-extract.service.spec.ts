import { TestBed } from '@angular/core/testing';

import { IdExtractService } from './id-extract.service';

describe('IdExtractService', () => {
  let service: IdExtractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdExtractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
