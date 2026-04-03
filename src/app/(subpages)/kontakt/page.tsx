"use client";

import React from 'react';
import Link from 'next/link';
import { FiMapPin, FiClock, FiPhone, FiMail, FiChevronRight } from 'react-icons/fi';
import MapWrapper from '../../../components/MapWrapper';
import ContactForm from '../../../components/ContactForm';
import ScrollReveal from '../../../components/ScrollReveal';

const ContactPage = () => {
    return (
        <main className="relative min-h-screen bg-[#f9fafb] font-display text-slate-900 overflow-hidden antialiased selection:bg-[#3385d9]/20">

            {/* Nowe tło wektorowe - geometryczne delikatne kręgi (bez blobów, bez kratek, bez dziwnych fal) */}
            <div className="absolute top-0 right-0 w-[900px] h-[900px] pointer-events-none opacity-20 -translate-y-1/4 translate-x-1/4 z-0">
                <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rotate-12">
                    <circle cx="400" cy="400" r="399" stroke="url(#paint0_linear_contact)" strokeWidth="1.5" />
                    <circle cx="400" cy="400" r="280" stroke="url(#paint1_linear_contact)" strokeWidth="1" />
                    <circle cx="400" cy="400" r="160" stroke="url(#paint2_linear_contact)" strokeWidth="0.5" />
                    <defs>
                        <linearGradient id="paint0_linear_contact" x1="0" y1="0" x2="800" y2="800" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3385d9" stopOpacity="0" />
                            <stop offset="1" stopColor="#3385d9" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_contact" x1="120" y1="120" x2="680" y2="680" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#66b3ff" stopOpacity="0" />
                            <stop offset="1" stopColor="#3385d9" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_contact" x1="240" y1="240" x2="560" y2="560" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4095ed" stopOpacity="0" />
                            <stop offset="1" stopColor="#4095ed" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Dyskretna poświata wzmacniająca feeling premium */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3385d9]/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 mx-auto max-w-screen-xl 2xl:max-w-screen-2xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-22 2xl:pt-26 pb-24">

                {/* Nowy Układ: Lewo (Tekst+Kafelki) - Prawo (Formularz) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-stretch">

                    {/* Lewa Kolumna */}
                    <div className="flex flex-col w-full h-full lg:py-6">
                        <ScrollReveal>
                            <div className="mb-10 lg:mb-10">
                                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-base font-medium mb-4 lg:mb-4 2xl:mb-10">
                                    <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                                        Strona główna
                                    </Link>
                                    <FiChevronRight className="text-slate-400 text-lg" />
                                    <span className="text-[#3385d9]">Kontakt</span>
                                </nav>
                                <h1 className="text-4xl lg:text-4xl 2xl:text-6xl font-black tracking-tighter leading-tight text-slate-900 mb-4 2xl:mb-6">
                                    Bądźmy w <span className="bg-gradient-to-r from-[#66b3ff] via-[#4095ed] to-[#3385d9] bg-clip-text text-transparent pr-2">kontakcie</span>.
                                </h1>
                                <p className="text-lg sm:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
                                    Bez względu na to, czy interesuje Cię darmowa wycena, porada w temacie prawa energetycznego czy ogólne zapytanie – nasz zespół z chęcią odpowie.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Kafelki pod opisem */}
                        <ScrollReveal delay="delay-100" className="mt-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 2xl:gap-6">
                                {/* Telefon */}
                                <a href="tel:+48111222333" className="group bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 2xl:p-6 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-1">
                                    <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#3385d9]/10 flex items-center justify-center text-[#3385d9] mb-3 2xl:mb-4 group-hover:bg-[#3385d9] group-hover:text-white transition-colors duration-300">
                                        <FiPhone className="text-lg 2xl:text-xl" />
                                    </div>
                                    <h3 className="text-base 2xl:text-lg font-bold text-slate-900 mb-1">Telefon</h3>
                                    <p className="text-slate-600 font-medium">+48 111 222 333</p>
                                </a>

                                {/* Email */}
                                <a href="mailto:biuro@easyenergy.pl" className="group bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 2xl:p-6 transition-all duration-300 hover:shadow-xl hover:bg-white hover:-translate-y-1">
                                    <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#3385d9]/10 flex items-center justify-center text-[#3385d9] mb-3 2xl:mb-4 group-hover:bg-[#3385d9] group-hover:text-white transition-colors duration-300">
                                        <FiMail className="text-lg 2xl:text-xl" />
                                    </div>
                                    <h3 className="text-base 2xl:text-lg font-bold text-slate-900 mb-1">Email</h3>
                                    <p className="text-slate-600 font-medium text-xs 2xl:text-sm break-words">biuro@easyenergy.pl</p>
                                </a>

                                {/* Biuro */}
                                <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 2xl:p-6 transition-all duration-300 hover:shadow-xl hover:bg-white group">
                                    <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#3385d9]/10 flex items-center justify-center text-[#3385d9] mb-3 2xl:mb-4 group-hover:bg-[#3385d9] group-hover:text-white transition-colors duration-300">
                                        <FiMapPin className="text-lg 2xl:text-xl" />
                                    </div>
                                    <h3 className="text-base 2xl:text-lg font-bold text-slate-900 mb-1">Biuro</h3>
                                    <p className="text-slate-600 font-medium text-xs 2xl:text-base">ul. Przykładowa 12/34<br />00-001 Warszawa</p>
                                </div>

                                {/* Godziny */}
                                <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-4 2xl:p-6 transition-all duration-300 hover:shadow-xl hover:bg-white group">
                                    <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#3385d9]/10 flex items-center justify-center text-[#3385d9] mb-3 2xl:mb-4 group-hover:bg-[#3385d9] group-hover:text-white transition-colors duration-300">
                                        <FiClock className="text-lg 2xl:text-xl" />
                                    </div>
                                    <h3 className="text-base 2xl:text-lg font-bold text-slate-900 mb-1">Godziny</h3>
                                    <p className="text-slate-600 font-medium text-xs 2xl:text-base">Pon - Pt:<br />08:00 - 16:00</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Prawa Kolumna - Odświeżony Formularz */}
                    <div className="w-full h-full flex items-center lg:items-start 2xl:items-center">
                        <ScrollReveal delay="delay-200" className="w-full">
                            <div className="bg-white/50 backdrop-blur-2xl border border-white/90 rounded-[2.5rem] shadow-[0_20px_80px_rgba(2,6,23,0.06)] p-6 lg:p-6 2xl:p-12 w-full max-w-[600px] ml-auto">
                                <div className="mb-4 2xl:mb-8 pl-1">
                                    <h3 className="text-xl 2xl:text-2xl font-black text-slate-900 mb-1 2xl:mb-2">Wyślij wiadomość</h3>
                                    <p className="text-sm font-medium text-slate-500">Nasz zespół skontaktuje się z Tobą najszybciej jak to możliwe.</p>
                                </div>
                                <ContactForm />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Mapa w osobnym bloku na dole, na całą szerokość, by nie zgniatała designu kolumn */}
                <ScrollReveal delay="delay-300">
                    <div className="mt-16 lg:mt-24 bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/40 p-3 sm:p-4 w-full h-[400px] lg:h-[450px]">
                        <div className="w-full h-full rounded-2xl sm:rounded-[1.5rem] overflow-hidden relative shadow-inner grayscale-[20%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <MapWrapper />
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </main>
    );
};

export default ContactPage;
