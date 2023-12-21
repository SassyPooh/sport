import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { get } from 'mongoose';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';
import { MatchesTableService } from 'src/app/services/matches-table.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  match:any=[];
  matches:any=[];
  constructor( private router: Router, private matchTable:MatchService) { }

  ngOnInit(): void {
   this.getAll();
    
  }

  matchDelet(id:any){this.matchTable.deleteMatch(id).subscribe()};
goToDisplay(id:number){
 this.router.navigate([`matchInfo/${id}`]);
 
}
goToEdit(id:number){
 this.router.navigate([`edit-match/${id}`]);
 
}
delete(id:number){
  console.log(`item ${id} deleted`);
this.matchTable.deleteMatch(id).subscribe((data)=>{
  console.log("the deleted match",data.msg);
  if (data.msg) {
    this.getAll()
  }
  
})
  
}
getAll(){
  this.matchTable.getAllMatches().subscribe(
    (response)=>{console.log("here matches",response);
    this.matches = response.matches
    })
}
}

