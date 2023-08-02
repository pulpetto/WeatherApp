import {
    Component,
    ElementRef,
    Input,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
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

    favouriteLocations: string[] = [];
    userLocation: any;
    locationData!: Weather;
    locationForecast: any;

    @ViewChild('searchBarRef', { static: false })
    searchBarElRef!: SearchBarComponent;

    ngOnInit() {
        // refactor with rxjs merge map
        this.userLocation = this.geolocationService.userLocation;

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
                        if (!this.favouriteLocations.includes(data.name)) {
                            this.favouriteIconSrc = 'assets/svg/fav-empty.svg';
                        }

                        if (this.searchBarElRef) {
                            this.searchBarElRef.updateInputVal(data.name);
                        }

                        this.locationData = data;
                    });

                this.weatherAPIService
                    .getHourlyForecastByCoords(
                        coords.latitude,
                        coords.longitude,
                        unit
                    )
                    .subscribe((data: any) => {
                        console.log('Forecast ->', data.slice(0, 7));
                        this.locationForecast = data.slice(0, 7);
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
    setWeatherData(data: Weather) {
        if (!this.favouriteLocations.includes(data.name)) {
            this.favouriteIconSrc = 'assets/svg/fav-empty.svg';
        }

        this.userLocation = 'known';
        this.geolocationService.userLocation = 'known';
        this.locationData = data;
    }

    setForecastData(data: any) {
        this.locationForecast = data;
    }

    // favourite locaitons
    onMenuExpand(containerEl: HTMLDivElement) {
        containerEl.classList.toggle('hidden');
    }

    favouriteIconSrc: string = 'assets/svg/fav-empty.svg';

    onStarClick(favIconEl: HTMLImageElement) {
        if (
            this.geolocationService.userLocation === 'none' ||
            this.geolocationService.userLocation === 'denied'
            // this.favouriteLocations.includes(this.locationData.name)
        )
            return;

        console.log(favIconEl.src);

        if (this.favouriteIconSrc === 'assets/svg/fav-full.svg') {
            this.favouriteIconSrc = 'assets/svg/fav-empty.svg';
            this.favouriteLocations.splice(
                this.favouriteLocations.indexOf(this.locationData.name),
                1
            );
        } else {
            this.favouriteIconSrc = 'assets/svg/fav-full.svg';
            this.favouriteLocations.push(this.locationData.name);
        }
    }
}

// REFACTOR USERLOCATION from service and here | 2 varaibles now
