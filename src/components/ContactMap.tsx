"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixed Height Fix for Leaflet
const MapResizer = () => {
  const map = useMap();
  useEffect(() => {
    // Invalidate size once to ensure tiles match container after flex/grid layout completes
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 400);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
};

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

const position: [number, number] = [51.768535467829025, 19.439469671226597]; // Łódź, ul. Żeligowskiego 32/34

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
      <MapResizer />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon} interactive={false} />
    </MapContainer>
  );
};

export default ContactMap;
