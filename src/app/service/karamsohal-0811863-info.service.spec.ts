import { TestBed } from '@angular/core/testing';

import { KaramSohalI0811863InfoService } from './karamsohal-0811863-info.service';

describe('NameIDInfoService', () => {
  let service: KaramSohalI0811863InfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaramSohalI0811863InfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
