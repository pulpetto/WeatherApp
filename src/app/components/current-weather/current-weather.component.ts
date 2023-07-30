import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';

@Component({
    selector: 'app-current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
    @Input() userLocation: string | undefined;
    @Input() locationData!: Weather;

    weatherInfo!: Weather;
    weatherIconSrc!: string;

    updateWeatherInfo(data: Weather) {
        this.weatherInfo = data;
        console.log('From weather component ->', data);

        this.weatherIconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        // if (data.weather[0].main === 'Cloud') {
        //     this.weatherIconSrc = 'assets/svg/cloud.svg';
        // }

        // if (data.weather[0].main === 'Cloud') {
        //     this.weatherIconSrc = 'assets/svg/cloud.svg';
        // }
    }
}
