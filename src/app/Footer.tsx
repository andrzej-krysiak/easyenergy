import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/easyenergy-logo-white.png';
import { FiFacebook, FiLinkedin, FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const sections = {
        links: [
            { name: 'Strona główna', href: '/' },
            { name: 'Nasza oferta', href: '/#oferta' },
            { name: 'Kontakt', href: '/kontakt' },
        ],
        offer: [
            { name: 'Energia elektryczna', href: '/energia-elektryczna' },
            { name: 'Paliwo gazowe', href: '/paliwo-gazowe' },
            { name: 'Wsparcie prawne', href: '/wsparcie-prawne' },
        ]
    };

    return (
        <footer className="bg-slate-900 py-12 lg:py-16 border-t border-white/5 text-slate-400">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-y-12 sm:gap-x-8 lg:gap-12 mb-12">
                    {/* Logo & About - Stays aligned to the left */}
                    <div className="space-y-6 max-w-sm lg:max-w-[280px] xl:max-w-xs">
                        <Link href="/" className="inline-block">
                            <Image 
                                src={logo} 
                                alt="EasyEnergy Logo" 
                                width={160} 
                                height={40} 
                                className="object-contain w-32 md:w-40 h-auto"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            Profesjonalne doradztwo energetyczne dla Twojego biznesu. Pomagamy optymalizować koszty i dobierać najlepsze strategie zakupu mediów.
                        </p>
                    </div>

                    {/* Szybkie linki */}
                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-tight uppercase text-xs">
                            Szybkie linki
                        </h3>
                        <ul className="space-y-4 text-sm font-medium">
                            {sections.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-[#3385d9] transition-colors flex items-center group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-[#3385d9] transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Oferta */}
                    <div>
                        <h3 className="text-white font-bold mb-6 tracking-tight uppercase text-xs">
                            Nasza oferta
                        </h3>
                        <ul className="space-y-4 text-sm font-medium">
                            {sections.offer.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-[#3385d9] transition-colors flex items-center group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mr-2 group-hover:bg-[#3385d9] transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontakt */}
                    <div className="lg:min-w-[260px]">
                        <h3 className="text-white font-bold mb-6 tracking-tight uppercase text-xs">
                            Kontakt
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <FiMapPin className="mt-1 mr-3 text-[#3385d9] flex-shrink-0" />
                                <span>ul. Żeligowskiego 32/34<br />90-643 Łódź</span>
                            </li>
                            <li className="flex items-center">
                                <FiMail className="mr-3 text-[#3385d9] flex-shrink-0" />
                                <a href="mailto:biuro@easyenergy.pl" className="hover:text-white transition-colors lowercase">biuro@easyenergy.pl</a>
                            </li>
                            <li className="flex items-center">
                                <FiPhone className="mr-3 text-[#3385d9] flex-shrink-0" />
                                <a href="tel:+48664144448" className="hover:text-white transition-colors">+48 664 144 448</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-slate-500 uppercase tracking-widest">
                    <p>
                        &copy; {currentYear} Easy Energy sp. z o.o. Wszystkie prawa zastrzeżone.
                    </p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="hover:text-[#3385d9] transition-all hover:scale-110 active:scale-95"><FiLinkedin className="text-base" /></a>
                        <a href="#" className="hover:text-[#3385d9] transition-all hover:scale-110 active:scale-95"><FiFacebook className="text-base" /></a>
                        <a href="#" className="hover:text-[#3385d9] transition-all hover:scale-110 active:scale-95"><FiInstagram className="text-base" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
