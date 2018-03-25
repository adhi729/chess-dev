import { Injectable } from '@angular/core';
import { leaderboard } from './class_defs/leaderboard_item';
import { LEADERBOARD } from './class_defs/mock_leaderboard';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LeaderboardServiceService {
	getLeaderBoard(): Observable<leaderboard[]> {
		return of(LEADERBOARD);
	}
  constructor() { }

}
