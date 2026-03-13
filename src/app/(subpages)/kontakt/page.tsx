"use client";

import React from 'react';
import { FiMapPin, FiClock, FiPhone, FiMail } from 'react-icons/fi';
import MapWrapper from '../../../components/MapWrapper';
import ContactForm from '../../../components/ContactForm';

const ContactPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-200 via-white to-blue-100 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Tło - dekoracyjne rozmyte okręgi (subtelniejsze dla jasnego motywu) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#3385d9]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-[150px]" />
        <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">

          {/* Lewa strona - Tekst i dane kontaktowe */}
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-serif leading-tight">
              Skontaktuj <span className="text-[#3385d9]">się z nami</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg font-light leading-relaxed">
              Masz pytania dotyczące optymalizacji kosztów energii lub gazu? Nasi doradcy są gotowi, by pomóc Ci dobrać najlepsze rozwiązanie dla Twojej firmy.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                <a href="mailto:biuro@easyenergy.pl" className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md hover:bg-white hover:border-[#3385d9]/30 transition-all text-slate-700 font-light text-sm shadow-sm">
                  <FiMail className="w-4 h-4 text-[#3385d9]" />
                  biuro@easyenergy.pl
                </a>
                <a href="tel:+48111222333" className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md hover:bg-white hover:border-[#3385d9]/30 transition-all text-slate-700 font-light text-sm shadow-sm">
                  <FiPhone className="w-4 h-4 text-[#3385d9]" />
                  +48 111 222 333
                </a>
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md text-slate-700 font-light text-sm shadow-sm">
                  <FiMapPin className="w-4 h-4 text-[#3385d9]" />
                  ul. Przykładowa 12/34, 00-001 Warszawa
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md text-slate-700 font-light text-sm shadow-sm">
                  <FiClock className="w-4 h-4 text-[#3385d9]" />
                  Pon - Pt: 08:00 - 16:00
                </div>
              </div>
            </div>
          </div>

          {/* Prawa strona - Formularz */}
          <div className="w-full relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3385d9]/20 to-purple-500/20 rounded-3xl blur opacity-20"></div>
            <ContactForm />
          </div>

        </div>

        {/* Dolna sekcja - Mapa */}
        <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative z-10 bg-white/50 backdrop-blur-xl p-2">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner">
            <MapWrapper />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;