import { TestBed } from '@angular/core/testing';

import { DataAPiService } from './data-api.service';

describe('DataAPiService', () => {
  let service: DataAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
