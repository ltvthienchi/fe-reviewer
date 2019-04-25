import { TestBed, inject } from '@angular/core/testing';

import { EventMessageService } from './event-message.service';

describe('EventMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventMessageService]
    });
  });

  it('should be created', inject([EventMessageService], (service: EventMessageService) => {
    expect(service).toBeTruthy();
  }));
});
