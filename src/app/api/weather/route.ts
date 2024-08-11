import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city") || "New York";

    const apiKey = process.env.WEATHER_API_KEY;
    const apiURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch weather data." }, { status: 500 });
    }
}