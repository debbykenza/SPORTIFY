import { TestBed } from '@angular/core/testing';

import { SupscriptionsService } from './supscriptions.service';

describe('SupscriptionsService', () => {
  let service: SupscriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupscriptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
