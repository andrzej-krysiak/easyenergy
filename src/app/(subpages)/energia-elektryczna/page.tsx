import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import ScrollReveal from '../../../components/ScrollReveal';
import EnergyModelsAdvisor from '../../../components/EnergyModelsAdvisor';

export const metadata: Metadata = {
    title: 'Energia Elektryczna',
    description: 'Dostarczamy nowoczesne rozwiązania energetyczne oparte na czystych źródłach i transparentnych kontraktach dla firm. Zaplanuj koszty energii z EasyEnergy.',
    alternates: {
        canonical: "/energia-elektryczna",
    },
    openGraph: {
        title: 'Energia Elektryczna dla Firm - Optymalizacja | EasyEnergy',
        description: 'Zabezpiecz stabilność firmy przed niespodziewanymi podwyżkami. Profesjonalne zabezpieczenia i dedykowany dobór ofert dla energii elektrycznej.',
        url: 'https://easyenergy.pl/energia-elektryczna',
    }
};

export default function EnergiaElektrycznaPage() {
    return (
        <main className="relative font-display text-slate-900 antialiased selection:bg-[#3385d9]/20 bg-[#f9fafb]">
            {/* Section 1: Hero & Vision */}
            <section className="relative flex flex-col pt-20 lg:pt-24 overflow-hidden bg-white rounded-b-[2.5rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] shadow-[0_15px_25px_-12px_rgba(0,0,0,0.08)] z-10">
                
                {/* Background Energy Paths - Reverted to Kontakt style & pinned to bottom */}
                <div className="absolute left-0 right-0 bottom-0 h-[600px] opacity-[0.12] pointer-events-none z-0 overflow-hidden">
                    <svg width="100%" height="100%" viewBox="0 0 1440 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3385d9" stopOpacity="0" />
                                <stop offset="50%" stopColor="#3385d9" stopOpacity="1" />
                                <stop offset="100%" stopColor="#3385d9" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d="M-200 500 L 1600 100" stroke="url(#energyGrad)" strokeWidth="1" fill="none" />
                        <path d="M-200 550 L 1600 150" stroke="url(#energyGrad)" strokeWidth="2" fill="none" />
                        <path d="M100 650 L 1400 -50" stroke="url(#energyGrad)" strokeWidth="0.5" fill="none" />
                        <path d="M400 700 L 1800 200" stroke="url(#energyGrad)" strokeWidth="1.5" fill="none" />
                        <path d="M-300 200 L 1000 600" stroke="url(#energyGrad)" strokeWidth="1" opacity="0.4" fill="none" />
                        {/* Technical Accent Nodes */}
                        <circle cx="800" cy="300" r="3" fill="#3385d9" opacity="0.5" />
                        <circle cx="400" cy="450" r="2" fill="#3385d9" opacity="0.3" />
                        <circle cx="1100" cy="150" r="4" fill="#3385d9" opacity="0.2" />
                    </svg>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col relative z-10 w-full">
                    {/* Breadcrumbs - Editorial spacing */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-base font-medium mb-5 lg:mb-6 animate-in-up">
                        <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                            Strona główna
                        </Link>
                        <FiChevronRight className="text-slate-400 text-lg" />
                        <span className="text-[#3385d9]">Energia elektryczna</span>
                    </nav>

                    <div className="relative flex flex-col">
                        {/* Hero Image Frame - Tightened depth and borders */}
                        <div className="relative flex-none rounded-[2.25rem] border border-slate-200/50 shadow-[0_40px_100px_rgba(2,6,23,0.08)] overflow-hidden h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[380px]">
                            <Image
                                src="/energia-elektryczna.png"
                                alt="Energia Elektryczna EasyEnergy"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 1280px) 100vw, 1280px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-slate-950/5 z-10" />
                            
                            <div className="relative z-20 h-full flex flex-col justify-end px-7 pb-8 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12 text-white animate-in-up delay-200">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-[1] max-w-3xl drop-shadow-2xl">
                                    Energia, która napędza{" "}<br />
                                    <span className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-transparent bg-clip-text pr-1 sm:pr-2">
                                        Twoją przyszłość
                                    </span>
                                    .
                                </h1>
                            </div>
                        </div>
                        {/* Editorial Description - Left Aligned */}
                        <div className="pt-6 sm:pt-8 lg:pt-10 pb-8 flex flex-col items-center sm:items-start max-w-3xl animate-in-up delay-300">
                            <p className="text-center sm:text-left text-base sm:text-lg xl:text-xl text-slate-600 font-medium leading-[1.6] mb-4 tracking-tight text-pretty text-balance">
                                Dostarczamy nowoczesne rozwiązania energetyczne oparte na czystych źródłach i transparentnych zasadach. Wybierz segment dopasowany do Twojego stylu życia.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Redesigned Centered Scroll Indicator - In Flow to prevent overlap */}
                <div className="flex-none flex flex-col items-center gap-3 z-20 group transition-all duration-500 pt-4 pb-8 cursor-default">
                    <span className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-[0.4em] group-hover:text-[#3385d9] transition-all duration-300 ml-[0.4em]">
                        Poznaj modele zakupu
                    </span>
                    <div className="relative flex items-center justify-center pt-2">
                        <div className="absolute inset-0 bg-[#3385d9]/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>
                        <IoIosArrowDown className="text-3xl sm:text-4xl lg:text-5xl text-[#3385d9]/60 group-hover:text-[#3385d9] animate-bounce transition-all duration-300 relative z-10" />
                    </div>
                </div>
            </section>

            {/* Section 2: Advisor Section - Editorialized and cleaner */}
            <section className="relative py-16 sm:py-20 lg:py-24 bg-[#f9fafb] overflow-hidden">
                {/* Background Waves - Truly Irregular and Entwined approach */}
                <div className="absolute -top-10 sm:top-0 left-0 right-0 h-80 pointer-events-none opacity-[0.22] z-0">
                    <svg className="w-full h-full" viewBox="0 0 1440 240" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M-100 120 C 150 180, 400 40, 620 130 C 850 210, 1100 60, 1540 140"
                            stroke="#3385d9" strokeWidth="0.8" strokeLinecap="round"
                        />
                        <path
                            d="M-100 140 C 250 60, 550 200, 850 100 C 1100 30, 1300 170, 1540 100"
                            stroke="#3385d9" strokeWidth="0.8" strokeLinecap="round"
                        />
                        <path
                            d="M-100 110 C 350 220, 150 20, 750 120 C 1200 240, 1000 0, 1540 120"
                            stroke="#3385d9" strokeWidth="0.8" strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="flex flex-col items-center text-center mx-auto max-w-3xl mb-12 lg:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-tight text-slate-900">
                                Jak dobrać model zakupu energii?
                            </h2>
                            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-2xl">
                                Nie analizuj różnic technologicznych. Zastanów się, co jest priorytetem dla kondycji Twojego przedsiębiorstwa, a my wskażemy optymalną strategię.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <EnergyModelsAdvisor />
                    </ScrollReveal>

                    {/* Integrated Doradztwo Eksperckie CTA - Restored Previous Look */}
                    <ScrollReveal className="mt-8 lg:mt-14">
                        <div className="relative overflow-hidden bg-[#3385d9] rounded-2xl p-6 md:p-12 shadow-xl shadow-blue-900/10">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                                </svg>
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                                <div className="max-w-2xl text-left">
                                    <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight">Doradztwo eksperckie</h2>
                                    <p className="text-blue-50 text-[15px] md:text-lg leading-relaxed">
                                        Ostateczny wybór modelu zakupu energii elektrycznej zależy od potrzeb i profilu zużycia energii w Twoim przedsiębiorstwie. Skonsultuj się z naszym ekspertem, aby dobrać rozwiązanie idealne dla Twojego biznesu.
                                    </p>
                                </div>
                                <div className="flex-shrink-0 w-full sm:w-auto sm:self-center md:self-auto flex justify-start sm:justify-center md:justify-start">
                                    <Link href="/kontakt" className="inline-block w-full sm:w-auto bg-white text-[#3385d9] hover:bg-slate-100 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-xl shadow-black/10 text-center hover:scale-105 active:scale-95">
                                        Skontaktuj się z nami
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
