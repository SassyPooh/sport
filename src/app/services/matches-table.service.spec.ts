import { TestBed } from '@angular/core/testing';

import { MatchesTableService } from './matches-table.service';

describe('MatchesTableService', () => {
  let service: MatchesTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
