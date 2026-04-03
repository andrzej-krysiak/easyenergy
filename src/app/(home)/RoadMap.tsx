import React from 'react';
import { FiCalendar, FiSearch, FiTarget, FiMessageSquare, FiFileText, FiActivity } from "react-icons/fi";

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
        <section className="bg-slate-50 relative flex flex-col justify-center items-center py-12 lg:py-16 2xl:py-20 w-full overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(51,133,217,0.08),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(102,179,255,0.08),transparent_45%)]" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
                <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
                    <h2 className="text-[#3385d9] font-bold tracking-widest uppercase text-xs md:text-sm mb-3">
                        Nasz Proces
                    </h2>
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-black tracking-tighter mb-6 lg:mb-8 text-slate-900">
                        Jak to działa?
                    </h3>
                    <p className="text-base lg:text-lg 2xl:text-xl text-slate-600 font-medium leading-relaxed">
                        Płynna podróż od pierwszej analizy potrzeb aż do optymalizacji i stałej ochrony Twojego bezpieczeństwa kontraktowego.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-6 lg:gap-y-8 2xl:gap-y-10">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-3xl p-5 lg:p-6 2xl:p-7 shadow-[0_8px_30px_rgba(2,6,23,0.05)] hover:shadow-[0_18px_55px_rgba(2,6,23,0.12)] hover:border-[#3385d9]/35 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#3385d9]/5 via-transparent to-transparent pointer-events-none" />
                            <div className="relative flex items-start justify-between gap-4 mb-4 lg:mb-5">
                                <div className="size-10 lg:size-11 2xl:size-12 rounded-2xl bg-slate-50 border border-slate-200 shadow-[0_4px_16px_rgba(2,6,23,0.05)] flex items-center justify-center text-[#3385d9] group-hover:bg-[#3385d9] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(51,133,217,0.35)] transition-all duration-300">
                                    <step.icon className="w-5 h-5" />
                                </div>
                                <span className="text-2xl lg:text-3xl font-black tracking-tight text-slate-300 group-hover:text-[#3385d9]/90 transition-colors duration-300">
                                    {step.stepNumber}
                                </span>
                            </div>
                            <div className="relative">
                                <h4 className="text-lg lg:text-[21px] font-bold mb-2 lg:mb-3 text-slate-900 tracking-tight group-hover:text-[#1a436d] transition-colors duration-300">
                                    {step.title}
                                </h4>
                                <p className="text-sm lg:text-base text-slate-600 leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadMap;
