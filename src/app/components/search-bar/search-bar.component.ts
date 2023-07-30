import { Component, ElementRef, ViewChild } from '@angular/core';
import { WeatherApiService } from 'src/app/services/weather-api.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
    constructor(private weatherAPIService: WeatherApiService) {}

    @ViewChild('citySearch', { static: false })
    citySearchInput!: ElementRef<HTMLInputElement>;

    updateInputVal(cityName: string) {
        if (this.citySearchInput) {
            this.citySearchInput.nativeElement.value = cityName;
        }
    }

    onCitySearch(cityName: string) {
        if (!cityName) return;

        this.weatherAPIService
            .getWeatherByCityName(cityName)
            .subscribe((data) => {
                console.log(data);
            });
    }
}
