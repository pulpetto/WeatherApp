import { Coord } from './coord';
import { WeatherToday } from './weather-today';
import { Main } from './main';
import { Wind } from './wind';
import { Rain } from './rain';
import { Clouds } from './clouds';
import { Sys } from './sys';

export interface Weather {
    coord: Coord;
    weather: WeatherToday[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: Rain;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
