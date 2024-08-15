"use client";
import { useState, useEffect } from "react";
import { ForecastData } from "../../interfaces/forecast";

import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '400', '700']
});

export default function Home() {
    const [forecastData, setForecastData] = useState<ForecastData | null>(null);
    const [city, setCity] = useState("Phoenix");

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const response = await fetch(`/api/forecast?city=${city}`);
                if (!response.ok) {
                    throw new Error(`City not found: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("Forecast data", data);
                setForecastData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchForecastData();
    }, [city]);

    // Change city using input field
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const cityInput = form.elements.namedItem('city') as HTMLInputElement;
        setCity(cityInput.value);
    };

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const orderedDaysOfWeek = [...daysOfWeek.slice(today), ...daysOfWeek.slice(0, today)];

    return (
        <main className="flex p-12 h-screen w-screen gap-4">
            <div className="flex h-full w-1/12 bg-slate-800 rounded-xl">
                One.
            </div>

            <div className="flex flex-col h-full w-8/12 bg-slate-950 gap-4">
                <div className="flex h-2/6 w-full justify-center items-center">
                    <div className="flex justify-left items-center bg-slate-800 h-1/2 w-full rounded-lg p-4">
                        <form className="flex w-full" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="city"
                                defaultValue={city}
                                className="p-2 m-2 text-slate-300 w-full h-full bg-slate-800"
                                placeholder="Search for cities"
                            ></input>
                        </form>
                    </div>
                </div>

                <div className="flex h-full w-full bg-slate-950">
                    {forecastData ? (
                        <div className={`${poppins.className} flex flex-row h-full w-full p-4 pl-14 pr-14`}>
                            <div className="flex h-full w-1/2 flex-col">
                                <h2 className="text-6xl font-bold pb-3">{forecastData.resolvedAddress.split(',')[0]}</h2>
                                <p className="pb-14 text-lg font-normal text-slate-200">{forecastData.days[0].description}</p>
                                <h2 className="flex text-5xl font-bold">{forecastData.days[0].temp}°F</h2>
                            </div>

                            <div className="flex w-1/2 h-full flex-col justify-center items-center">
                                <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData.days[0].icon}.svg`} />
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                
                <div className={`${poppins.className} flex flex-col h-full w-full p-4 pl-14 pr-14 bg-slate-800 rounded-lg`}>
                    <p className="pb-6 text-lg font-normal text-slate-200">Today's Forecast</p>
                    {forecastData ?(
                        <div className="flex flex-row h-full w-full">
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-700 justify-center items-center gap-4">
                                <p>6:00 AM</p>
                                <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData.days[0].hours[6].icon}.svg`} />
                                <h1>{forecastData.days[0].hours[6].temp}°F</h1>
                            </div>
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-700 justify-center items-center gap-4">
                                <p>9:00 AM</p>
                                <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData.days[0].hours[9].icon}.svg`} />
                                <h1>{forecastData.days[0].hours[9].temp}°F</h1>
                            </div>
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-700 justify-center items-center gap-4">
                                <p>12:00 PM</p>
                                <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData.days[0].hours[12].icon}.svg`} />
                                <h1>{forecastData.days[0].hours[12].temp}°F</h1>
                            </div>
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-700 justify-center items-center gap-4">
                                <p>3:00 PM</p>
                                <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData.days[0].hours[15].icon}.svg`} />
                                <h1>{forecastData.days[0].hours[15].temp}°F</h1>
                            </div>
                            <div className="flex flex-col w-full h-full border-r-2 border-slate-700 justify-center items-center gap-4">
                                <p>6:00 PM</p>
                                <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData.days[0].hours[18].icon}.svg`} />
                                <h1>{forecastData.days[0].hours[18].temp}°F</h1>
                            </div>
                            <div className="flex flex-col w-full h-full justify-center items-center gap-4">
                                <p>9:00 PM</p>
                                <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData.days[0].hours[21].icon}.svg`} />
                                <h1>{forecastData.days[0].hours[21].temp}°F</h1>
                            </div>
                        </div>
                    ): (
                        <p>Loading...</p>
                    )}
                </div>

                <div className={`${poppins.className} flex flex-col h-full w-full p-4 pl-14 pr-14 bg-slate-800 rounded-xl`}>
                    <p className="pb-6 text-lg font-normal text-slate-200">Air Conditions</p>
                    <div className="flex flex-row w-full h-full">
                        <div className="flex flex-col w-full h-full">
                            <div className="flex flex-col w-full h-full">
                                <p className="text-lg font-normal pb-2">Real Feel</p>
                                <h2 className="text-xl font-bold">{forecastData?.days[0].feelslike}°F</h2>
                            </div>
                            <div className="flex flex-col w-full h-full">
                                <p className="text-lg font-normal">Chance of rain</p>
                                <h2 className="text-xl font-bold">{forecastData?.days[0].precipprob}%</h2>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-full">
                            <div className="flex flex-col w-full h-full">
                                <p className="text-lg font-normal">Wind</p>
                                <h2 className="text-xl font-bold">{forecastData?.days[0].windspeed} MPH</h2>
                            </div>
                            <div className="flex flex-col w-full h-full">
                                <p className="text-lg font-normal">UV Index</p>
                                <h2 className="text-xl font-bold">{forecastData?.days[0].uvindex}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full w-3/12 bg-slate-800 rounded-xl p-6">
                <p className="text-lg font-normal text-slate-200">7-Day Forecast</p>
                <div className="flex w-full h-full border-b-2 border-slate-700 items-center justify-between">
                    <p>Today</p>
                    <div className="flex w-1/3 h-full justify-center items-center gap-4">
                        <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData?.days[0].icon}.svg`} />
                        <p>{forecastData?.days[0].conditions}</p>
                    </div>
                    <p><b>{forecastData?.days[0].tempmax}</b> / {forecastData?.days[0].tempmin}</p>
                </div>
                <div className="flex w-full h-full border-b-2 border-slate-700 items-center justify-between">
                    <p>{orderedDaysOfWeek[1]}</p>
                    <div className="flex w-1/3 h-full justify-center items-center gap-4">
                        <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData?.days[1].icon}.svg`} />
                        <p>{forecastData?.days[1].conditions}</p>
                    </div>
                    <p><b>{forecastData?.days[1].tempmax}</b> / {forecastData?.days[1].tempmin}</p>
                </div>
                <div className="flex w-full h-full border-b-2 border-slate-700 items-center justify-between">
                    <p>{orderedDaysOfWeek[2]}</p>
                    <div className="flex w-1/3 h-full justify-center items-center gap-4">
                        <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData?.days[2].icon}.svg`} />
                        <p>{forecastData?.days[2].conditions}</p>
                    </div>
                    <p><b>{forecastData?.days[2].tempmax}</b> / {forecastData?.days[2].tempmin}</p>
                </div>
                <div className="flex w-full h-full border-b-2 border-slate-700 items-center justify-between">
                    <p>{orderedDaysOfWeek[3]}</p>
                    <div className="flex w-1/3 h-full justify-center items-center gap-4">
                        <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData?.days[3].icon}.svg`} />
                        <p>{forecastData?.days[3].conditions}</p>
                    </div>
                    <p><b>{forecastData?.days[3].tempmax}</b> / {forecastData?.days[3].tempmin}</p>
                </div>
                <div className="flex w-full h-full border-b-2 border-slate-700 items-center justify-between">
                    <p>{orderedDaysOfWeek[4]}</p>
                    <div className="flex w-1/3 h-full justify-center items-center gap-4">
                        <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData?.days[4].icon}.svg`} />
                        <p>{forecastData?.days[4].conditions}</p>
                    </div>
                    <p><b>{forecastData?.days[4].tempmax}</b> / {forecastData?.days[4].tempmin}</p>
                </div>
                <div className="flex w-full h-full border-b-2 border-slate-700 items-center justify-between">
                    <p>{orderedDaysOfWeek[5]}</p>
                    <div className="flex w-1/3 h-full justify-center items-center gap-4">
                        <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData?.days[5].icon}.svg`} />
                        <p>{forecastData?.days[5].conditions}</p>
                    </div>
                    <p><b>{forecastData?.days[5].tempmax}</b> / {forecastData?.days[5].tempmin}</p>
                </div>
                <div className="flex w-full h-full items-center justify-between">
                    <p>{orderedDaysOfWeek[6]}</p>
                    <div className="flex w-1/3 h-full justify-center items-center gap-4">
                        <img className="w-1/3" alt="Weather Icon" src={`../icons/${forecastData?.days[6].icon}.svg`} />
                        <p>{forecastData?.days[6].conditions}</p>
                    </div>
                    <p><b>{forecastData?.days[6].tempmax}</b> / {forecastData?.days[6].tempmin}</p>
                </div>
            </div>
        </main>
    );
}