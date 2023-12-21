import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
match:any={}
articles:any={}
  constructor() { }

  ngOnInit(): void {
    this.match={id:"1",teamOne:"EST",teamTwo:"CA",scoreOne:"4",scoreTwo:"1"};
      this.articles={id:"1", title:"Romolu to stay at Real Nadrid?",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem."};

  }

}
