"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issues in Leaflet with Next.js/Webpack
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

const position: [number, number] = [52.2297, 21.0122]; // Warszawa centrum (przykładowo)

const ContactMap = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ESLint: unikanie synchronicznego setState w efekcie.
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center text-slate-400">Ładowanie mapy...</div>;
  }

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} preferCanvas={true} className="w-full h-full rounded-2xl z-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="font-sans text-center">
            <strong className="text-[#3385d9]">EasyEnergy</strong><br />
            nasze biuro!
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
