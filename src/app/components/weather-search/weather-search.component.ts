import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
searchForm!:FormGroup;
weatherResult:any;
  constructor(private weatherService:WeatherService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      city:["",Validators.required],
    })
  }
  search(){
    this.weatherService.searchWeather(this.searchForm.value).subscribe((datas)=>{
      console.log(datas.weather);
      this.weatherResult = datas.weather;
    })
  }

}
