import React from 'react';
import { FiCalendar, FiSearch, FiTarget, FiMessageSquare, FiFileText, FiActivity } from "react-icons/fi";

const RoadMap = () => {
  const steps = [
    { id: 1, icon: FiCalendar, stepNumber: "Krok 1", title: "Umów spotkanie", description: "Zaplanujmy spotkanie w dogodnym terminie, a następnie przygotuj dane do przeprowadzenia analizy." },
    { id: 2, icon: FiSearch, stepNumber: "Krok 2", title: "Analiza", description: "Przeanalizujemy dokumenty jakimi dysponujesz, ustalimy jakie masz potrzeby oraz jakie działania są możliwe do podjęcia." },
    { id: 3, icon: FiTarget, stepNumber: "Krok 3", title: "Rekomendacje", description: "Na podstawie uzyskanych informacji przedstawimy optymalnie dopasowane dla Ciebie rozwiązanie." },
    { id: 4, icon: FiMessageSquare, stepNumber: "Krok 4", title: "Negocjacje z dostawcami", description: "Ustalamy z dostawcami takie elementy jak cena, terminy płatności, zobowiązania stron, warunki dostawy i inne aspekty umowy." },
    { id: 5, icon: FiFileText, stepNumber: "Krok 5", title: "Umowa", description: "Na podstawie wynegocjowanych warunków wspólnie podejmujemy decyzję o wyborze konkretnego dostawcy i zawieramy umowę." },
    { id: 6, icon: FiActivity, stepNumber: "Krok 6", title: "Monitoring", description: "Po zawarciu umowy sprawujemy pieczę nad poszczególnymi etapami realizacji, tak aby wszystko było zgodne z oczekiwaniami i umową." },
  ];

  return (
    <section className="py-0 sm:py-10 bg-slate-50 relative overflow-hidden">
      {/* Ciemny gradient od lewej i prawej strony */}
      <div className="absolute inset-y-0 left-0 w-32 sm:w-64 lg:w-96 bg-gradient-to-r from-blue-900/20 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-y-0 right-0 w-32 sm:w-64 lg:w-96 bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Jak działamy?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sprawdź, jak wygląda nasz proces krok po kroku
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#3385d9]/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Odznaka z Krok X */}
              <div className="inline-flex items-center space-x-2 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3385d9]/10 text-[#3385d9] font-bold">
                  <step.icon className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold tracking-wider text-[#3385d9] uppercase">
                  {step.stepNumber}
                </span>
              </div>
              
              <div className="flex-grow">
                {/* Główny tytuł etapu */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#3385d9] transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Dokładny opis */}
                <p className="text-slate-600 leading-relaxed font-light text-base">
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
