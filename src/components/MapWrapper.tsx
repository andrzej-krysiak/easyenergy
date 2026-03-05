"use client";

import dynamic from 'next/dynamic';

// Dynamiczny import z ssr: false dozwolony w obiekcie Client Component
const ContactMap = dynamic(() => import('./ContactMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center text-slate-400 min-h-[400px]">
      Ładowanie mapy...
    </div>
  )
});

const MapWrapper = () => {
  return <ContactMap />;
};

export default MapWrapper;
