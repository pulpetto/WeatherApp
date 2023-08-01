import { Component, Input, SimpleChanges } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';

@Component({
    selector: 'app-current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
    @Input() userLocation: string | undefined;
    @Input() locationData!: Weather;
}
