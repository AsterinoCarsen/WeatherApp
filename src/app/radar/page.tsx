import React from "react";
import Link from "next/link";

export default function Radar() {
    return (
        <main className="flex w-screen h-screen p-12 gap-4">
            <div className="flex flex-col h-full w-1/12 bg-slate-800 rounded-xl items-center p-8 gap-12">
                <Link href="/home" className="flex flex-col text-center items-center">
                    <img className="invert" src="../icons/weather-button-on.svg" />
                    <p className="text-white">Weather</p>
                </Link>

                <button className="flex flex-col text-center items-center">
                    <img className="invert" src="../icons/map.svg" />
                    <p className="text-white font-bold">Radar</p>
                </button>

                <Link href="/" className="flex invert mt-auto">
                    <img src="../icons/back.svg" />
                </Link>
            </div>

            <div className="flex w-full h-full bg-slate-800 rounded-xl">
                
            </div>
        </main>
    )
}