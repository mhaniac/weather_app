import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  get address(): string {
    return this._geolocationService.addressDetails
      ? this._geolocationService.address
      : '';
  }

  constructor(private _geolocationService: GeolocationService) {}

  ngOnInit() {}
}
