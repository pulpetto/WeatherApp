import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-todays-info',
    templateUrl: './todays-info.component.html',
    styleUrls: ['./todays-info.component.css'],
})
export class TodaysInfoComponent {
    constructor(private datePipe: DatePipe) {}

    @Input() locationData: any;

    getHourFromUnixTimestamp(
        unixTimestamp: number,
        format12Hour: boolean = false
    ): string {
        const date = new Date(unixTimestamp * 1000);
        const format = format12Hour ? 'h:mm a' : 'HH:mm'; // Use 'h:mm a' for 12-hour and 'HH:mm' for 24-hour

        return this.datePipe.transform(date, format) || '';
    }
}
