import React from 'react';
import { FiMapPin, FiClock, FiPhone, FiMail } from 'react-icons/fi';
import MapWrapper from '../../../components/MapWrapper';

const ContactPage = () => {

  return (
    <main className="min-h-screen bg-slate-50 pt-30 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Nagłówek sekcji */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
          Skontaktuj <span className="text-[#3385d9]">się z nami</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Masz pytania dotyczące optymalizacji kosztów energii lub gazu? Nasi doradcy są gotowi, by pomóc Ci dobrać najlepsze rozwiązanie dla Twojej firmy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        
        {/* Lewa strona - Mapa */}
        <div className="bg-white p-2 rounded-3xl shadow-lg border border-slate-100 h-[400px] lg:h-auto min-h-[400px] relative z-0">
          <MapWrapper />
        </div>

        {/* Prawa strona - Dane kontaktowe */}
        <div className="flex flex-col gap-6 lg:gap-8">
          
          {/* Nasz adres */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3385d9]/10 text-[#3385d9] shrink-0 group-hover:bg-[#3385d9] group-hover:text-white transition-colors duration-300">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Nasz adres</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  ul. Przykładowa 12/34<br />
                  00-001 Warszawa
                </p>
              </div>
            </div>
          </div>

          {/* Dane kontaktowe */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3385d9]/10 text-[#3385d9] shrink-0 group-hover:bg-[#3385d9] group-hover:text-white transition-colors duration-300">
                <FiPhone className="w-6 h-6" />
              </div>
              <div className="ml-5 space-y-2">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Dane kontaktowe</h3>
                <a href="tel:+48111222333" className="flex items-center text-slate-600 hover:text-[#3385d9] transition-colors group/link font-light">
                  <FiPhone className="w-4 h-4 mr-3 text-slate-400 group-hover/link:text-[#3385d9]" />
                  +48 111 222 333
                </a>
                <a href="mailto:biuro@easyenergy.pl" className="flex items-center text-slate-600 hover:text-[#3385d9] transition-colors group/link font-light">
                  <FiMail className="w-4 h-4 mr-3 text-slate-400 group-hover/link:text-[#3385d9]" />
                  biuro@easyenergy.pl
                </a>
              </div>
            </div>
          </div>

          {/* Godziny otwarcia */}
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3385d9]/10 text-[#3385d9] shrink-0 group-hover:bg-[#3385d9] group-hover:text-white transition-colors duration-300">
                <FiClock className="w-6 h-6" />
              </div>
              <div className="ml-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Godziny otwarcia</h3>
                <ul className="space-y-1 text-slate-600 font-light">
                  <li className="flex justify-between w-48">
                    <span>Pon - Pt:</span>
                    <span className="font-medium text-slate-800">08:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between w-48">
                    <span>Sobota:</span>
                    <span className="font-medium text-slate-800">Nieczynne</span>
                  </li>
                  <li className="flex justify-between w-48">
                    <span>Niedziela:</span>
                    <span className="font-medium text-slate-800">Nieczynne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default ContactPage;