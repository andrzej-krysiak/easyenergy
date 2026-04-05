"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function HeroButtons() {
    const scrollToOffer = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('oferta');
        if (element) {
            const offset = 80; // Offset dla przyklejonego navbaru
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center w-full sm:w-auto relative">
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#66b3ff]/25 blur-[55px] rounded-full z-0 hidden sm:block"></div>
            
            <Link
                href="/kontakt"
                className="inline-flex justify-center items-center w-[85%] max-w-[320px] sm:w-auto px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 text-sm sm:text-base md:text-[17px] lg:text-lg font-bold text-white bg-[#3385d9] rounded-2xl hover:bg-[#286bb3] shadow-[0_4px_30px_rgba(51,133,217,0.4)] hover:shadow-[0_8px_40px_rgba(51,133,217,0.5)] hover:-translate-y-1 transition-all duration-300 relative z-10 animate-in-up transform-gpu"
            >
                Rozpocznij współpracę
            </Link>
            <button
                onClick={scrollToOffer}
                className="inline-flex justify-center items-center w-[85%] max-w-[320px] sm:w-auto px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 text-sm sm:text-base md:text-[17px] lg:text-lg font-bold text-white bg-white/5 backdrop-blur-[40px] border border-white/20 rounded-2xl hover:bg-white/20 hover:border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.20)] transition-all duration-300 group relative z-10 cursor-pointer animate-in-up transform-gpu"
            >
                Nasza oferta
                <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </button>
        </div>
    );
}
