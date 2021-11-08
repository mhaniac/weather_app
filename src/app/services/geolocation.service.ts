import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { environment } from 'src/environments/environment';
import { GeolocationModel } from '../interfaces/geolocation.interface';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private _getAddressEndpoint =
    'https://api.mapbox.com/geocoding/v5/mapbox.places';

  public coords = { lat: 14.080809, lng: -87.198285 };
  public addressDetails: GeolocationModel;
  public loading: boolean = false;

  get address(): string {
    return this.addressDetails.features[2].place_name;
  }

  constructor(
    private _geolocation: Geolocation,
    private _http: HttpClient,
    private _weatherService: WeatherService
  ) {
    this.getCurrentPosition();
  }

  getCurrentPosition(): void {
    this._geolocation
      .getCurrentPosition()
      .then((coords) => {
        this.coords = {
          lat: coords.coords.latitude,
          lng: coords.coords.longitude,
        };
        console.log(this.coords);
        this.getAddressFromCoords();
      })
      .catch((err) => {
        console.log(err);
        this.getAddressFromCoords();
      });
  }

  getAddressFromCoords(): void {
    this.loading = true;
    this._http
      .get<GeolocationModel>(
        `${this._getAddressEndpoint}/${this.coords.lng},${this.coords.lat}.json?access_token=${environment.access_token}`
      )
      .subscribe(
        (res) => {
          this.loading = false;
          this.addressDetails = res;
          this._weatherService.getCurrentWeatherDetails(
            this.coords.lat,
            this.coords.lng
          );
          console.log(res);
        },
        (err) => {
          this.loading = false;
          console.log(err);
        }
      );
  }
}
