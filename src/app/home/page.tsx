"use client";
import { useState, useEffect } from "react";

import { ForecastData } from "../../interfaces/forecast";
import { WeatherData } from "@/interfaces/weather";

import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '400', '700']
});

export default function Home() {
    const [forecastData, setForecastData] = useState<ForecastData | null>(null);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [city, setCity] = useState("Phoenix");

    // Call forecast data
    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const response = await fetch(`/api/forecast?city=${city}`);
                const data = await response.json();
                console.log(data);
                setForecastData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchForecastData();
    }, [city]);

    // Call current weather data
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`/api/weather?city=${city}`);
                const data = await response.json();
                console.log(data);
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchWeatherData();
    }, [city]);

    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const cityInput = form.elements.namedItem('city') as HTMLInputElement;
        setCity(cityInput.value);
    };

    return (
        <main className="flex p-12 h-screen w-screen">
            <div className="flex h-full w-1/12 bg-slate-500">
                One.
            </div>

            <div className="flex flex-col h-full w-8/12 bg-slate-600">
                <div className="flex h-2/6 w-full bg-slate-300 justify-center items-center">
                    <div className="flex justify-left items-center bg-slate-800 h-1/2 w-full rounded-lg p-4">
                        <form className="flex w-full" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="city"
                                defaultValue={city}
                                className="p-2 text-slate-300 w-full h-full bg-slate-800"
                                placeholder="Search for cities"
                            ></input>
                        </form>
                    </div>
                </div>
                <div className="flex h-full w-full bg-slate-400">
                    {weatherData ? (
                        <div className={`${poppins.className} flex flex-row h-full w-full p-4 pl-14 pr-14`}>
                            <div className="flex h-full w-1/2 flex-col">
                                <h2 className="text-6xl font-bold pb-3">{weatherData.name}</h2>
                                <p className="pb-14 text-lg font-normal text-slate-200">Humidity: {weatherData.main.humidity}%</p>
                                <h2 className="flex text-5xl font-bold">{weatherData.main.temp}°F</h2>
                            </div>

                            <div className="flex w-1/2 h-full flex-col justify-center items-center">
                                <img alt="Weather Icon" className="flex w-1/4" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}></img>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                
                <div className={`${poppins.className} flex flex-col h-full w-full p-4 pl-14 pr-14 bg-slate-800`}>
                    <p className="pb-6 text-lg font-normal text-slate-200">Today's Forecast</p>
                    {forecastData ?(
                        <div className="flex flex-row h-full w-full bg-slate-700">
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-200 justify-center items-center">
                                <p>6:00 AM</p>
                                <img alt="Weather Icon" className="flex w-1/4" src={`https://openweathermap.org/img/wn/${forecastData.list[0].weather[0].icon}@4x.png`}></img>
                                <h1>{forecastData.list[0].main.temp}</h1>
                            </div>
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-200 justify-center items-center">
                                <p>9:00 AM</p>
                                <img alt="Weather Icon" className="flex w-1/4" src={`https://openweathermap.org/img/wn/${forecastData.list[1].weather[0].icon}@4x.png`}></img>
                                <h1>{forecastData.list[1].main.temp}</h1>
                            </div>
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-200 justify-center items-center">
                                <p>12:00 PM</p>
                                <img alt="Weather Icon" className="flex w-1/4" src={`https://openweathermap.org/img/wn/${forecastData.list[2].weather[0].icon}@4x.png`}></img>
                                <h1>{forecastData.list[2].main.temp}</h1>
                            </div>
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-200 justify-center items-center">
                                <p>3:00 PM</p>
                                <img alt="Weather Icon" className="flex w-1/4" src={`https://openweathermap.org/img/wn/${forecastData.list[3].weather[0].icon}@4x.png`}></img>
                                <h1>{forecastData.list[3].main.temp}</h1>
                            </div>
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-200 justify-center items-center">
                                <p>6:00 PM</p>
                                <img alt="Weather Icon" className="flex w-1/4" src={`https://openweathermap.org/img/wn/${forecastData.list[4].weather[0].icon}@4x.png`}></img>
                                <h1>{forecastData.list[4].main.temp}</h1>
                            </div>
                            <div className="flex flex-col w-full h-full justify-center items-center">
                                <p>9:00 PM</p>
                                <img alt="Weather Icon" className="flex w-1/4" src={`https://openweathermap.org/img/wn/${forecastData.list[5].weather[0].icon}@4x.png`}></img>
                                <h1>{forecastData.list[5].main.temp}</h1>
                            </div>
                        </div>
                    ): (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="flex h-full w-full bg-slate-600"></div>
            </div>

            <div className="flex h-full w-3/12 bg-slate-700">
                Three
            </div>
        </main>
    );
}