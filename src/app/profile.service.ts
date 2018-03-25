import { Injectable } from '@angular/core';
import { Profile } from './class_defs/profile_item';
import { profile } from './class_defs/mock_profile_item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProfileService {
	getProfile(id: string): Observable<Profile> {
		return of(profile);
	}

  constructor() { }

}
