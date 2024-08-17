import Image from "next/image";
import Link from "next/link";

import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '400', '600', '700', '800']
});

export default function Home() {
  return (
    <main className={`${poppins.className} flex w-screen h-screen p-12`}>
      <div className="flex justify-center items-center w-full h-full bg-slate-800 rounded-xl">
        <img className="w-96" src="../icons/logo.svg" />
      </div>

      <div className="flex flex-col w-full h-full rounded-xl justify-center items-center text-center">
        <img className="w-20" src="../icons/logo.svg"/>
        <h1 className="font-extrabold text-7xl pb-2">Climata</h1>
        <p className="text-gray-300 font-normal text-lg pb-10">Weather app</p>
        <Link href="/home" className="flex bg-blue-500 hover:bg-blue-600 p-10 text-center justify-center items-center font-bold text-2xl rounded-xl w-96 h-2">Launch</Link>
      </div>
    </main>
  );
}
