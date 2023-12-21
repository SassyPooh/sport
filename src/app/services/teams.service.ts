import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private httpClient: HttpClient) {}
  teamUrl: string = 'http://localhost:3000/teams';
  getAllTeams() {
    return this.httpClient.get<{ teams: any }>(this.teamUrl);
  }
  addTeam(team: any) {
    return this.httpClient.post<{ msg: any }>(this.teamUrl, team);
  }
  editTeam(team: any) {
    return this.httpClient.put<{ matchUpdated: any }>(this.teamUrl, team);
  }
  getTeamById(id: any) {
    return this.httpClient.get<{ team: any }>(`${this.teamUrl}/${id}`);
  }
  deleteTeam(id: any) {
    return this.httpClient.delete<{ msg: any }>(`${this.teamUrl}/${id}`);
  }
}
