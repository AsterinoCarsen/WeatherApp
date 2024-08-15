export interface ForecastData {
    latitude: number;
    longitude: number;
    resolvedAddress: string;
    tzoffset: number;
    timezone: string;

    days: Array<{
        cloudcover: number;
        conditions: string;
        datetime: string;
        description: string;

        dew: number;

        feelslike: number;
        feelslikemax: number;
        feelslikemin: number;

        humidity: number;
        icon: string;

        precip: number;
        precipprob: number;
        preciptype: string;
        snow: number;
        snowdepth: number;

        sunrise: string;
        sunset: string;

        temp: number;
        tempmax: number;
        tempmin: number;

        uvindex: number;
        visibility: number;

        winddir: number;
        windgust: number;
        windspeed: number;

        hours: Array<{
            cloudcover: number;
            conditions: string;
            datetime: string;
            description: string;

            dew: number;

            feelslike: number;

            humidity: number;
            icon: string;

            precip: number;
            precipprob: number;
            preciptype: string;
            snow: number;
            snowdepth: number;

            sunrise: string;
            sunset: string;

            temp: number;
            tempmax: number;
            tempmin: number;

            uvindex: number;
            visibility: number;

            winddir: number;
            windgust: number;
            windspeed: number;
        }>;
    }>;
}