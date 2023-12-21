import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { LiveMatchComponent } from './components/live-match/live-match.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { VoyReplacerPipe } from './pipes/voy-replacer.pipe';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    LiveMatchComponent,
    VideosComponent,
    BlogComponent,
    MatchesComponent,
    SignupComponent,
    HomeComponent,
    PlayersComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    DashboardComponent,
    ArticlesComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    EditMatchComponent,
    ReversePipe,
    VoyReplacerPipe,
    PlayerComponent,
    WeatherSearchComponent,
    StadiumComponent,
    AddStadiumComponent,
    StadiumTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
