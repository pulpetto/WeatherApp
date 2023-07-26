import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GeoLocationService {
    constructor() {}

    userLocation: any = 'none';

    askForLocation(): Promise<{ latitude: number; longitude: number }> {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        resolve({ latitude, longitude });
                    },
                    (error) => {
                        reject('Geolocation error: ' + error.message);
                    }
                );
            } else {
                reject('Geolocation is not supported by this browser.');
            }
        });
    }
}
