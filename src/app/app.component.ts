import { Component } from '@angular/core';
import { GeoLocationService } from './services/geo-location.service';
import { WeatherApiService } from './services/weather-api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(
        private geolocationService: GeoLocationService,
        private weatherAPIService: WeatherApiService
    ) {}

    userLocation: any;

    ngOnInit() {
        this.geolocationService.askForLocation().then(
            (coords: any) => {
                this.geolocationService.userLocation = coords;

                this.userLocation = this.geolocationService.userLocation;

                // Update
                this.weatherAPIService.getWeatherByCoordinates(
                    coords.latitude,
                    coords.longitude
                );
            },
            (error: any) => {
                console.error('Error getting user location:', error);
                this.geolocationService.userLocation = 'denied';

                this.userLocation = this.geolocationService.userLocation;
            }
        );
    }
}
