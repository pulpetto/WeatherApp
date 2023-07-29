import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
    @ViewChild('citySearch', { static: false })
    citySearchInput!: ElementRef<HTMLInputElement>;

    onCitySearch(cityName: string) {
        if (!cityName) return;
    }

    updateInputVal(cityName: string) {
        // po co blokadka
        if (this.citySearchInput) {
            this.citySearchInput.nativeElement.value = cityName;
        }
    }
}
