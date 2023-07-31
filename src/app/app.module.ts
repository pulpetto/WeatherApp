import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { TabbedInfoComponent } from './components/tabbed-info/tabbed-info.component';

import { HttpClientModule } from '@angular/common/http';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';
import { TodaysInfoComponent } from './components/todays-info/todays-info.component';
import { WeeklyForecastComponent } from './components/weekly-forecast/weekly-forecast.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        CurrentWeatherComponent,
        TabbedInfoComponent,
        HourlyForecastComponent,
        TodaysInfoComponent,
        WeeklyForecastComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
