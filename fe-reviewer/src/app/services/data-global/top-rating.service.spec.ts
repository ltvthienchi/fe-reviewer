import { TestBed, inject } from '@angular/core/testing';

import { TopRatingService } from './top-rating.service';

describe('TopRatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopRatingService]
    });
  });

  it('should be created', inject([TopRatingService], (service: TopRatingService) => {
    expect(service).toBeTruthy();
  }));
});
