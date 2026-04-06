"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
    FiZap, 
    FiDroplet, 
    FiSun, 
    FiTrendingUp, 
    FiCheckCircle, 
    FiLink, 
    FiSettings, 
    FiBattery, 
    FiWind, 
    FiFileText, 
    FiShield, 
    FiBriefcase,
    FiPlus,
    FiArrowRight
} from "react-icons/fi";
import ScrollReveal from '@/src/components/ScrollReveal';

const services = [
    {
        category: "Media i Energetyka",
        items: [
            { 
                title: "Energia elektryczna", 
                short: "Wspieramy w wyborze sprzedawcy energii",
                desc: "Kompleksowy audyt i optymalizacja profilu zużycia, pozwalająca na dopasowanie optymalnej taryfy oraz zmianę sprzedawcy na warunkach rynkowych niemożliwych do uzyskania w standardowej ofercie.", 
                icon: FiZap,
                href: "/energia-elektryczna"
            },
            { 
                title: "Paliwo gazowe", 
                short: "Pomagamy w wyborze sprzedawcy gazu",
                desc: "Profesjonalne doradztwo w zakresie kontraktacji gazu ziemnego dla przedsiębiorstw, obejmujące analizę rynku hurtowego oraz zabezpieczenie stałej ceny w długim horyzoncie czasowym.", 
                icon: FiDroplet,
                href: "/paliwo-gazowe"
            },
            { 
                title: "Kontrakty cPPA", 
                short: "Łączymy wytwórców energii z odbiorcami",
                desc: "Bezpośrednie łączenie dużych odbiorców energii z producentami zielonej energii (OZE), zapewniające stabilne, wieloletnie koszty zakupu przy jednoczesnej realizacji celów ESG.", 
                icon: FiLink,
                href: "/kontakt"
            },
            { 
                title: "Białe certyfikaty", 
                short: "Pozyskujemy świadectwa efektywności",
                desc: "Pełne wsparcie w procesie pozyskiwania świadectw efektywności energetycznej za zrealizowane modernizacje, co przekłada się na realny zastrzyk gotówki dla Twojego przedsiębiorstwa.", 
                icon: FiCheckCircle,
                href: "/kontakt"
            }
        ]
    },
    {
        category: "Efektywność i OZE",
        items: [
            { 
                title: "Fotowoltaika", 
                short: "Budujemy instalacje fotowoltaiczne",
                desc: "Projektowanie i budowa instalacji fotowoltaicznych 'pod klucz' dla biznesu, wykorzystujących najwyższej klasy komponenty oraz autorskie systemy montażowe dla maksymalnej wydajności.", 
                icon: FiSun,
                href: "/kontakt"
            },
            { 
                title: "Odkup energii", 
                short: "Odkupujemy energię bezpośrednio",
                desc: "Elastyczne modele odkupu nadwyżek energii elektrycznej z dynamicznym rozliczeniem, pozwalające na maksymalizację przychodów z posiadanych przez Ciebie źródeł wytwórczych.", 
                icon: FiTrendingUp,
                href: "/kontakt"
            },
            { 
                title: "Gwarancje pochodzenia", 
                short: "Pozyskujemy od wytwórców",
                desc: "Pełna obsługa procesu pozyskiwania i umarzania gwarancji pochodzenia energii, potwierdzająca ekologiczny profil energetyczny Twojej firmy zgodnie z wymogami prawnymi.", 
                icon: FiShield,
                href: "/kontakt"
            },
            { 
                title: "Pompy ciepła", 
                short: "Instalujemy pompy ciepła",
                desc: "Wdrażanie nowoczesnych systemów ogrzewania i chłodzenia, które integrują się bezpośrednio z istniejącą infrastrukturą budynku w celu drastycznej redukcji bieżących kosztów eksploatacji.", 
                icon: FiWind,
                href: "/kontakt"
            }
        ]
    },
    {
        category: "Infrastruktura i Bezpieczeństwo",
        items: [
            { 
                title: "Trafostacje", 
                short: "Budujemy stacje transformatorowe",
                desc: "Kompleksowa realizacja, modernizacja oraz profesjonalny serwis stacji transformatorowych, zapewniających stabilne dostawy mocy oraz bezpieczeństwo obiektów przemysłowych.", 
                icon: FiSettings,
                href: "/kontakt"
            },
            { 
                title: "Elektromobilność", 
                short: "Stacje ładowania pojazdów",
                desc: "Projektowanie i montaż inteligentnych stacji ładowania pojazdów elektrycznych (EV) dla firm i deweloperów, w pełni zintegrowanych z systemami zarządzania flotą i bilingiem.", 
                icon: FiBattery,
                href: "/kontakt"
            },
            { 
                title: "Ubezpieczenia", 
                short: "Ubezpieczamy instalacje OZE",
                desc: "Dedykowane pakiety ubezpieczeń dla infrastruktury energetycznej, chroniące przed skutkami zjawisk atmosferycznych oraz nieplanowanymi przerwami w pracy instalacji technicznych.", 
                icon: FiFileText,
                href: "/kontakt"
            },
            { 
                title: "Wsparcie prawne", 
                short: "Kancelaria prawa energetycznego",
                desc: "Specjalistyczne doradztwo kancelarii w pełnym zakresie prawa energetycznego, obejmujące reprezentację przed URE oraz wsparcie w sporach z dystrybutorami i sprzedawcami.", 
                icon: FiBriefcase,
                href: "/wsparcie-prawne"
            }
        ]
    }
];

const OfferSection = () => {
    const [openCard, setOpenCard] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Zamyka mobilną kartę w momencie kliknięcia poza nią
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            const target = event.target as HTMLElement;
            // Zamykamy jeśli kliknięto w cokolwiek co NIE jest kartą
            if (!target.closest('[data-card="true"]')) {
                setOpenCard(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const handleCardClick = (e: React.MouseEvent, id: string) => {
        // Obchodzimy linki - pozwalamy im działać natywnie i przenosić użytkownika
        if ((e.target as HTMLElement).closest('a')) return;
        
        // Zabezpieczenie na desktop (tam używamy czystego hovera w css, a ignorujemy logikę JS)
        if (window.innerWidth >= 1024) return;

        if (openCard === id) {
            setOpenCard(null);
        } else {
            setOpenCard(id);
        }
    };

    return (
        <section ref={containerRef} className="bg-white relative flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20 w-full overflow-hidden rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] shadow-[0_-15px_40px_-20px_rgba(0,0,0,0.1)] z-30">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
                <ScrollReveal>
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6 lg:mb-8 mt-4 sm:mt-0 text-slate-900 leading-tight">
                        W czym możemy Ci pomóc?
                    </h3>
                    <p className="text-base sm:text-lg xl:text-xl text-slate-600 font-medium leading-relaxed">
                        Nasze wsparcie obejmuje każdy etap zarządzania energią – od optymalizacji kosztów bieżących, po zaawansowane wdrożenia infrastrukturalne i opiekę prawną.
                    </p>
                </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {services.map((category, catIdx) => (
                        <ScrollReveal key={catIdx} delay={catIdx === 0 ? "delay-0" : catIdx === 1 ? "lg:delay-150" : "lg:delay-300"}>
                            <div className="flex flex-col gap-8 max-w-lg lg:max-w-none mx-auto w-full">
                            <div className="flex items-center gap-4">
                                <div className="h-px bg-slate-200 flex-grow" />
                                <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest whitespace-nowrap">
                                    {category.category}
                                </h4>
                                <div className="h-px bg-slate-200 flex-grow" />
                            </div>
                            
                            <div className="flex flex-col gap-3">
                                {category.items.map((item, itemIdx) => {
                                    const customId = `${catIdx}-${itemIdx}`;
                                    const isOpen = openCard === customId;
                                    
                                    return (
                                        <div 
                                            key={itemIdx}
                                            data-card="true"
                                            onClick={(e) => handleCardClick(e, customId)}
                                            data-open={isOpen}
                                            className="group relative flex flex-col p-5 bg-slate-50/50 data-[open=true]:bg-white lg:hover:bg-white border border-slate-100 data-[open=true]:border-[#3385d9]/30 lg:hover:border-[#3385d9]/30 rounded-2xl lg:transition-all lg:duration-500 shadow-sm data-[open=true]:shadow-[0_20px_50px_-10px_rgba(51,133,217,0.15)] lg:hover:shadow-[0_20px_50px_-10px_rgba(51,133,217,0.15)] data-[open=true]:-translate-y-1 lg:hover:-translate-y-1 overflow-hidden cursor-pointer lg:cursor-default transform-gpu"
                                        >
                                            <div className="flex items-center gap-4 relative z-10 lg:transition-transform lg:duration-500 transform-gpu group-data-[open=true]:-translate-y-0.5 lg:group-hover:-translate-y-0.5">
                                                <div className="size-10 rounded-xl bg-white text-[#3385d9] flex items-center justify-center shadow-sm group-data-[open=true]:bg-[#3385d9] lg:group-hover:bg-[#3385d9] group-data-[open=true]:text-white lg:group-hover:text-white transition-all duration-500 shrink-0 transform-gpu">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <h5 className="font-bold text-slate-900 group-data-[open=true]:text-[#3385d9] lg:group-hover:text-[#3385d9] transition-colors duration-500">
                                                        {item.title}
                                                    </h5>
                                                    {/* Desktop: Animowany zanik */}
                                                    <div className="hidden lg:grid lg:grid-rows-[1fr] lg:group-hover:grid-rows-[0fr] lg:transition-all lg:duration-300 transform-gpu lg:will-change-[grid-template-rows]">
                                                        <p className="text-xs text-slate-400 font-medium overflow-hidden">
                                                            {item.short}
                                                        </p>
                                                    </div>
                                                    {/* Mobile: Szybki fade (ukrywamy gdy karta otwarta) */}
                                                    <p className="block lg:hidden text-xs text-slate-400 font-medium opacity-100 transition-opacity duration-200 group-data-[open=true]:hidden group-data-[open=true]:opacity-0">
                                                        {item.short}
                                                    </p>
                                                </div>
                                                <div className="ml-auto opacity-40 group-data-[open=true]:opacity-100 lg:group-hover:opacity-100 transition-opacity">
                                                    <FiPlus className="w-4 h-4 text-[#3385d9] transition-transform duration-500 transform-gpu group-data-[open=true]:rotate-45 lg:group-hover:rotate-45" />
                                                </div>
                                            </div>
                                            
                                            {/* Desktop Kontener expandera - Grid Animation */}
                                            <div className="hidden lg:grid lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:transition-all lg:duration-500 lg:ease-in-out transform-gpu lg:will-change-[grid-template-rows,opacity]">
                                                <div className="overflow-hidden opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                                                    <p className="text-sm text-slate-600 pt-4 leading-relaxed font-medium">
                                                        {item.desc}
                                                    </p>
                                                    <div className="pt-4 flex items-center relative z-20">
                                                        <Link 
                                                            href={item.href}
                                                            className="flex items-center text-[#3385d9] text-xs font-bold gap-1 uppercase tracking-wider hover:opacity-75 transition-opacity"
                                                        >
                                                            Dowiedz się więcej <FiArrowRight className="w-3 h-3" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Mobile Kontener expandera */}
                                            <div className="block lg:hidden h-0 group-data-[open=true]:h-auto opacity-0 group-data-[open=true]:opacity-100 transition-all duration-300 overflow-hidden pointer-events-none group-data-[open=true]:pointer-events-auto">
                                                <p className="text-sm text-slate-600 pt-4 leading-relaxed font-medium">
                                                    {item.desc}
                                                </p>
                                                <div className="pt-4 flex items-center relative z-20">
                                                    <Link 
                                                        href={item.href}
                                                        className="flex items-center text-[#3385d9] text-xs font-bold gap-1 uppercase tracking-wider"
                                                    >
                                                        Dowiedz się więcej <FiArrowRight className="w-3 h-3" />
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="absolute inset-0 bg-gradient-to-r from-[#3385d9]/[0.03] to-transparent opacity-0 group-data-[open=true]:opacity-100 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
