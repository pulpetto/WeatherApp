import {
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';
import { Weather } from 'src/app/interfaces/weather';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
    constructor(private weatherAPIService: WeatherApiService) {}

    @Output() weatherDataEvent = new EventEmitter<Weather>();
    @Output() forecastDataEvent = new EventEmitter<any>();

    @ViewChild('citySearch', { static: false })
    citySearchInput!: ElementRef<HTMLInputElement>;

    updateInputVal(cityName: string) {
        if (this.citySearchInput) {
            this.citySearchInput.nativeElement.value = cityName;
        }
    }

    onCitySearch(cityName: string) {
        if (!cityName) return;

        const units = 'metric';

        // refactor with rxjs mergemap
        this.weatherAPIService
            .getWeatherByCityName(cityName, units)
            .subscribe((data: Weather) => {
                console.log('From search-bar component WEATHER ->', data);
                this.weatherDataEvent.emit(data);
            });

        this.weatherAPIService
            .getHourlyForecastByLocationName(cityName, units)
            .subscribe((data: any) => {
                console.log(
                    'From search-bar component FORECAST ->',
                    data.slice(0, 7)
                );
                this.forecastDataEvent.emit(data.slice(0, 7));
            });
    }
}
