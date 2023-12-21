import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private httpClient: HttpClient) {}
  playerUrl: string = 'http://localhost:3000/players';
  getAllPLayers() {
    return this.httpClient.get<{ players: any }>(this.playerUrl);
  }
  addPlayer(p: any) {
    return this.httpClient.post<{ msg: any }>(this.playerUrl, p);
  }
  editPlayer(team: any) {
    return this.httpClient.put<{ matchUpdated: any }>(this.playerUrl, team);
  }
  getPlayerById(id: any) {
    return this.httpClient.get<{ player: any }>(`${this.playerUrl}/${id}`);
  }
  deletePlayer(id: any) {
    return this.httpClient.delete<{ msg: any }>(`${this.playerUrl}/${id}`);
  }
}
