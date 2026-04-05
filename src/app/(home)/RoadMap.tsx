import React from 'react';
import { FiCalendar, FiSearch, FiTarget, FiMessageSquare, FiFileText, FiActivity } from "react-icons/fi";
import ScrollReveal from '../../components/ScrollReveal';

const RoadMap = () => {
    const steps = [
        { 
            id: 1, 
            icon: FiCalendar, 
            stepNumber: "01", 
            title: "Umów spotkanie", 
            description: "Zaplanujmy spotkanie w dogodnym terminie, a następnie przygotuj dane do przeprowadzenia wstępnej analizy opłacalności." 
        },
        { 
            id: 2, 
            icon: FiSearch, 
            stepNumber: "02", 
            title: "Analiza potrzeb", 
            description: "Przeanalizujemy dokumenty Twojego przedsiębiorstwa i ustalimy, jakich działań optymalizacyjnych wymaga aktualna sytuacja." 
        },
        { 
            id: 3, 
            icon: FiTarget, 
            stepNumber: "03", 
            title: "Rekomendacje", 
            description: "Prezentujemy skrojony na miarę plan wdrożeń oraz wykaz działań ukierunkowanych na redukcję kosztów energii lub gazu." 
        },
        { 
            id: 4, 
            icon: FiMessageSquare, 
            stepNumber: "04", 
            title: "Negocjacje umów", 
            description: "W imieniu klienta dopinamy z dostawcami newralgiczne warunki, m.in. wysokość prowizji, ceny rynkowe oraz odpowiednie klauzule." 
        },
        { 
            id: 5, 
            icon: FiFileText, 
            stepNumber: "05", 
            title: "Inicjacja i wdrożenie", 
            description: "Przechodzimy do autoryzacji finalnego dostawcy i parafowania bezdyskusyjnie najkorzystniejszego pakietu kontraktów." 
        },
        { 
            id: 6, 
            icon: FiActivity, 
            stepNumber: "06", 
            title: "Stały monitoring", 
            description: "Naszą misją po implementacji nowej umowy pozostaje opieka nad jej właściwym wykonaniem przez okres całego kontraktu." 
        },
    ];

    return (
        <section className="bg-slate-50 relative flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20 w-full overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(51,133,217,0.08),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(102,179,255,0.08),transparent_45%)]" />
            </div>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
                <ScrollReveal>
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <h2 className="text-[#3385d9] font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
                        Nasz Proces
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6 lg:mb-8 text-slate-900">
                        Jak to działa?
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                        Płynna podróż od pierwszej analizy potrzeb aż do optymalizacji i stałej ochrony Twojego bezpieczeństwa kontraktowego.
                    </p>
                </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
                    {steps.map((step, index) => {
                        // Use row-based stagger to keep it snappy while maintaining the "left-then-right" sequence
                        const smDelayValue = (index % 2) * 150;
                        const lgDelayValue = (index % 3) * 150;
                        const combinedDelay = `sm:delay-${smDelayValue} lg:delay-${lgDelayValue}`;

                        return (
                            <ScrollReveal 
                                key={step.id} 
                                animation="animate-responsive-tilt" 
                                delay={combinedDelay}
                                threshold={0.1}
                            >
                                <div className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-3xl p-5 lg:p-6 shadow-[0_8px_30px_rgba(2,6,23,0.05)] hover:shadow-[0_18px_55px_rgba(2,6,23,0.12)] hover:border-[#3385d9]/35 transition-all duration-300 hover:-translate-y-1 h-full">
                                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#3385d9]/5 via-transparent to-transparent pointer-events-none" />
                                    <div className="relative mb-4 lg:mb-5">
                                        <div className="size-9 lg:size-10 rounded-xl bg-slate-50 border border-slate-200 shadow-[0_4px_16px_rgba(2,6,23,0.05)] flex items-center justify-center text-[#3385d9] group-hover:bg-[#3385d9] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(51,133,217,0.35)] transition-all duration-300">
                                            <step.icon className="w-5 h-5" />
                                        </div>
                                        <span className="absolute top-0 right-0 text-xl lg:text-2xl font-black tracking-tight text-slate-300 group-hover:text-[#3385d9]/90 transition-colors duration-300">
                                            {step.stepNumber}
                                        </span>
                                    </div>
                                    <div className="relative">
                                        <h4 className="text-base lg:text-lg font-bold mb-2 lg:mb-3 text-slate-900 tracking-tight group-hover:text-[#1a436d] transition-colors duration-300">
                                            {step.title}
                                        </h4>
                                        <p className="text-[13px] lg:text-sm text-slate-600 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RoadMap;
