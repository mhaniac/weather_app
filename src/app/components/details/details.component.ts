import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  get currentTemp(): string {
    return this._weatherService.currentWeatherDetails
      ? this._weatherService.currentWeatherDetails.main.temp.toFixed(1)
      : '';
  }

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {}
}
