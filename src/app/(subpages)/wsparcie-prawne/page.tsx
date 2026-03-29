import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdGavel, MdSecurity, MdDescription, MdAccountBalance } from 'react-icons/md';
import { FiChevronRight, FiShield, FiTarget, FiZap, FiSettings } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import ScrollReveal from '../../../components/ScrollReveal';

export const metadata = {
    title: 'Wsparcie Prawne | EasyEnergy',
    description: 'Profesjonalna obsługa prawna dedykowana sektorowi energetycznemu. Zabezpieczamy Twoje interesy w obliczu dynamicznych zmian rynkowych.',
};

export default function WsparciePrawnePage() {
    return (
        <main className="font-display text-slate-900 antialiased selection:bg-[#3385d9]/20 bg-[#f9fafb] relative min-h-screen">
            {/* Section 1: Hero */}
            <section className="relative min-h-screen flex flex-col pt-26 pb-12 overflow-hidden bg-gradient-to-b from-white to-[#f9fafb]">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col relative z-10 w-full">
                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-base font-medium mb-10">
                        <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                            Strona główna
                        </Link>
                        <FiChevronRight className="text-slate-400 text-lg" />
                        <span className="text-[#3385d9]">Wsparcie prawne</span>
                    </nav>

                    <div className="relative flex-1 flex flex-col">
                        {/* Hero Image Frame */}
                        <div className="relative flex-none rounded-[2.25rem] border border-slate-200/50 shadow-[0_40px_100px_rgba(2,6,23,0.08)] overflow-hidden h-[340px] sm:h-[400px] lg:h-[420px]">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] hover:scale-105"
                                style={{ backgroundImage: "url('/wsparcie-prawne.png')" }}
                                aria-hidden="true"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-slate-950/5" />
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />

                            <div className="relative h-full flex flex-col justify-end px-7 pb-10 sm:px-10 sm:pb-12 lg:px-16 lg:pb-16 text-white text-pretty">
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1] max-w-3xl drop-shadow-2xl">
                                    Bezpieczeństwo<br/>
                                    <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#bae6fd] text-transparent bg-clip-text pr-2">
                                        Prawne Twojej firmy
                                    </span>
                                    .
                                </h1>
                            </div>
                        </div>

                        {/* Editorial Description */}
                        <div className="pt-10 sm:pt-14 pb-12 flex flex-col items-start max-w-3xl">
                            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-medium leading-[1.6] mb-8 tracking-tight text-pretty text-balance">
                                Profesjonalna obsługa prawna dedykowana sektorowi energetycznemu. Zabezpieczamy Twoje interesy w obliczu dynamicznych zmian rynkowych.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Centered Scroll Indicator */}
                <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 group transition-all duration-500 hover:pb-2 cursor-default">
                    <span className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-[0.4em] group-hover:text-[#3385d9] transition-all duration-300 ml-[0.4em]">
                        Poznaj zakres wsparcia
                    </span>
                    <div className="relative flex items-center justify-center pt-2">
                        <div className="absolute inset-0 bg-[#3385d9]/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>
                        <IoIosArrowDown className="text-3xl sm:text-4xl lg:text-5xl text-[#3385d9]/60 group-hover:text-[#3385d9] animate-bounce transition-all duration-300 relative z-10" />
                    </div>
                </div>
            </section>

            {/* Section 2: Services Section */}
            <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-26">
                    <ScrollReveal>
                        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-tight text-slate-900">
                                Jak zapewniamy bezpieczeństwo Twojej firmie?
                            </h2>
                            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-2xl">
                                Branża energetyczna to skomplikowane regulacje i dynamiczne zmiany. Nasze wsparcie pozwala Ci skupić się na biznesie, podczas gdy my dbamy o Twoje interesy.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Services Grid - NEW LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {/* Featured Service: Doświadczona Kancelaria (Full Width) */}
                        <ScrollReveal className="lg:col-span-4" delay="delay-0">
                            <div className="group glass-card rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-[0_40px_100px_rgba(15,23,42,0.06)] hover:shadow-[0_60px_120px_rgba(15,23,42,0.1)] transition-all duration-700 relative flex flex-col justify-center min-h-[220px]">
                                {/* Background Image with mask */}
                                <div className="absolute inset-0 z-0">
                                    <Image 
                                        src="/wsparcie-prawne-card.jpg"
                                        alt="Doświadczona Kancelaria"
                                        fill
                                        className="object-cover object-right md:object-center transition-transform duration-[4s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
                                </div>

                                <div className="relative z-20 p-8 lg:p-12 max-w-2xl space-y-4">
                                    <div className="size-14 bg-[#3385d9]/10 rounded-xl flex items-center justify-center text-[#3385d9] group-hover:scale-110 transition-all duration-500">
                                        <MdGavel className="text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                                        Doświadczona Kancelaria
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        Współpracujemy na stałe z renomowaną kancelarią adwokacką posiadającą szerokie doświadczenie w zakresie obsługi podmiotów i reprezentacji w skomplikowanych sporach w branży energetycznej. Twoje sprawy trafiają w ręce sprawdzonych ekspertów.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Service 2: Kompleksowe wsparcie */}
                        <ScrollReveal delay="delay-100">
                            <div className="group glass-card rounded-[2rem] p-8 lg:p-10 border border-slate-200/50 shadow-[0_20px_50px_rgba(15,23,42,0.04)] hover:shadow-[0_40px_80px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                                <div className="size-14 bg-[#3385d9]/10 rounded-xl flex items-center justify-center text-[#3385d9] mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <FiShield className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-5 tracking-tight">Kompleksowe wsparcie</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Wsparcie prawne w zakresie wszelkich przedsięwzięć oraz w sytuacjach spornych z dotychczasowym dostawcą energii.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Service 3: Wykładnia umów */}
                        <ScrollReveal delay="delay-200">
                            <div className="group glass-card rounded-[2rem] p-8 lg:p-10 border border-slate-200/50 shadow-[0_20px_50px_rgba(15,23,42,0.04)] hover:shadow-[0_40px_80px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                                <div className="size-14 bg-[#3385d9]/10 rounded-xl flex items-center justify-center text-[#3385d9] mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <MdDescription className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-5 tracking-tight">Wykładnia umów</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Pomoc przy interpretacji zawartych umów oraz ich wypowiedzeniu w przypadku planowanej zmiany dostawcy.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Service 4: Dochodzenie roszczeń */}
                        <ScrollReveal delay="delay-300">
                            <div className="group glass-card rounded-[2rem] p-8 lg:p-10 border border-slate-200/50 shadow-[0_20px_50px_rgba(15,23,42,0.04)] hover:shadow-[0_40px_80px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                                <div className="size-14 bg-[#3385d9]/10 rounded-xl flex items-center justify-center text-[#3385d9] mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <MdAccountBalance className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-5 tracking-tight">Dochodzenie roszczeń</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Ocena zasadności i dochodzenie roszczeń odszkodowawczych w sprawach nieuprawnionego wypowiedzenia umów.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Service 5: Instalacje PV (Now as small card) */}
                        <ScrollReveal delay="delay-400">
                            <div className="group glass-card rounded-[2rem] p-8 lg:p-10 border border-slate-200/50 shadow-[0_20px_50px_rgba(15,23,42,0.04)] hover:shadow-[0_40px_80px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                                <div className="size-14 bg-[#3385d9]/10 rounded-xl flex items-center justify-center text-[#3385d9] mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <FiZap className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-5 tracking-tight">Instalacje PV</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Wsparcie w zakresie usuwania wadliwych instalacji oraz dochodzenia ewentualnych roszczeń odszkodowawczych.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Integrated Contact CTA */}
                    <ScrollReveal>
                        <div className="relative overflow-hidden bg-[#3385d9] rounded-2xl p-8 md:p-12 shadow-xl shadow-blue-900/10">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                                </svg>
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="max-w-2xl text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Masz pytania o kwestie prawne?</h2>
                                    <p className="text-blue-50 text-lg leading-relaxed">
                                        Skontaktuj się z nami, a nasi doradcy pomogą Ci zrozumieć proces i wskażą optymalną ścieżkę postępowania dla Twojej firmy.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <Link href="/kontakt" className="inline-block bg-white text-[#3385d9] hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-black/10 text-center hover:scale-105 active:scale-95">
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
