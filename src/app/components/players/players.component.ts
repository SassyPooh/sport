import { Component, OnInit } from '@angular/core';
import { playerInfo } from 'src/app/data/data';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
player:any=[]
  constructor() { }

  ngOnInit(): void {
    this.player=playerInfo
  }

}
