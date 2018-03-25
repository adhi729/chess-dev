import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BlogsService } from './blogs.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LeaderboardServiceService } from './leaderboard-service.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayOnlineComponent } from './play-online/play-online.component';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { BoardComponent } from './board/board.component';
import { TauntsComponent } from './taunts/taunts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    NavBarComponent,
    HomeComponent,
    ProfileComponent,
    LeaderboardComponent,
    PageNotFoundComponent,
    PlayOnlineComponent,
    ChessboardComponent,
    BoardComponent,
    TauntsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [BlogsService, ProfileService, LeaderboardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
