import { Component } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
    onCitySearch(cityName: string) {
        if (!cityName) return;
    }
}
