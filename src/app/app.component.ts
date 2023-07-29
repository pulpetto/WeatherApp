import { Component, ElementRef, ViewChild } from '@angular/core';
import { GeoLocationService } from './services/geo-location.service';
import { WeatherApiService } from './services/weather-api.service';
import { Weather } from './interfaces/weather';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

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

    @ViewChild('searchBarRef', { static: false })
    searchBarElRef!: SearchBarComponent;

    ngOnInit() {
        this.geolocationService.askForLocation().then(
            (coords: any) => {
                this.geolocationService.userLocation = coords;

                this.userLocation = this.geolocationService.userLocation;

                // if coutry us then IMPERIAL if not METRIC
                const unit = 'metric';
                this.weatherAPIService
                    .getWeatherByCoordinates(
                        coords.latitude,
                        coords.longitude,
                        unit
                    )
                    .subscribe((data: Weather) => {
                        console.log(data);
                        if (this.searchBarElRef) {
                            this.searchBarElRef.updateInputVal(data.name);
                        }
                    });
            },
            (error: any) => {
                console.error('Error getting user location:', error);
                this.geolocationService.userLocation = 'denied';

                this.userLocation = this.geolocationService.userLocation;
            }
        );
    }
}
