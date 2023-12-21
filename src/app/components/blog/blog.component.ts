import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articles:any=[]
x:any={}


  constructor() { }

  ngOnInit(): void {
    this.articles=
    [{id:"1", title:"Romolu to stay at Real Nadrid?",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. "},
    {id:"2", title:"Romolu to stay at Real Nadrid?",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. "}
  ];

  }

}
