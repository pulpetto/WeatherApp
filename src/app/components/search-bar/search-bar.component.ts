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

        this.weatherAPIService
            .getWeatherByCityName(cityName, units)
            .subscribe((data: Weather) => {
                console.log('From search-bar component ->', data);
                this.weatherDataEvent.emit(data);
            });
    }
}
