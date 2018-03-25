import { TestBed, inject } from '@angular/core/testing';

import { LeaderboardServiceService } from './leaderboard-service.service';

describe('LeaderboardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaderboardServiceService]
    });
  });

  it('should be created', inject([LeaderboardServiceService], (service: LeaderboardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
