import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdGavel, MdSecurity, MdDescription, MdAccountBalance, MdArrowForward } from 'react-icons/md';
import { FiChevronRight } from 'react-icons/fi';

export const metadata = {
    title: 'Wsparcie Prawne | EasyEnergy',
    description: 'Profesjonalna obsługa prawna dedykowana sektorowi energetycznemu. Zabezpieczamy Twoje interesy w obliczu dynamicznych zmian rynkowych.',
};

export default function WsparciePrawnePage() {
    return (
        <main className="font-display text-slate-900 antialiased selection:bg-[#3385d9]/20 bg-slate-50 relative min-h-screen">
            {/* Atmospheric Gradients */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#3385d9]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s' }}></div>
                <div className="absolute bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-[#3385d9]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-11 z-10 max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-base font-medium mb-12">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                        Strona główna
                    </Link>
                    <FiChevronRight className="text-slate-400 text-lg" />
                    <span className="text-[#3385d9]">Wsparcie prawne</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.0] md:leading-[0.9] mb-8 tracking-tighter">
                            Wsparcie<br/>
                            <span className="bg-gradient-to-r from-[#3385d9] via-[#4a90e2] to-[#5ba0e6] text-transparent bg-clip-text pr-2">Prawne</span>.
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-light max-w-lg">
                            Profesjonalna obsługa prawna dedykowana sektorowi energetycznemu. Zabezpieczamy Twoje interesy w obliczu dynamicznych zmian rynkowych.
                        </p>
                    </div>
                    <div className="relative aspect-[16/9] bg-white rounded-3xl overflow-hidden shadow-2xl shadow-[#3385d9]/10">
                        <Image 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUFVWO-MlRLxNpKW5vOnBDSDaLZM8FWJZtmUWYpHTPBX8KFJSfcq_u_CbAhWTpmCzumMWkrkJsQEzpMfyMViBRUReUZWdqrBe5zwQRyN8W1hh80CjcTkztSBeTZKZR66aXE2Hn5yg7XCydJVkN-eH3VreMnOS0phs1g5l2Ts7QbFZYTuy7WbvNPQxL3Fr05aj0SsyYLAfNHHZtjbAzeMxXUYcGWPsPSKqElAF1ljjSXpTPFXVm0gceiF7rDypbPkt1ZQWO4M3dfRY" 
                            alt="Konsultacje prawne EasyEnergy" 
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Content Grid (Bento/Staggered Layout) */}
            <section className="relative pb-32 px-4 sm:px-6 lg:px-11 z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Segment 1: Doświadczona Kancelaria (Wide) */}
                    <div className="md:col-span-8 group">
                        <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/60 hover:border-white/80 hover:shadow-xl hover:shadow-[#3385d9]/10 hover:-translate-y-1 p-10 md:p-14 rounded-[40px] h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:bg-[#3385d9] group-hover:text-white group-hover:border-[#3385d9] transition-colors">01</div>
                                <MdGavel className="text-slate-300 text-4xl" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tighter">Doświadczona Kancelaria</h3>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                                    Współpracujemy na stałe z renomowaną kancelarią adwokacką posiadającą szerokie doświadczenie w zakresie obsługi podmiotów i reprezentacji w skomplikowanych sporach w branży energetycznej. Twoje sprawy trafiają w ręce ekspertów.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Segment 2: Kompleksowe wsparcie (Narrow) */}
                    <div className="md:col-span-4 group">
                        <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/60 hover:border-white/80 hover:shadow-xl hover:shadow-[#3385d9]/10 hover:-translate-y-1 p-10 rounded-[40px] h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:bg-[#3385d9] group-hover:text-white group-hover:border-[#3385d9] transition-colors">02</div>
                                <MdSecurity className="text-slate-300 text-4xl" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tighter">Kompleksowe wsparcie</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Możemy zapewnić wsparcie prawne w zakresie wszelkich przedsięwzięć z naszym udziałem, a także na wypadek sporu z dotychczasowym dostawcą energii lub paliwa gazowego.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Segment 3: Wykładnia umów (Narrow) */}
                    <div className="md:col-span-4 group">
                        <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/60 hover:border-white/80 hover:shadow-xl hover:shadow-[#3385d9]/10 hover:-translate-y-1 p-10 rounded-[40px] h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:bg-[#3385d9] group-hover:text-white group-hover:border-[#3385d9] transition-colors">03</div>
                                <MdDescription className="text-slate-300 text-4xl" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tighter">Wykładnia umów</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Pomożemy przy wykładni już zawartych umów na dostawę energii lub paliwa gazowego oraz możliwości ich wypowiedzenia lub rozwiązania – na wypadek zmiany dostawcy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Segment 4: Dochodzenie roszczeń (Wide) */}
                    <div className="md:col-span-8 group">
                        <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/60 hover:border-white/80 hover:shadow-xl hover:shadow-[#3385d9]/10 hover:-translate-y-1 p-10 md:p-14 rounded-[40px] h-full flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:bg-[#3385d9] group-hover:text-white group-hover:border-[#3385d9] transition-colors">04</div>
                                <MdAccountBalance className="text-slate-300 text-4xl" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tighter">Dochodzenie roszczeń</h3>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                                    W przypadku nieuprawnionego wypowiedzenia umowy na dostawę energii lub gazu przez spółkę obrotu zapewniamy możliwość oceny zasadności i dochodzenia roszczeń odszkodowawczych przed odpowiednimi organami.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Segment 5: Instalacje PV (Full Width) */}
                    <div className="md:col-span-12 group">
                        <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 overflow-hidden relative">
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <Image 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUEVLYTGF0CTe3_erd1G_quFBGU07_IorAuczmdUnngS3WuXcTxA3k7aEzJCjgKgqT5YV8ZceMuPGwpFXf13ikX35TAO4nF_ZOuxAZrlhTZvSiArxSR-g-wCOmfXge3XbWS7nudjgIuzN0hYNYewdln4KXeEFqH1s_sr3gT1GepAWwpKbR4uqRpl9lHr5SIK2WKP5oG9otixVskm_HUZ1I3ZFfNPhczCdkBioW9MmRICCsKQ2cjnSuk40_ASI0RY-2mMX2p2r4gVE"
                                    alt="Solar Background"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative z-10 md:w-1/2">
                                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:border-[#3385d9] group-hover:bg-[#3385d9] group-hover:text-white mb-8 transition-colors">05</div>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter">Instalacje PV</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Możemy pomóc na wypadek wadliwie wykonanej instalacji fotowoltaicznej zarówno w zakresie procesu usuwania jej wad, jak i dochodzenia ewentualnych roszczeń odszkodowawczych. Chronimy Twoje inwestycje w zieloną energię.
                                </p>
                            </div>
                            <div className="relative z-10 md:w-1/2 flex justify-center w-full">
                                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
                                    <Image 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUEVLYTGF0CTe3_erd1G_quFBGU07_IorAuczmdUnngS3WuXcTxA3k7aEzJCjgKgqT5YV8ZceMuPGwpFXf13ikX35TAO4nF_ZOuxAZrlhTZvSiArxSR-g-wCOmfXge3XbWS7nudjgIuzN0hYNYewdln4KXeEFqH1s_sr3gT1GepAWwpKbR4uqRpl9lHr5SIK2WKP5oG9otixVskm_HUZ1I3ZFfNPhczCdkBioW9MmRICCsKQ2cjnSuk40_ASI0RY-2mMX2p2r4gVE"
                                        alt="Instalacje OZE inspekcja"
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
