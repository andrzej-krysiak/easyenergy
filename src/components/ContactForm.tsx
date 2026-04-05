"use client";

import React, { useState } from 'react';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { contactFormSchema } from './ValidationSchema';

const ContactForm = () => {
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
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: { [key: string]: string } = {};
      result.error.issues.forEach((issue) => {
        newErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(newErrors);
      return false;
    }

    setErrors({});
    return true;
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
    let { name, value } = e.target;
    
    // Filter out letters from phone input
    if (name === 'phone') {
      value = value.replace(/[^0-9+\s\-()]/g, '');
    }

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
    <div className="relative z-10 w-full h-full">
      <form onSubmit={handleSubmit} noValidate className="h-full flex flex-col space-y-3 lg:space-y-4">
        
        {/* Nazwa Firmy - Full Width */}
        <div className="space-y-1">
          <label className="flex items-center text-[13px] font-bold text-slate-900 mb-0.5 ml-1 font-display uppercase tracking-wider opacity-70">
            Nazwa firmy
            <span className={`text-red-600 text-base font-black ml-1.5 transition-opacity duration-200 ${errors.companyName ? 'opacity-100' : 'opacity-0'}`}>*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="np. Eco Solutions"
            className={`block w-full rounded-xl border-slate-200/60 bg-white/50 px-4 py-2.5 text-[13.5px] text-slate-900 placeholder-slate-400 transition-all form-input-focus border ${errors.companyName ? 'border-red-400 bg-red-50/50' : ''} outline-none`}
          />
        </div>

        {/* Adres Email & Numer Telefonu - 50/50 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          <div className="space-y-1">
            <label className="flex items-center text-[13px] font-bold text-slate-900 mb-0.5 ml-1 font-display uppercase tracking-wider opacity-70">
              Adres Email
              <span className={`text-red-600 text-base font-black ml-1.5 transition-opacity duration-200 ${errors.email && formData.email === '' ? 'opacity-100' : 'opacity-0'}`}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="kontakt@twojafirma.pl"
              className={`block w-full rounded-xl border-slate-200/60 bg-white/50 px-4 py-2.5 text-[13.5px] text-slate-900 placeholder-slate-400 transition-all form-input-focus border ${errors.email ? 'border-red-400 bg-red-50/50' : ''} outline-none`}
            />
            {errors.email && formData.email !== '' && (
              <p className="text-red-500 text-[11px] mt-1 ml-1 font-bold">{errors.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="flex items-center text-[13px] font-bold text-slate-900 mb-0.5 ml-1 font-display uppercase tracking-wider opacity-70">
              Numer telefonu
              <span className={`text-red-600 text-base font-black ml-1.5 transition-opacity duration-200 ${errors.phone && formData.phone === '' ? 'opacity-100' : 'opacity-0'}`}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+48 123 456 789"
              className={`block w-full rounded-xl border-slate-200/60 bg-white/50 px-4 py-2.5 text-[13.5px] text-slate-900 placeholder-slate-400 transition-all form-input-focus border ${errors.phone ? 'border-red-400 bg-red-50/50' : ''} outline-none`}
            />
            {errors.phone && formData.phone !== '' && (
              <p className="text-red-500 text-[11px] mt-1 ml-1 font-bold">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Wiadomość */}
        <div className="flex-grow flex flex-col min-h-0">
          <label className="flex items-center text-[13px] font-bold text-slate-900 mb-0.5 ml-1 font-display uppercase tracking-wider opacity-70">
            Wiadomość
            <span className={`text-red-600 text-base font-black ml-1.5 transition-opacity duration-200 ${errors.message ? 'opacity-100' : 'opacity-0'}`}>*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="W czym możemy Ci pomóc?"
            className={`block w-full flex-grow rounded-xl border-slate-200/60 bg-white/50 px-4 py-2.5 text-[13.5px] text-slate-900 placeholder-slate-400 transition-all form-input-focus border ${errors.message ? 'border-red-400 bg-red-50/50' : ''} outline-none resize-none min-h-[80px] lg:min-h-[100px]`}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full sm:w-auto min-w-[180px] flex items-center justify-center rounded-full bg-primary-contact px-7 py-3 text-[13.5px] font-bold text-white shadow-lg shadow-primary-contact/25 hover:bg-primary-contact/90 hover:translate-y-[-1px] hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status.type === 'loading' ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>Wyślij wiadomość</span>
                <FiSend className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>

        {(status.type === 'success' || status.type === 'error') && (
          <div className={`flex items-center p-4 border rounded-xl animate-in fade-in slide-in-from-top-2 ${
            status.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
          }`}>
            {status.type === 'success' ? <FiCheckCircle className="w-5 h-5 mr-3 shrink-0" /> : <FiAlertCircle className="w-5 h-5 mr-3 shrink-0" />}
            <p className="text-sm font-medium">{status.message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
