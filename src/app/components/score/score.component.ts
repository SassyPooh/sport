import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
@Input() matchInput:any;
@Output() newMatches:EventEmitter<any> = new EventEmitter();
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {
  }
  
scoreColor(a:number,b:number){
  if (a>b) {
    return "green";
  }else if (a<b) {
    return "red";
  }else{
    return "blue";
  }
}

Results(a:number,b:number){
  let T=[]
  if (a>b) {
    T=["(win)","green"]
  }else if (a<b) {
    T=["(loss)","red"]
  }else{
    T=["(draw)","blue"]
  }
  return T;
}

deleteMatch(id:any){
this.matchService.deleteMatch(id).subscribe((Results)=>{
  console.log("Results:",Results.msg);
  this.matchService.getAllMatches().subscribe((data)=>{
    console.log('data:',data.matches);
    this.newMatches.emit(data.matches)
    
  })
  
})
}
}
