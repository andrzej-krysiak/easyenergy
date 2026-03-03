import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import RoadMap from "./RoadMap";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"]
});

export default function Home() {
  return (
    <main className="bg-slate-50 relative overflow-hidden">
      <section className="min-h-[calc(100vh-80px)] flex items-center">
      {/* Dekoracyjne tło w tle */}
      
      {/*
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-200 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-200 blur-[120px]" />
      </div>
      */}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Lewa kolumna: Główny napis */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className={`${playfair.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight`}>
              Profesjonalne doradztwo <br className="hidden sm:block" />
              w <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent relative whitespace-nowrap">
                energetyce
              </span>
            </h1>

            <p className="text-lg text-justify sm:text-xl text-slate-700 max-w-xl leading-relaxed font-light">
              Pomagamy firmom optymalizować koszty zakupu prądu i gazu, oferując skuteczne strategie i kompleksowe wsparcie prawne. Zadbaj o stabilność i przyszłość swojego biznesu.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link
                href="/kontakt"
                className="inline-flex justify-center items-center w-full sm:w-[240px] px-8 py-4 text-base font-semibold text-white bg-indigo-500 rounded-xl hover:bg-indigo-600 active:scale-95 transition-all shadow-lg shadow-blue-600/30"
              >
                <IoIosMail className="w-6 h-6 mr-2"/>
                Umów Spotkanie
              </Link>
              <Link
                href="/energia-elektryczna"
                className="inline-flex justify-center items-center w-full sm:w-[240px] px-8 py-4 text-base font-semibold text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all shadow-sm"
              >
                Poznaj naszą ofertę
              </Link>
            </div>
          </div>

          {/* Prawa kolumna: Przyszłe miejsce na grafikę */}
          <div className="hidden lg:flex justify-center items-center relative h-full min-h-[400px]">
            {/* Tutaj wrzucimy potem ilustracje lub zdjecie */}
            <div className="w-[80%] aspect-square rounded-full border border-slate-200 bg-white/50 backdrop-blur-md shadow-2xl relative">
              <div className="absolute inset-0 rounded-full border-t-2 border-blue-500 animate-[spin_10s_linear_infinite] opacity-50"></div>
              <div className="absolute inset-4 rounded-full border-b-2 border-indigo-400 animate-[spin_15s_linear_infinite_reverse] opacity-50"></div>
            </div>
          </div>

        </div>
      </div>
      </section>
      <div className="flex justify-center -mt-12 relative z-20 pb-12">
        <IoIosArrowDown className="w-12 h-12 text-indigo-400 animate-bounce" />
      </div>
      <RoadMap />
    </main>
  );
}
