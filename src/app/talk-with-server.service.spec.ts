import { TestBed } from '@angular/core/testing';

import { TalkWithServerService } from './talk-with-server.service';

describe('TalkWithServerService', () => {
  let service: TalkWithServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkWithServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
