import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Profile } from '../class_defs/profile_item';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	profile: Profile;
getProfile(id: string): void{
  	this.profileservice.getProfile(id).subscribe(profile => this.profile = profile);
  }
  constructor(
  	private route: ActivatedRoute,
  private location: Location,
  private profileservice: ProfileService) { }

  ngOnInit() {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.getProfile(id);
  }

}
