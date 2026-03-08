import React from 'react';
import ContactForm from '../../../components/ContactForm';

const OnlineMeetingPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-30 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Nagłówek sekcji */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
          Umów <span className="text-[#3385d9]">spotkanie</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Chcesz porozmawiać o szczegółach współpracy? Wypełnij formularz poniżej, a nasz doradca skontaktuje się z Tobą w celu ustalenia dogodnego terminu spotkania online lub osobiście.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ContactForm />
      </div>
    </main>
  );
};

export default OnlineMeetingPage;