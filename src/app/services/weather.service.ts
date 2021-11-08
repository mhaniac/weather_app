import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CurrentWeatherModel } from '../interfaces/current-weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public loading: boolean = false;
  private _weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?appid=${environment.appid}&units=metric&lang=es`;
  public currentWeatherDetails: CurrentWeatherModel;

  constructor(private _http: HttpClient) {}

  getCurrentWeatherDetails(lat: number, lng: number): void {
    this.loading = false;
    this._http
      .get<CurrentWeatherModel>(
        `${this._weatherEndpoint}&lat=${lat}&lon=${lng}`
      )
      .subscribe(
        (res) => {
          this.loading = false;
          this.currentWeatherDetails = res;
          console.log(res);
        },
        (err) => {
          this.loading = false;
          console.log(err);
        }
      );
  }
}
