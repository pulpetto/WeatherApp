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

    constructor(private http: HttpClient) {}

    getWeatherByCoordinates(
        latitude: number,
        longitude: number,
        units: string
    ): Observable<Weather> {
        const url = `${this.baseUrlByCoords}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=${units}`;

        return this.http.get<Weather>(url);
    }

    getWeatherByCityName(cityName: string, units: string): Observable<Weather> {
        const url = `${this.baseUrlByCoords}?q=${cityName}&appid=${this.apiKey}&units=${units}`;

        // return this.http.get<Weather>(url);

        return new Observable<Weather>((observer) => {
            this.http.get<Weather>(url).subscribe({
                next: (data: Weather) => {
                    observer.next(data);
                    observer.complete();
                },
                error: (error: any) => {
                    observer.error(error);
                },
            });
        });

        // return new Observable<Weather>((observer) => {
        //     this.http.get<Weather>(url).subscribe(
        //         (data: Weather) => {
        //             observer.next(data);
        //             observer.complete();
        //         },
        //         (error: any) => {
        //             observer.error(error);
        //         }
        //     );
        // });
    }

    getHourlyForecastByCoords(
        latitude: number,
        longitude: number,
        units: string
    ): Observable<Weather> {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=${units}`;

        return new Observable<any>((observer) => {
            this.http.get<any>(url).subscribe({
                next: (data: any) => {
                    observer.next(data.list);
                    observer.complete();
                },
                error: (error: any) => {
                    observer.error(error);
                },
            });
        });
    }

    getHourlyForecastByLocationName(
        locationName: string,
        units: string
    ): Observable<Weather> {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=${this.apiKey}&units=${units}`;

        return new Observable<any>((observer) => {
            this.http.get<any>(url).subscribe({
                next: (data: any) => {
                    observer.next(data.list);
                    observer.complete();
                },
                error: (error: any) => {
                    observer.error(error);
                },
            });
        });
    }
}
