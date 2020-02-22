import { TestBed } from '@angular/core/testing';

import { ChatdbService } from './chatdb.service';

describe('ChatdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatdbService = TestBed.get(ChatdbService);
    expect(service).toBeTruthy();
  });
});
