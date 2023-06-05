import { TestBed } from '@angular/core/testing';

import { StarRailService } from './star-rail.service';

describe('StarRailService', () => {
  let service: StarRailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarRailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
