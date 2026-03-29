'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle, FiShield, FiActivity, FiTarget, FiLayers, FiInfo, FiChevronRight } from 'react-icons/fi';

const energyModels = [
    {
        id: 'spot-cap',
        goalLabel: 'Bezpieczny kompromis',
        modelName: 'Spot z Cap',
        badge: 'Rekomendowane dla większości firm',
        description: 'Łączymy zakupy po dynamicznych cenach rynkowych RDN z ustaloną z góry maksymalną granicą ceny (Cap). Zyskujesz, gdy na giełdzie jest tanio, ale jesteś chroniony przed ekstremami.',
        whyThis: 'To doskonały kompromis: korzystasz z rynkowych spadków na co dzień, zachowując "spadochron" ochronny na wypadek nagłego kryzysu giełdowego.',
        benefits: [
            'Twój budżet chroni gwarantowana maksymalna cena zakupu',
            'Gdy rynek spada, płacisz dokładnie tyle, ile wynoszą rynkowe minima'
        ],
        icon: <FiTarget className="text-3xl" />,
        image: '/spot-cap.png',
        color: 'text-[#3385d9]',
        bgColor: 'bg-[#3385d9]/10',
    },
    {
        id: 'stala-cena',
        goalLabel: 'Przewidywalne koszty',
        modelName: 'Stała cena',
        badge: 'Najwyższe bezpieczeństwo',
        description: 'Gwarancja stałej ceny przez cały okres umowy. Zabezpiecza przed wzrostem rynkowych stawek. Możemy zawierać umowy od jednego roku do kilkunastu lat (nawet do 2035 r.).',
        whyThis: 'Idealne rozwiązanie, jeśli zależy Ci na sztywnym i absolutnie przewidywalnym budżecie bez żadnych niespodzianek na fakturze w ujęciu wieloletnim.',
        benefits: [
            'Pełna przewidywalność kosztów w długim okresie',
            'Całkowita odporność na wahania i gwałtowne skoki cen giełdowych'
        ],
        icon: <FiShield className="text-3xl" />,
        image: '/stala-cena.png',
        color: 'text-[#3385d9]',
        bgColor: 'bg-[#3385d9]/10',
    },
    {
        id: 'spot',
        goalLabel: 'Niższe ceny (akceptuję zmienność)',
        modelName: 'Spot',
        badge: 'Największy potencjał oszczędności',
        description: 'W tym modelu zakupy energii rozliczane są w oparciu o bieżące notowania na Rynku Dnia Następnego. Ceny energii zmieniają się w każdej godzinie doby, każdego dnia w roku.',
        whyThis: 'Wybierz ten model, jeśli jesteś w stanie zaakceptować ryzyko giełdowe w zamian za możliwość znacznych oszczędności w tzw. "dolinach cenowych".',
        benefits: [
            'Rozliczenia bezpośrednio według bieżących wahań stawek rynkowych',
            'Możliwość dynamicznej optymalizacji zużycia (np. gdy prąd w nocy jest tani)'
        ],
        icon: <FiActivity className="text-3xl" />,
        image: '/spot.png',
        color: 'text-[#3385d9]',
        bgColor: 'bg-[#3385d9]/10',
    },
    {
        id: 'transze',
        goalLabel: 'Pełna kontrola i strategia',
        modelName: 'Transze',
        badge: 'Dla analityków i strategów',
        description: 'Sam decydujesz, kiedy i jaką partię (transzę) energii zakontraktujesz po stałej cenie na przyszłość. Niezakontraktowana część jest automatycznie rozliczana z bieżącej giełdy (Spot).',
        whyThis: 'Skierowane do firm z aktywną flotą zakupową, pragnących uśrednić cenę, świadomie łapiąc różne okazje rynkowe na przestrzeni kwartałów lub lat.',
        benefits: [
            'Pełna swoboda w kontraktowaniu ułamków wolumenu energii (na wybrane miesiące)',
            'Możliwość precyzyjnego budowania portfela energii według własnej analizy'
        ],
        icon: <FiLayers className="text-3xl" />,
        image: '/transze.png',
        color: 'text-[#3385d9]',
        bgColor: 'bg-[#3385d9]/10',
    }
];

export default function EnergyModelsAdvisor() {
    const [activeId, setActiveId] = useState(energyModels[0].id); // Start with Spot z Cap
    const activeModel = energyModels.find((m) => m.id === activeId) || energyModels[0];

    return (
        <div className="w-full relative z-10 font-display">
            {/* TABS (Goal Selector) */}
            <div className="-mx-4 sm:mx-0 px-4 sm:px-0 mb-6 lg:mb-8 relative">
                {/* Fade shadows for mobile scrolling */}
                <div className="absolute left-0 inset-y-0 w-8 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none sm:hidden" />
                <div className="absolute right-0 inset-y-0 w-8 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none sm:hidden" />
                
                <div className="flex overflow-x-auto hide-scrollbar sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-4 pt-4 pb-8 scroll-smooth snap-x snap-mandatory">
                    {energyModels.map((model) => {
                        const isActive = activeId === model.id;
                        return (
                            <button
                                key={model.id}
                                onClick={() => setActiveId(model.id)}
                                className={`snap-center shrink-0 transition-all duration-500 rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-[13px] sm:text-[15px] font-bold outline-none relative overflow-hidden cursor-pointer
                                    ${isActive 
                                        ? 'bg-[#3385d9] text-white border border-[#3385d9] shadow-[0_10px_25px_-8px_rgba(51,133,217,0.4)]' 
                                        : 'bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-500 hover:text-[#3385d9] hover:bg-blue-50/50 hover:border-[#3385d9]/30 hover:-translate-y-1 hover:shadow-[0_8px_20px_-8px_rgba(51,133,217,0.2)] active:scale-95'
                                    }
                                `}
                            >
                                <span className="relative z-10">{model.goalLabel}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* DYNAMIC CONTENT AREA */}
            <div className="relative glass-card rounded-[2.5rem] p-6 pt-8 sm:p-8 lg:p-10 overflow-hidden shadow-[0_40px_100px_rgba(15,23,42,0.08)] border border-slate-200/50">
                
                <div 
                    key={activeModel.id} 
                    className="flex flex-col lg:flex-row gap-8 lg:gap-14 xl:gap-20 items-center animate-[tab-enter_0.5s_cubic-bezier(0.2,0.8,0.2,1)_forwards]"
                >
                    {/* LEFT CONTENT */}
                    <div className="flex-1 w-full space-y-5 lg:space-y-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f7ff] border border-[#3385d9]/20 text-[#3385d9] text-xs sm:text-sm font-bold mb-4 sm:mb-5 font-mono tracking-tight shadow-sm">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3385d9] opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3385d9]"></span>
                                </span>
                                {activeModel.badge}
                            </div>
                            
                            <div className="flex items-center gap-4 sm:gap-5 mb-3 sm:mb-4">
                                <div className={`size-12 sm:size-16 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 ${activeModel.bgColor} ${activeModel.color}`}>
                                    {activeModel.icon}
                                </div>
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                                    {activeModel.modelName}
                                </h3>
                            </div>
                            
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                                {activeModel.description}
                            </p>
                        </div>

                        {/* WHY THIS MODEL (Advisor box) */}
                        <div className="bg-slate-50/50 border border-slate-200/60 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] rounded-2xl p-4 sm:p-5 relative mt-4 transition-all duration-300 hover:bg-slate-50">
                            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#3385d9] uppercase tracking-widest mb-2 sm:mb-3">
                                <FiInfo className="text-sm" /> Dlaczego ten wybór?
                            </div>
                            <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-[15px] text-pretty">
                                {activeModel.whyThis}
                            </p>
                        </div>

                        {/* BENEFITS LIST */}
                        <ul className="space-y-3 pt-1 sm:pt-2">
                            {activeModel.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3.5">
                                    <FiCheckCircle className="text-[#3385d9] text-[22px] shrink-0 mt-[2px]" />
                                    <span className="text-sm sm:text-base font-medium text-slate-700 leading-snug">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="pt-3 sm:pt-4">
                            <Link href="/kontakt" className="group inline-flex w-full sm:w-auto items-center justify-center bg-[#3385d9] text-white px-8 py-3.5 sm:py-4 rounded-xl font-bold text-[15px] sm:text-base hover:bg-[#286bb5] hover:shadow-[0_15px_30px_rgba(51,133,217,0.3)] hover:-translate-y-1 transition-all duration-300">
                                Wybierz {activeModel.modelName}
                                <FiChevronRight className="ml-2 text-xl group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 w-full lg:w-[48%] relative">
                        {/* Decorative background blob for the image */}
                        <div className="absolute inset-x-8 -inset-y-8 bg-gradient-to-tr from-[#3385d9]/15 to-[#3385d9]/5 rounded-full blur-3xl -z-10"></div>
                        
                        <div className="w-full h-[320px] sm:h-[400px] lg:h-[460px] overflow-hidden rounded-[2rem] relative shadow-2xl group ring-1 ring-slate-900/5">
                            <div className="absolute inset-0 z-10 border-[1px] border-white/20 rounded-[2rem] pointer-events-none"></div>
                            <Image
                                src={activeModel.image}
                                alt={activeModel.modelName}
                                fill
                                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.02]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority={true}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
