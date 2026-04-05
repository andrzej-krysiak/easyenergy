"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    FiMapPin, 
    FiClock, 
    FiPhone, 
    FiMail, 
    FiChevronRight 
} from 'react-icons/fi';
import ContactForm from '../../../components/ContactForm';
import ScrollReveal from '../../../components/ScrollReveal';
import MapWrapper from '../../../components/MapWrapper';

export default function ContactPage() {
    return (
        <main className="relative font-display text-slate-900 antialiased selection:bg-[#3385d9]/20 bg-[#f9fafb]">
            
            {/* Section 1: Hero & Vision */}
            <section className="relative flex flex-col pt-20 lg:pt-24 overflow-hidden bg-white rounded-b-[2.5rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] shadow-[0_15px_25px_-12px_rgba(0,0,0,0.08)] z-10">
                
                {/* Background Energy Paths - Now behind the card */}
                <div className="absolute inset-0 opacity-[0.12] pointer-events-none z-0">
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
                    {/* Breadcrumbs - Restored */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-base font-medium mb-5 lg:mb-6 animate-in-up">
                        <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                            Strona główna
                        </Link>
                        <FiChevronRight className="text-slate-400 text-lg" />
                        <span className="text-[#3385d9]">Kontakt</span>
                    </nav>

                    <div className="relative flex flex-col">
                        {/* Hero Image Frame */}
                        <div className="relative flex-none rounded-[2.25rem] border border-slate-200/50 shadow-[0_40px_100px_rgba(2,6,23,0.08)] overflow-hidden h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[380px]">
                            <Image
                                src="/contact-hero.png"
                                alt="Kontakt EasyEnergy"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 1280px) 100vw, 1280px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-slate-950/5 z-10" />
                            
                            <div className="relative z-20 h-full flex flex-col justify-end px-7 pb-8 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12 text-white animate-in-up delay-200">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-[1] max-w-3xl drop-shadow-2xl">
                                    Bądźmy w <br />
                                    <span className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-transparent bg-clip-text pr-1 sm:pr-2">
                                        kontakcie
                                    </span>
                                    .
                                </h1>
                            </div>
                        </div>
                        {/* Editorial Description */}
                        <div className="pt-6 sm:pt-8 lg:pt-10 pb-8 flex flex-col items-center sm:items-start max-w-3xl animate-in-up delay-300">
                            <p className="text-center sm:text-left text-base sm:text-lg xl:text-xl text-slate-600 font-medium leading-[1.6] mb-4 tracking-tight text-pretty text-balance">
                                Nasz zespół ekspertów jest gotowy do wsparcia Twojej firmy. Skontaktuj się z nami, aby porozmawiać o optymalizacji kosztów energii w Twoim przedsiębiorstwie.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Contact Details & Form */}
            <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 bg-[#f9fafb] overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row gap-12 items-stretch">
                        
                        {/* Left Column: Info Tiles + Map */}
                        <div className="w-full lg:w-5/12 flex flex-col">
                            <ScrollReveal className="flex flex-col gap-5 h-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {/* Telefon */}
                                    <a href="tel:+48664144448" className="group bg-white border border-slate-100 rounded-[1.25rem] p-4 lg:p-5 transition-all duration-300 hover:shadow-xl hover:border-[#3385d9]/30 hover:-translate-y-1">
                                        <div className="size-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#3385d9] mb-3 group-hover:bg-[#3385d9] group-hover:text-white transition-all duration-300">
                                            <FiPhone className="text-lg" />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 mb-0.5">Infolinia</h3>
                                        <p className="text-[13.5px] text-slate-600 font-medium">+48 664 144 448</p>
                                    </a>

                                    {/* Email */}
                                    <a href="mailto:biuro@easyenergy.pl" className="group bg-white border border-slate-100 rounded-[1.25rem] p-4 lg:p-5 transition-all duration-300 hover:shadow-xl hover:border-[#3385d9]/30 hover:-translate-y-1">
                                        <div className="size-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#3385d9] mb-3 group-hover:bg-[#3385d9] group-hover:text-white transition-all duration-300">
                                            <FiMail className="text-lg" />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 mb-0.5">Adres e-mail</h3>
                                        <p className="text-[13.5px] text-slate-600 font-medium truncate">biuro@easyenergy.pl</p>
                                    </a>

                                    {/* Adres */}
                                    <div className="group bg-white border border-slate-100 rounded-[1.25rem] p-4 lg:p-5 transition-all duration-300 hover:shadow-xl hover:border-[#3385d9]/30 hover:-translate-y-1">
                                        <div className="size-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#3385d9] mb-3 group-hover:bg-[#3385d9] group-hover:text-white transition-all duration-300">
                                            <FiMapPin className="text-lg" />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 mb-0.5">Nasz adres</h3>
                                        <p className="text-[13.5px] text-slate-600 font-medium leading-relaxed">ul. Żeligowskiego 32/34<br />90-643 Łódź</p>
                                    </div>

                                    {/* Godziny */}
                                    <div className="group bg-white border border-slate-100 rounded-[1.25rem] p-4 lg:p-5 transition-all duration-300 hover:shadow-xl hover:border-[#3385d9]/30 hover:-translate-y-1">
                                        <div className="size-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#3385d9] mb-3 group-hover:bg-[#3385d9] group-hover:text-white transition-all duration-300">
                                            <FiClock className="text-lg" />
                                        </div>
                                        <h3 className="text-base font-bold text-slate-900 mb-0.5">Dostępność</h3>
                                        <p className="text-[13.5px] text-slate-600 font-medium leading-tight">Pon - Pt: 08:00 - 16:00<br />Sob: nieczynne</p>
                                    </div>
                                </div>

                                {/* Map Integrated below Info Tiles */}
                                <div className="flex-grow flex flex-col min-h-[250px] lg:min-h-[220px]">
                                    <div className="flex-grow relative w-full rounded-xl border border-slate-200/50 shadow-[0_15px_40px_rgba(2,6,23,0.04)] overflow-hidden group">
                                        <div className="absolute inset-0 grayscale-[15%] opacity-90 transition-all duration-1000 hover:grayscale-0 hover:opacity-100">
                                            <MapWrapper />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Form Card - Right Column */}
                        <div className="w-full lg:w-7/12">
                            <ScrollReveal delay="delay-100" className="h-full">
                                <div className="bg-white border border-slate-100 rounded-[1.5rem] lg:rounded-[2rem] shadow-[0_30px_80px_rgba(2,6,23,0.08)] p-6 sm:p-8 lg:p-9 h-full flex flex-col">
                                    <div className="mb-6 shrink-0">
                                        <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1.5">Wyślij wiadomość</h2>
                                        <p className="text-sm text-slate-500 font-medium">Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
                                    </div>
                                    <div className="flex-grow">
                                        <ContactForm />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
