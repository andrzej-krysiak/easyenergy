"use client";

import React from 'react';
import { FiMapPin, FiClock, FiPhone, FiMail } from 'react-icons/fi';
import MapWrapper from '../../../components/MapWrapper';
import ContactForm from '../../../components/ContactForm';

const ContactPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden font-sans text-slate-900 selection:bg-primary-contact/20">
      {/* Mesh Gradient Background */}
      <div className="mesh-gradient -z-10">
        <div className="blob w-[600px] h-[600px] bg-primary-contact -top-[200px] -right-[100px] animate-blob-float"></div>
        <div className="blob w-[500px] h-[500px] bg-[#3385d9] -bottom-[100px] -left-[100px] animate-blob-float-reverse"></div>
      </div>

      <div className="relative flex min-h-screen flex-col">
        <div className="flex-grow">
          {/* Hero Section */}
          <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-12 lg:pt-32">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-contact/10 text-primary-contact text-xs font-bold tracking-widest uppercase mb-6">
                Skontaktuj się z nami
              </span>
              <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                Zasilmy Twoją <br /><span className="bg-gradient-to-r from-[#66b3ff] via-[#4095ed] to-[#3385d9] bg-clip-text text-transparent italic drop-shadow-sm pr-2">przyszłość razem</span>.
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-slate-600 max-w-2xl">
                Nasi eksperci są tutaj, aby pomóc Ci w przejściu na zrównoważoną energię. Skontaktuj się z nami w celu konsultacji lub wsparcia technicznego.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

              {/* Formularz - Lewa kolumna (7/12) */}
              <div className="lg:col-span-7 flex flex-col">
                <ContactForm />
              </div>

              {/* Info & Map - Prawa kolumna (5/12) */}
              <div className="lg:col-span-5 flex flex-col gap-6">

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-none">
                  {/* Telefon */}
                  <a href='tel:+48111222333' className="glass-card rounded-2xl p-6 transition-transform hover:scale-[1.02]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-contact/10 text-primary-contact mb-4">
                      <FiPhone className="text-2xl" />
                    </div>
                    <h3 className="text-base font-bold mb-1">Telefon</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">+48 111 222 333</p>
                  </a>

                  {/* Email */}
                  <a href='mailto:biuro@easyenergy.pl' className="glass-card rounded-2xl p-6 transition-transform hover:scale-[1.02]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-contact/10 text-primary-contact mb-4">
                      <FiMail className="text-2xl" />
                    </div>
                    <h3 className="text-base font-bold mb-1">Email</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">biuro@easyenergy.pl</p>
                  </a>

                  {/* Adres */}
                  <div className="glass-card rounded-2xl p-6 transition-transform hover:scale-[1.02]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-contact/10 text-primary-contact mb-4">
                      <FiMapPin className="text-2xl" />
                    </div>
                    <h3 className="text-base font-bold mb-1">Biuro</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">ul. Przykładowa 12/34, 00-001 Warszawa</p>
                  </div>

                  {/* Godziny */}
                  <div className="glass-card rounded-2xl p-6 transition-transform hover:scale-[1.02]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-contact/10 text-primary-contact mb-4">
                      <FiClock className="text-2xl" />
                    </div>
                    <h3 className="text-base font-bold mb-1">Godziny</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Pon - Pt: 08:00 - 16:00</p>
                  </div>
                </div>

                {/* Mapa */}
                <div className="relative group overflow-hidden rounded-2xl border border-slate-200/50 shadow-2xl bg-white/50 backdrop-blur-xl p-2 flex-grow min-h-[300px]">
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner">
                    <MapWrapper />
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
