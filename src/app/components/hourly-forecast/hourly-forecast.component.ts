import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-hourly-forecast',
    templateUrl: './hourly-forecast.component.html',
    styleUrls: ['./hourly-forecast.component.css'],
})
export class HourlyForecastComponent {
    constructor(private datePipe: DatePipe) {}

    @Input() locationForecast!: any;

    getHourFromUnixTimestamp(
        unixTimestamp: number,
        format12Hour: boolean = false
    ): string {
        const date = new Date(unixTimestamp * 1000);
        const format = format12Hour ? 'h:mm a' : 'HH:mm'; // Use 'h:mm a' for 12-hour and 'HH:mm' for 24-hour

        return this.datePipe.transform(date, format) || '';
    }
}
