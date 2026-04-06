import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MdGavel, MdDescription, MdAccountBalance } from 'react-icons/md';
import { FiChevronRight, FiShield, FiZap } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import ScrollReveal from '../../../components/ScrollReveal';

export const metadata: Metadata = {
    title: 'Wsparcie Prawne',
    description: 'Profesjonalna obsługa prawna dedykowana sektorowi energetycznemu. Zabezpieczamy Twoje interesy w obliczu dynamicznych zmian rynkowych i skomplikowanych umów.',
    alternates: {
        canonical: "/wsparcie-prawne",
    },
    openGraph: {
        title: 'Wsparcie Prawne Prawa Energetycznego | EasyEnergy',
        description: 'Reprezentujemy biznes w negocjacjach umów energetycznych i odszkodowaniach. Pozwól nam zabezpieczyć przyszłość Twojej firmy.',
        url: 'https://easyenergy.pl/wsparcie-prawne',
    }
};

export default function WsparciePrawnePage() {
    return (
        <main className="font-display text-slate-900 antialiased selection:bg-[#3385d9]/20 bg-[#f9fafb] relative min-h-screen">
            {/* Section 1: Hero */}
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
                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-base font-medium mb-5 lg:mb-6 animate-in-up">
                        <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                            Strona główna
                        </Link>
                        <FiChevronRight className="text-slate-400 text-lg" />
                        <span className="text-[#3385d9]">Wsparcie prawne</span>
                    </nav>

                    <div className="relative flex flex-col">
                        {/* Hero Image Frame */}
                        <div className="relative flex-none rounded-[2.25rem] border border-slate-200/50 shadow-[0_40px_100px_rgba(2,6,23,0.08)] overflow-hidden h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[380px]">
                            <Image
                                src="/wsparcie-prawne.png"
                                alt="Wsparcie prawne EasyEnergy"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 1280px) 100vw, 1280px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-slate-950/5 z-10" />
                            
                            <div className="relative z-20 h-full flex flex-col justify-end px-7 pb-8 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12 text-white text-pretty animate-in-up delay-200">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-[1] max-w-3xl drop-shadow-2xl">
                                    Bezpieczeństwo<br />
                                    <span className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-transparent bg-clip-text pr-1 sm:pr-2">
                                        Prawne Twojej firmy
                                    </span>
                                    .
                                </h1>
                            </div>
                        </div>
                        {/* Editorial Description */}
                        <div className="pt-6 sm:pt-8 lg:pt-10 pb-8 flex flex-col items-center sm:items-start max-w-3xl animate-in-up delay-300">
                            <p className="text-center sm:text-left text-base sm:text-lg xl:text-xl text-slate-600 font-medium leading-[1.6] mb-4 tracking-tight text-pretty text-balance">
                                Profesjonalna obsługa prawna dedykowana sektorowi energetycznemu. Zabezpieczamy Twoje interesy w obliczu dynamicznych zmian rynkowych.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Centered Scroll Indicator - In Flow to prevent overlap */}
                <div className="flex-none flex flex-col items-center gap-3 z-20 group transition-all duration-500 pt-4 pb-8 cursor-default">
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
                    <ScrollReveal className="mb-12 lg:mb-16">
                        <div className="flex flex-col items-center text-center mx-auto max-w-3xl">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6 leading-tight text-slate-900">
                                Jak zapewniamy bezpieczeństwo Twojej firmie?
                            </h2>
                            <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-2xl">
                                Branża energetyczna to skomplikowane regulacje i dynamiczne zmiany. Nasze wsparcie pozwala Ci skupić się na biznesie, podczas gdy my dbamy o Twoje interesy.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Services Grid - REFACTORED MOBILE LAYOUT */}
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {/* Featured Service: Doświadczona Kancelaria (Full Width) */}
                        <ScrollReveal className="col-span-2 md:col-span-2 lg:col-span-4" delay="delay-0">
                            {/* Shadow Wrapper */}
                            <div className="group relative rounded-[2.5rem] shadow-[0_60px_120px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_80px_-10px_rgba(51,133,217,0.3)] transition-all duration-700 isolate">
                                {/* Content Container - Using Clip Path for perfect corners */}
                                <div 
                                    className="relative flex flex-col justify-center min-h-[220px]"
                                    style={{
                                        clipPath: 'inset(0 round 2.5rem)',
                                        WebkitMaskImage: '-webkit-radial-gradient(white, black)'
                                    }}
                                >
                                    {/* Background Image with mask */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="/wsparcie-prawne-card.jpg"
                                            alt="Doświadczona Kancelaria"
                                            fill
                                            className="object-cover object-right md:object-center"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
                                    </div>

                                    <div className="relative z-20 p-8 lg:p-10 max-w-2xl space-y-4">
                                        <div className="hidden sm:flex size-14 bg-[#3385d9]/10 rounded-2xl items-center justify-center text-[#3385d9] group-hover:scale-110 transition-all duration-500">
                                            <MdGavel className="text-2xl" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-br from-slate-800 to-[#3385d9] bg-clip-text text-transparent">
                                            Doświadczona Kancelaria
                                        </h3>
                                        <p className="text-slate-600 sm:text-lg font-medium leading-relaxed">
                                            Współpracujemy na stałe z renomowaną kancelarią adwokacką posiadającą szerokie doświadczenie w zakresie obsługi podmiotów i reprezentacji w skomplikowanych sporach w branży energetycznej. Twoje sprawy trafiają w ręce sprawdzonych ekspertów.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Service 2: Kompleksowe wsparcie */}
                        <ScrollReveal delay="delay-100">
                            <div className="group relative overflow-hidden bg-white/80 rounded-[2rem] p-5 sm:p-8 border border-slate-200/50 sm:shadow-[0_60px_120px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_80px_-10px_rgba(51,133,217,0.3)] hover:-translate-y-1 transition-all duration-500 h-full">
                                {/* Watermark Icon - Visible on all sizes, larger on desktop */}
                                <FiShield className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:-right-10 text-8xl sm:text-9xl lg:text-[11rem] text-[#3385d9]/[0.05] pointer-events-none" />
                                
                                <div className="hidden sm:flex size-14 bg-[#3385d9]/10 rounded-2xl items-center justify-center text-[#3385d9] mb-8 group-hover:scale-110 transition-all duration-500">
                                    <FiShield className="text-2xl" />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-black mb-2 sm:mb-5 tracking-tight leading-tight bg-gradient-to-br from-slate-900 to-[#3385d9] bg-clip-text text-transparent">Kompleksowe wsparcie</h3>
                                <p className="text-[15px] sm:text-lg text-slate-600 leading-relaxed font-medium">
                                    Wsparcie prawne w zakresie wszelkich przedsięwzięć oraz w sytuacjach spornych.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Service 3: Wykładnia umów */}
                        <ScrollReveal delay="delay-200">
                            <div className="group relative overflow-hidden bg-white/80 rounded-[2rem] p-5 sm:p-8 border border-slate-200/50 sm:shadow-[0_60px_120px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_80px_-10px_rgba(51,133,217,0.3)] hover:-translate-y-1 transition-all duration-500 h-full">
                                {/* Watermark Icon - Visible on all sizes, larger on desktop */}
                                <MdDescription className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:-right-10 text-8xl sm:text-9xl lg:text-[11rem] text-[#3385d9]/[0.05] pointer-events-none" />

                                <div className="hidden sm:flex size-14 bg-[#3385d9]/10 rounded-2xl items-center justify-center text-[#3385d9] mb-8 group-hover:scale-110 transition-all duration-500">
                                    <MdDescription className="text-2xl" />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-black mb-2 sm:mb-5 tracking-tight leading-tight bg-gradient-to-br from-slate-900 to-[#3385d9] bg-clip-text text-transparent">Wykładnia umów</h3>
                                <p className="text-[15px] sm:text-lg text-slate-600 leading-relaxed font-medium">
                                    Pomoc przy interpretacji zawartych umów oraz ich wypowiedzeniu.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Service 4: Dochodzenie roszczeń */}
                        <ScrollReveal delay="delay-300">
                            <div className="group relative overflow-hidden bg-white/80 rounded-[2rem] p-5 sm:p-8 border border-slate-200/50 sm:shadow-[0_60px_120px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_80px_-10px_rgba(51,133,217,0.3)] hover:-translate-y-1 transition-all duration-500 h-full">
                                {/* Watermark Icon - Visible on all sizes, larger on desktop */}
                                <MdAccountBalance className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:-right-10 text-8xl sm:text-9xl lg:text-[11rem] text-[#3385d9]/[0.05] pointer-events-none" />

                                <div className="hidden sm:flex size-14 bg-[#3385d9]/10 rounded-2xl items-center justify-center text-[#3385d9] mb-8 group-hover:scale-110 transition-all duration-500">
                                    <MdAccountBalance className="text-2xl" />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-black mb-2 sm:mb-5 tracking-tight leading-tight bg-gradient-to-br from-slate-900 to-[#3385d9] bg-clip-text text-transparent">Dochodzenie roszczeń</h3>
                                <p className="text-[15px] sm:text-lg text-slate-600 leading-relaxed font-medium">
                                    Ocena zasadności i dochodzenie roszczeń odszkodowawczych.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Service 5: Instalacje PV (Now as small card) */}
                        <ScrollReveal delay="delay-400">
                            <div className="group relative overflow-hidden bg-white/80 rounded-[2rem] p-5 sm:p-8 border border-slate-200/50 sm:shadow-[0_60px_120px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_80px_-10px_rgba(51,133,217,0.3)] hover:-translate-y-1 transition-all duration-500 h-full">
                                {/* Watermark Icon - Visible on all sizes, larger on desktop */}
                                <FiZap className="absolute -bottom-5 -right-5 sm:-bottom-10 sm:-right-10 text-8xl sm:text-9xl lg:text-[11rem] text-[#3385d9]/[0.05] pointer-events-none" />

                                <div className="hidden sm:flex size-14 bg-[#3385d9]/10 rounded-2xl items-center justify-center text-[#3385d9] mb-8 group-hover:scale-110 transition-all duration-500">
                                    <FiZap className="text-2xl" />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-black mb-2 sm:mb-5 tracking-tight leading-tight bg-gradient-to-br from-slate-900 to-[#3385d9] bg-clip-text text-transparent">Instalacje PV</h3>
                                <p className="text-[15px] sm:text-lg text-slate-600 leading-relaxed font-medium">
                                    Wsparcie w zakresie usuwania wad oraz dochodzenia roszczeń.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Integrated Contact CTA */}
                    <ScrollReveal className="mt-8 lg:mt-14">
                        <div className="relative overflow-hidden bg-[#3385d9] rounded-2xl p-6 md:p-12 shadow-xl shadow-blue-900/10">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                                </svg>
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
                                <div className="max-w-2xl text-left">
                                    <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight">Masz pytania o kwestie prawne?</h2>
                                    <p className="text-blue-50 text-[15px] md:text-lg leading-relaxed">
                                        Skontaktuj się z nami, a nasi doradcy pomogą Ci zrozumieć proces i wskażą optymalną ścieżkę postępowania dla Twojej firmy.
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
