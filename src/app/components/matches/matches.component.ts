import { Component, OnInit } from '@angular/core';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matches:any =[]
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
   this.matchService.getAllMatches().subscribe((data)=>{
    console.log("this is matches:",data);
    this.matches = data.matches
   })
  }
updateMatches(T:any){
  this.matches = T
}
}
