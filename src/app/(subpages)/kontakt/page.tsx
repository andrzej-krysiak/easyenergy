"use client";

import React, { useState } from 'react';
import { FiMapPin, FiClock, FiPhone, FiMail, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import MapWrapper from '../../../components/MapWrapper';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Nazwa firmy jest wymagana';
    if (!formData.phone.trim()) newErrors.phone = 'Numer telefonu jest wymagany';
    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Niepoprawny format email';
    }
    if (!formData.message.trim()) newErrors.message = 'Wiadomość jest wymagana';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Wiadomość została wysłana! Dziękujemy za kontakt.' });
        setFormData({ companyName: '', phone: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Wystąpił błąd. Spróbuj ponownie.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Problem z połączeniem. Sprawdź internet.' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
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

      {/* Formularz Kontaktowy - Teraz pod spodem */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center lg:justify-start">
              <span className="w-10 h-10 rounded-xl bg-[#3385d9] text-white flex items-center justify-center mr-4">
                <FiSend className="w-5 h-5" />
              </span>
              Wyślij wiadomość
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 ml-1">Nazwa Twojej firmy</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="np. Eco Solutions Sp. z o.o."
                    className={`w-full px-4 py-3 rounded-xl border ${errors.companyName ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-[#3385d9]/20 focus:border-[#3385d9] outline-none transition-all`}
                  />
                  {errors.companyName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.companyName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 ml-1">Numer telefonu</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+48 000 000 000"
                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-[#3385d9]/20 focus:border-[#3385d9] outline-none transition-all`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 ml-1">Adres Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="kontakt@twojafirma.pl"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-[#3385d9]/20 focus:border-[#3385d9] outline-none transition-all`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 ml-1">Wiadomość</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="W czym możemy Ci pomóc?"
                  className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-[#3385d9]/20 focus:border-[#3385d9] outline-none transition-all resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-[#3385d9] hover:bg-[#286bb0] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status.type === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Wyślij zgłoszenie</span>
                    <FiSend className="w-5 h-5" />
                  </>
                )}
              </button>

              {status.type === 'success' && (
                <div className="flex items-center p-4 bg-green-50 border border-green-100 text-green-700 rounded-xl animate-in fade-in slide-in-from-top-2">
                  <FiCheckCircle className="w-5 h-5 mr-3 shrink-0" />
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}

              {status.type === 'error' && (
                <div className="flex items-center p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl animate-in fade-in slide-in-from-top-2">
                  <FiAlertCircle className="w-5 h-5 mr-3 shrink-0" />
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;