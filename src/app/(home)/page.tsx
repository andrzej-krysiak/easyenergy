import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
      <section className="relative min-h-screen flex items-center justify-center lg:justify-start">
        
        {/* Dekoracyjne tło w tle dla mobile */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none md:hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#3385d9]/20 blur-[100px]" />
        </div>

        {/* Imponujące tło ze zdjęciem na pełnej szerokości */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <Image
            src="/home-page-background.jpg"
            alt="Profesjonalne doradztwo energetyczne"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Gradient nakładający się na zdjęcie – sprawia, że biały tekst jest czytelny i profesjonalny */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/30"></div>
          {/* Delikatny wash w kolorze logo dodający nowoczesnego "wizjonerskiego" sznytu */}
          <div className="absolute inset-0 bg-[#1a436d]/40 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-12 lg:pt-40 lg:pb-24 relative z-10">
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-3xl lg:text-left mx-auto lg:mx-0">
            <h1 className={`${playfair.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 md:text-white leading-tight tracking-tight`}>
              Profesjonalne doradztwo <br className="hidden sm:block" />
              w <span className="bg-gradient-to-r from-[#66b3ff] via-[#4095ed] to-[#3385d9] bg-clip-text text-transparent relative whitespace-nowrap drop-shadow-sm">
                energetyce
              </span>
            </h1>

            <p className="text-lg text-center sm:text-justify text-slate-700 md:text-slate-200 sm:text-xl max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
              Pomagamy firmom optymalizować koszty zakupu prądu i gazu, oferując skuteczne strategie i kompleksowe wsparcie prawne. Zadbaj o stabilność i przyszłość swojego biznesu.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-2 sm:pt-6 justify-center lg:justify-start">
              <Link
                href="/kontakt"
                className="inline-flex justify-center items-center w-full sm:w-[240px] px-8 py-4 text-base font-semibold text-white bg-[#3385d9] rounded-xl hover:bg-[#286bb3] active:scale-95 transition-all shadow-lg shadow-[#3385d9]/30"
              >
                <IoIosMail className="w-6 h-6 mr-2"/>
                Umów Spotkanie
              </Link>
              <Link
                href="/energia-elektryczna"
                className="inline-flex justify-center items-center w-full sm:w-[240px] px-8 py-4 text-base font-semibold text-slate-700 md:text-white bg-white/80 md:bg-white/10 backdrop-blur-sm border border-slate-200 md:border-white/20 rounded-xl hover:bg-slate-50 md:hover:bg-white/20 hover:border-slate-300 md:hover:border-white/30 active:scale-95 transition-all shadow-sm"
              >
                Poznaj naszą ofertę
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20">
          <IoIosArrowDown className="w-12 h-12 text-[#3385d9] animate-bounce" />
        </div>
      </section>
      
      <RoadMap />
    </main>
  );
}
