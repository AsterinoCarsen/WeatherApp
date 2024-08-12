export interface ForecastData {
    city: {
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        name: string;
        population: number;
        sunrise: number;
        sunset: number;
        timezone: number;
    };
    list: Array<{
        dt: number;
        dt_txt: string;
        main: {
            feels_like: number;
            grnd_level: number;
            humidity: number;
            pressure: number;
            sea_level: number;
            temp: number;
            temp_kf: number;
            temp_max: number;
            temp_min: number;
        };
        visibility: number;
        weather: Array<{
            description: string;
            icon: string;
            main: string;
        }>;
        wind: {
            deg: number;
            gust: number;
            speed: number;
        };
    }>;
}