"use client";
import { useState, useEffect } from "react";
import { WeatherData } from "../weatherType";

export default function Weather() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [city, setCity] = useState("Phoenix");

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`/api/weather?city=${city}`);
                const data = await response.json();
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
                        <div className="flex flex-col h-full w-full p-2">
                            <h2 className="text-6xl">{weatherData.city.name}</h2>
                            <h2 className="text-5xl">{weatherData.list[0].main.temp}°F</h2>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="flex h-full w-full bg-slate-500"></div>
                <div className="flex h-full w-full bg-slate-600"></div>
            </div>

            <div className="flex h-full w-3/12 bg-slate-700">
                Three
            </div>
        </main>
    );
}