import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../interfaces/weather';

@Injectable({
    providedIn: 'root',
})
export class WeatherApiService {
    private apiKey = '721a956f72738d6959dce2e545fb8d44';
    private baseUrlByCoords = 'https://api.openweathermap.org/data/2.5/weather';
    private baseUrlByLocation = '';

    constructor(private http: HttpClient) {}

    getWeatherByCoordinates(
        latitude: number,
        longitude: number
    ): Observable<Weather> {
        const url = `${this.baseUrlByCoords}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;

        return this.http.get<Weather>(url);
    }

    getWeatherByCityName(cityName: string): Observable<Weather> {
        const url = `${this.baseUrlByCoords}?q=${cityName}&appid=${this.apiKey}`;

        return this.http.get<Weather>(url);
    }
}