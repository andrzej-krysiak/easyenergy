import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle, FiShield, FiActivity, FiTarget, FiLayers, FiChevronRight } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import ScrollReveal from '../../../components/ScrollReveal';
import EnergyModelsAdvisor from '../../../components/EnergyModelsAdvisor';

export const metadata = {
    title: 'Energia Elektryczna | EasyEnergy',
    description: 'Dostarczamy nowoczesne rozwiązania energetyczne oparte na czystych źródłach i transparentnych zasadach. Wybierz segment dopasowany do Twojego stylu życia.',
};

export default function EnergiaElektrycznaPage() {
    return (
        <main className="relative font-display text-slate-900 antialiased selection:bg-[#3385d9]/20 bg-[#f9fafb]">
            {/* Section 1: Hero & Vision */}
            <section className="relative min-h-screen flex flex-col pt-26 pb-12 overflow-hidden bg-gradient-to-b from-white to-[#f9fafb]">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col relative z-10 w-full">
                    {/* Breadcrumbs - Editorial spacing */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-base font-medium mb-10">
                        <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                            Strona główna
                        </Link> 
                        <FiChevronRight className="text-slate-400 text-lg" />
                        <span className="text-[#3385d9]">Energia elektryczna</span>
                    </nav>

                    <div className="relative flex-1 flex flex-col">
                        {/* Hero Image Frame - Tightened depth and borders */}
                        <div className="relative flex-none rounded-[2.25rem] border border-slate-200/50 shadow-[0_40px_100px_rgba(2,6,23,0.08)] overflow-hidden h-[340px] sm:h-[400px] lg:h-[420px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] hover:scale-105"
                                style={{ backgroundImage: "url('/energia-elektryczna.png')" }}
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-slate-950/5" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />

                            <div className="relative h-full flex flex-col justify-end px-7 pb-10 sm:px-10 sm:pb-12 lg:px-16 lg:pb-16 text-white">
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1] max-w-3xl drop-shadow-2xl">
                                    Energia, która napędza{" "}
                                    <span className="bg-gradient-to-r from-[#93c5fd] via-[#66b3ff] to-white text-transparent bg-clip-text pr-2">
                                        Twoją przyszłość
                                    </span>
                                    .
                                </h1>
                            </div>
                        </div>

                        {/* Editorial Description - Left Aligned */}
                        <div className="pt-10 sm:pt-14 pb-12 flex flex-col items-start max-w-3xl">
                            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-medium leading-[1.6] mb-8 tracking-tight text-pretty text-balance">
                                Dostarczamy nowoczesne rozwiązania energetyczne oparte na czystych źródłach i transparentnych zasadach. Wybierz segment dopasowany do Twojego stylu życia.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Redesigned Centered Scroll Indicator - Anchored to bottom of 100vh */}
                <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 group transition-all duration-500 hover:pb-2">
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
            <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
                {/* Background Waves - Truly Irregular and Entwined approach */}
                <div className="absolute top-0 left-0 right-0 h-80 pointer-events-none opacity-[0.22] z-0">
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

                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-26">
                    <ScrollReveal>
                        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
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
                    <ScrollReveal>
                        <div className="relative overflow-hidden bg-[#3385d9] rounded-2xl p-8 md:p-12 shadow-xl shadow-blue-900/10">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                                </svg>
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="max-w-2xl text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Doradztwo eksperckie</h2>
                                    <p className="text-blue-50 text-lg leading-relaxed">
                                        Ostateczny wybór modelu zakupu energii elektrycznej zależy od potrzeb i profilu zużycia energii w Twoim przedsiębiorstwie. Skonsultuj się z naszym ekspertem, aby dobrać rozwiązanie idealne dla Twojego biznesu.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Link href="/umow-spotkanie" className="inline-block bg-white text-[#3385d9] hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-black/10 text-center hover:scale-105 active:scale-95">
                                        Umów bezpłatną konsultację
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
