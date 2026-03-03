import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/easyenergy-logo-white.png'
import { FiFacebook, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src={logo} 
                alt="EasyEnergy Logo" 
                width={400} 
                height={150} 
                className="object-contain w-26 sm:w-32 md:w-40 h-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Profesjonalne doradztwo energetyczne. Pomagamy optymalizować koszty, dobierać najlepsze strategie zakupu energii i gazu dla Twojego biznesu.
            </p>
          </div>

          {/* Szybkie linki */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              Szybkie linki
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/o-nas" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/uslugi" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                  Nasze usługi
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                  Baza wiedzy (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                  Blog i Aktualności
                </Link>
              </li>
              <li>
                <Link href="/kariera" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                  Kariera
                </Link>
              </li>
            </ul>
          </div>

          {/* Oferta */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              Nasza oferta
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/energia-elektryczna" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                  Energia elektryczna
                </Link>
              </li>
              <li>
                <Link href="/gaz-ziemny" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                  Gaz ziemny
                </Link>
              </li>
              <li>
                <Link href="/fotowoltaika" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                  Fotowoltaika dla firm
                </Link>
              </li>
              <li>
                <Link href="/audyty" className="text-slate-400 hover:text-indigo-400 transition-colors text-sm flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                  Audyty efektywności
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-slate-400">
                <span className="mt-1 mr-3 text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>
                  ul. Przykładowa 12/34<br />
                  00-000 Warszawa, Polska
                </span>
              </li>
              <li className="flex items-center text-sm text-slate-400">
                <span className="mr-3 text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:kontakt@easyenergy.pl" className="hover:text-white transition-colors">
                  kontakt@easyenergy.pl
                </a>
              </li>
              <li className="flex items-center text-sm text-slate-400">
                <span className="mr-3 text-indigo-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+48000000000" className="hover:text-white transition-colors">
                  +48 000 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dolny pasek z copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} EasyEnergy. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6">
            <Link href="/polityka-prywatnosci" className="hover:text-slate-300 transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-slate-300 transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
