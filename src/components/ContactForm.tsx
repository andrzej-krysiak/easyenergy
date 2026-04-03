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
    <div className="relative z-10 w-full h-full">
      <form onSubmit={handleSubmit} className="h-full flex flex-col space-y-4 2xl:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-8">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-900 mb-1 ml-1">Nazwa Twojej firmy</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="np. Eco Solutions Sp. z o.o."
              className={`block w-full rounded-lg 2xl:rounded-xl border-slate-200/60 bg-white/50 px-4 py-3 2xl:px-5 2xl:py-4 text-sm 2xl:text-base text-slate-900 placeholder-slate-400 transition-all form-input-focus border ${errors.companyName ? 'border-red-400 bg-red-50/50' : ''} outline-none`}
            />
            {errors.companyName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.companyName}</p>}
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-900 mb-1 ml-1">Numer telefonu</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+48 123 456 789"
              className={`block w-full rounded-lg 2xl:rounded-xl border-slate-200/60 bg-white/50 px-4 py-3 2xl:px-5 2xl:py-4 text-sm 2xl:text-base text-slate-900 placeholder-slate-400 transition-all form-input-focus border ${errors.phone ? 'border-red-400 bg-red-50/50' : ''} outline-none`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-slate-900 mb-1 ml-1">Adres Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="kontakt@twojafirma.pl"
            className={`block w-full rounded-lg 2xl:rounded-xl border-slate-200/60 bg-white/50 px-4 py-3 2xl:px-5 2xl:py-4 text-sm 2xl:text-base text-slate-900 placeholder-slate-400 transition-all form-input-focus border ${errors.email ? 'border-red-400 bg-red-50/50' : ''} outline-none`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
        </div>

        <div className="space-y-3 flex-grow flex flex-col">
          <label className="block text-sm font-semibold text-slate-900 mb-1 ml-1">Wiadomość</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="W czym możemy Ci pomóc?"
            className={`block w-full flex-grow rounded-lg 2xl:rounded-xl border-slate-200/60 bg-white/50 px-4 py-3 2xl:px-5 2xl:py-4 text-sm 2xl:text-base text-slate-900 placeholder-slate-400 transition-all form-input-focus border ${errors.message ? 'border-red-400 bg-red-50/50' : ''} outline-none resize-none min-h-[90px] lg:min-h-[110px] 2xl:min-h-[150px]`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full sm:w-auto min-w-[220px] flex items-center justify-center rounded-full bg-primary-contact px-8 py-3.5 2xl:px-10 2xl:py-5 text-sm 2xl:text-base font-bold text-white shadow-xl shadow-primary-contact/30 hover:bg-primary-contact/90 hover:translate-y-[-2px] hover:shadow-2xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status.type === 'loading' ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>Wyślij wiadomość</span>
                <FiSend className="w-5 h-5 ml-2" />
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
