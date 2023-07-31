import { Component, ElementRef, ViewChild } from '@angular/core';
import { GeoLocationService } from './services/geo-location.service';
import { WeatherApiService } from './services/weather-api.service';
import { Weather } from './interfaces/weather';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

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
    locationData!: Weather;

    @ViewChild('searchBarRef', { static: false })
    searchBarElRef!: SearchBarComponent;

    ngOnInit() {
        this.geolocationService.askForLocation().then(
            (coords: any) => {
                this.geolocationService.userLocation = coords;
                this.userLocation = 'known';

                // if coutry us then IMPERIAL if not METRIC
                const unit = 'metric';
                this.weatherAPIService
                    .getWeatherByCoordinates(
                        coords.latitude,
                        coords.longitude,
                        unit
                    )
                    .subscribe((data: Weather) => {
                        if (this.searchBarElRef) {
                            this.searchBarElRef.updateInputVal(data.name);
                        }

                        this.locationData = data;
                    });
            },
            (error: any) => {
                console.error('Error getting user location:', error);
                this.geolocationService.userLocation = 'denied';

                this.userLocation = this.geolocationService.userLocation;
            }
        );
    }

    // searching by location name
    setData(data: Weather) {
        this.userLocation = 'known';
        this.locationData = data;
    }
}
