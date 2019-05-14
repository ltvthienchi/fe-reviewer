import { TestBed, inject } from '@angular/core/testing';

import { IdUserService } from './id-user.service';

describe('IdUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdUserService]
    });
  });

  it('should be created', inject([IdUserService], (service: IdUserService) => {
    expect(service).toBeTruthy();
  }));
});
