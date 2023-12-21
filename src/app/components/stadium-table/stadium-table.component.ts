import { Component, OnInit } from '@angular/core';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
stadiums:any=[];
  constructor(private stadiumService:StadiumService) { }

  ngOnInit(): void {
this.stadiumService.getAllStadiums().subscribe((docs)=>{
  console.log("this is stadiums from data base",docs.stadiums);
  
  this.stadiums = docs.stadiums
})
  }

}
