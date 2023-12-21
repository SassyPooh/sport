import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
team:any=[];
teams:any=[];
  constructor(private teamService:TeamsService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((data)=>{
      this.teams=data.teams
      console.log('this is team',data.teams);
      
      
      
    })
  }
// delete(){
//   this.teamService.deleteTeam(id:).subscribe((data)=>{

//   })
// }
}
