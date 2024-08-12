export interface WeatherData {
    name: string;
    timezone: number;
    visibility: number;
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    }
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
}