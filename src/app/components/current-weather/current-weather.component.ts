import { Component } from '@angular/core';
import { GeoLocationService } from 'src/app/services/geo-location.service';

@Component({
    selector: 'app-current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
    constructor(private geolocationService: GeoLocationService) {}

    userLocation = this.geolocationService.userLocation;
}
