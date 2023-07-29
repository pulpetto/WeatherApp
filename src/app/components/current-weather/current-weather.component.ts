import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';

@Component({
    selector: 'app-current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
    @Input() userLocation: string | undefined;

    weatherInfo!: Weather;

    updateWeatherInfo(data: Weather) {
        this.weatherInfo = data;
        console.log('From weather component ->', data);
    }
}
