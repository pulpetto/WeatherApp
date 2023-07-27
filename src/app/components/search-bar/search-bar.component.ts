import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
    @Input() userLocation: string | undefined;

    onCitySearch(cityName: string) {
        if (!cityName) return;
        console.log(this.userLocation);
    }
}
