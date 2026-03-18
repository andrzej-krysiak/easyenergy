import React from 'react';
import { FiCalendar, FiSearch, FiTarget, FiMessageSquare, FiFileText, FiActivity } from "react-icons/fi";

const RoadMap = () => {
  const steps = [
    { id: 1, icon: FiCalendar, stepNumber: "1", title: "Umów spotkanie", description: "Zaplanujmy spotkanie w dogodnym terminie, a następnie przygotuj dane do przeprowadzenia analizy." },
    { id: 2, icon: FiSearch, stepNumber: "2", title: "Analiza", description: "Przeanalizujemy dokumenty jakimi dysponujesz, ustalimy jakie masz potrzeby oraz jakie działania są możliwe do podjęcia." },
    { id: 3, icon: FiTarget, stepNumber: "3", title: "Rekomendacje", description: "Na podstawie uzyskanych informacji przedstawimy optymalnie dopasowane dla Ciebie rozwiązanie." },
    { id: 4, icon: FiMessageSquare, stepNumber: "4", title: "Negocjacje z dostawcami", description: "Ustalamy z dostawcami takie elementy jak cena, terminy płatności, zobowiązania stron, warunki dostawy i inne aspekty umowy." },
    { id: 5, icon: FiFileText, stepNumber: "5", title: "Umowa", description: "Na podstawie wynegocjowanych warunków wspólnie podejmujemy decyzję o wyborze konkretnego dostawcy i zawieramy umowę." },
    { id: 6, icon: FiActivity, stepNumber: "6", title: "Monitoring", description: "Po zawarciu umowy sprawujemy pieczę nad poszczególnymi etapami realizacji, tak aby wszystko było zgodne z oczekiwaniami i umową." },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden flex justify-center">
      {/* Duże tło SVG w kształcie litery S/pioruna, wyśrodkowane i dyskretne */}
      {/* Duże tło SVG w kształcie pioruna */}
      <svg 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] lg:w-[1500px] lg:h-[1500px] text-slate-200/35 drop-shadow-[0_20px_50px_rgba(51,133,217,0.12)] z-0 pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 2L4 14h6l-1 8 11-14h-7l0-6z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Jak działamy?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sprawdź, jak wygląda nasz proces krok po kroku
          </p>
        </div>

        {/* Kontener osi czasu */}
        <div className="relative max-w-4xl mx-auto">
          {/* Środkowa pionowa linia (widoczna tylko na desktopie) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3385d9]/20 via-[#3385d9] to-[#3385d9]/20 transform -translate-x-1/2 rounded-full"></div>
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3385d9]/20 via-[#3385d9] to-[#3385d9]/20 rounded-full"></div>
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;

              return (
                <div key={step.id} className="relative flex items-center justify-between md:mb-4 md:even:flex-row-reverse group">

                  {/* Zawartość (Karta) */}
                  <div className="w-full pl-16 md:pl-0 md:w-[45%]">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#3385d9]/40 transition-all duration-300 relative z-10">
                      
                      {/* Nagłówek wizualny - Prawa/Lewa strona w zależności od ułożenia na desktopie */}
                      <div className={`flex items-center space-x-3 mb-4 ${isEven ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                         <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3385d9]/10 text-[#3385d9]">
                           <step.icon className="w-5 h-5" />
                         </span>
                         <h3 className={`text-xl sm:text-2xl font-bold text-slate-800 group-hover:text-[#3385d9] transition-colors duration-300 ${isEven ? 'md:text-right' : ''}`}>
                           {step.title}
                         </h3>
                      </div>

                      <p className={`text-slate-600 leading-relaxed font-light text-base ${isEven ? 'md:text-right' : ''}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Kółko na środku osi (desktop) / po lewej stronie (mobile) */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3385d9] border-4 border-slate-50 text-white font-bold shadow-[0_0_15px_rgba(51,133,217,0.5)] z-20 transition-transform duration-300 group-hover:scale-110">
                    {step.stepNumber}
                  </div>
                  
                  {/* Pusty div dla zachowania układu flexbox na desktopie */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;

