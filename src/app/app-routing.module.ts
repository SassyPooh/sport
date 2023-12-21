import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayersComponent } from './components/players/players.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"Login",component:LoginComponent},
{path:"Signup",component:SignupComponent},
{path:"SignupAdmin",component:SignupComponent},
{path:"matches",component:MatchesComponent},
{path:"add-match",component:AddMatchComponent},
{path:"add-player",component:AddPlayerComponent},
{path:"add-team",component:AddTeamComponent},
{path:"dashboard",component:DashboardComponent},
{path:"players",component:PlayersComponent},
{path:"articles",component:ArticlesComponent},
{path:"weather",component:WeatherSearchComponent},
{path:"add-stadium",component:AddStadiumComponent},
// path dynamic
{path:"edit-match/:id",component:EditMatchComponent},
{path:"matchInfo/:id",component:MatchInfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
