import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  team: any = {};
  addTeamForm!: FormGroup;
  stadiums: any = [];
  stadiumId:any;
  constructor(
    private teamService: TeamsService,
    private router: Router,
    private stadiumService: StadiumService
  ) {}

  ngOnInit(): void {
    this.stadiumService.getAllStadiums().subscribe((data)=>{
      this.stadiums= data.stadiums
    })
  }
  addTeam() {
    this.team.stadiumId = this.stadiumId
    this.teamService.addTeam(this.team).subscribe((data) => {
      if (data.msg) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
  selectStadium(evt:any){
    console.log("this is the selected stadium",evt.target.value);
    this.stadiumId = evt.target.value;
    
  }
}
