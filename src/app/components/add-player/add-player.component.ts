import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  player: any = {};
  teams: any = [];
  addPlayerForm!: FormGroup;
  teamId: any;
  constructor(
    private playerService: PlayersService,
    private router: Router,
    private teamService: TeamsService
  ) {}

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((data) => {
      this.teams = data.teams;
    });
  }
  addPlayer() {
    console.log("dfghj");
    this.player.idTeam = this.teamId;
    this.playerService.addPlayer(this.player).subscribe((data) => {
      this.router.navigate(['/dashboard']);
    });
  }
  selectTeam(evt: any) {
    console.log('this is team id', evt.target.value);
    this.teamId = evt.target.value;
  }
}
