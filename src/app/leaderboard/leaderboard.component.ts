import { Component, OnInit } from '@angular/core';
import { leaderboard } from '../class_defs/leaderboard_item';
import { LeaderboardServiceService } from '../leaderboard-service.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
	leaderboards : leaderboard[];
  getLeaderBoards(): void{
  	this.leaderboardService.getLeaderBoard().subscribe(leaderboards => this.leaderboards = leaderboards);
  }
  constructor(private leaderboardService: LeaderboardServiceService
  	) {}

  ngOnInit() {
  	this.getLeaderBoards()
  }

}
