import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
editMatchForm!:FormGroup;
match:any={};
matches:any={};
id:any;
error:any;
constructor(private activatedRoute:ActivatedRoute, private matchService:MatchService, private router:Router) { }

ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    // this.matches=matchesData;
    // for (let i = 0; i < this.matches.length; i++) {
    //   if(this.matches[i].id == this.id)
    //   this.match=this.matches[i];
    // break;
   this.matchService.getMatchById(this.id).subscribe((result)=>{
    console.log("this is the match to edit",result);
    
    this.match = result.match
   });
  }
edit(){
this.matchService.editMatch(this.match).subscribe((res)=>{
  if (res.matchUpdated) {
    this.router.navigate(['/dashboard'])  
  }else{
this.error = "failed to edit"
  }
});

}
}
