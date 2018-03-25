import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayOnlineComponent } from './play-online/play-online.component';
import { ChessboardComponent } from './chessboard/chessboard.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'profile/:id', component:ProfileComponent },
  { path:'play', component:ChessboardComponent },  
  { path:'leaderboard', component:LeaderboardComponent },
  { path:'test', component:ChessboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {

 }
