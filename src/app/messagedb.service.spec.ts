import { TestBed } from '@angular/core/testing';

import { MessagedbService } from './messagedb.service';

describe('MessagedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagedbService = TestBed.get(MessagedbService);
    expect(service).toBeTruthy();
  });
});
