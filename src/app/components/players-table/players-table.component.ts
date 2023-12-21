import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { playersInfo } from 'src/app/data/data';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
player:any={};
players:any=[];
constructor( private router: Router, private playerService:PlayersService) { }

  ngOnInit(): void {
    this.playerService.getAllPLayers().subscribe((response)=>{
      console.log("players:",response);
      
      this.players=response.players
    })
  }
playerInfo(id:number){
  this.router.navigate([`playerInfo/${id}`]);
}
}
