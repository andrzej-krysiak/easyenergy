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
        <section className="bg-slate-50 relative min-h-screen flex flex-col justify-center items-center py-20 lg:py-0 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-[#3385d9] font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
                        Nasz Proces
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-slate-900">
                        Jak to działa?
                    </h3>
                    <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                        Płynna podróż od pierwszej analizy potrzeb aż do optymalizacji i stałej ochrony Twojego bezpieczeństwa kontraktowego.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-y-20">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col gap-6 group">
                            <div className="flex items-baseline gap-4">
                                <span className="text-5xl font-bold text-slate-900/15 group-hover:text-[#3385d9]/80 transition-colors duration-500 will-change-auto">
                                    {step.stepNumber}
                                </span>
                                <div className="w-12 h-12 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#3385d9] group-hover:shadow-[0_8px_32px_rgba(51,133,217,0.15)] group-hover:-translate-y-1 transition-all duration-300">
                                    <step.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-[21px] font-bold mb-3 text-slate-900 tracking-tight">
                                    {step.title}
                                </h4>
                                <p className="text-slate-600 leading-relaxed font-medium">
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
