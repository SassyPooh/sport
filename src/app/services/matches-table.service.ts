import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesTableService {
  matchUrl:string = "http://localhost:3000";
  constructor(private httpClient:HttpClient) { }
  matchesInfo(){
    return this.httpClient.get(this.matchUrl);
  }
  matchDelete(id:any){
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
}
