import { Component } from '@angular/core';
import { GeoLocationService } from './services/geo-location.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor(private geolocationService: GeoLocationService) {}

    userLocation: any;

    ngOnInit() {
        this.geolocationService.askForLocation().then(
            (coords) => {
                this.geolocationService.userLocation = coords;

                this.userLocation = this.geolocationService.userLocation;
            },
            (error) => {
                console.error('Error getting user location:', error);
                this.geolocationService.userLocation = 'denied';

                this.userLocation = this.geolocationService.userLocation;
            }
        );
    }
}
