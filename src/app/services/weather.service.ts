import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl:string = "http://localhost:3000/Weather";

  constructor(private httpClient:HttpClient) { }
 searchWeather(city:any){
    return this.httpClient.post<{weather:any}>(this.weatherUrl,city);
  }
}
