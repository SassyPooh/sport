import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
stadiumUrl:string='http://localhost:3000/stadiums'
  constructor( private httpClient:HttpClient) { }
  addStadium(stadium:any){
    return this.httpClient.post<{msg:string}>(this.stadiumUrl, stadium);
  }
  getAllStadiums(){
    return this.httpClient.get<{stadiums:any}>(this.stadiumUrl) ;
  }

}
