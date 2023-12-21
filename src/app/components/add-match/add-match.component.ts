import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match:any={};
  addMatchForm!:FormGroup;

  constructor(private matchService:MatchService, private router:Router) { }

  ngOnInit(): void {
  }


  addMatch(){
    console.log("add match",this.match);
    this.matchService.addMatch(this.match).subscribe((result:any)=>{
      console.log("response:",result);
      if (result.msg) {
        
        this.router.navigate(['/dashboard'])
      }
      
    });
  }
}
