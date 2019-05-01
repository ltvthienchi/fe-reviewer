import { TestBed, inject } from '@angular/core/testing';

import { AuthAfterLoginService } from './auth-after-login.service';

describe('AuthAfterLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAfterLoginService]
    });
  });

  it('should be created', inject([AuthAfterLoginService], (service: AuthAfterLoginService) => {
    expect(service).toBeTruthy();
  }));
});
