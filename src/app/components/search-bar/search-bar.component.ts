import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoLocationService } from 'src/app/services/geo-location.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
    constructor(private geolocationService: GeoLocationService) {}

    ngOnInit() {
        this.geolocationService.askForLocation().then(
            (coords) => {
                console.log(coords.latitude, coords.longitude);
                this.geolocationService.userLocation = coords;
            },
            (error) => {
                console.error('Error getting user location:', error);
                this.geolocationService.userLocation = 'denied';
            }
        );
    }

    onCitySearch(cityName: string) {
        if (!cityName) return;
    }
}
