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
                className={`w-full text-slate-900 px-4 py-3 rounded-xl border ${errors.companyName ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-[#3385d9]/20 focus:border-[#3385d9] outline-none transition-all`}
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
                placeholder="+48 123 456 789"
                className={`w-full text-slate-900 px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-[#3385d9]/20 focus:border-[#3385d9] outline-none transition-all`}
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
              className={`w-full text-slate-900 px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-[#3385d9]/20 focus:border-[#3385d9] outline-none transition-all`}
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
              className={`w-full text-slate-900 px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-200'} focus:ring-2 focus:ring-[#3385d9]/20 focus:border-[#3385d9] outline-none transition-all resize-none`}
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
  );
};

export default ContactForm;
