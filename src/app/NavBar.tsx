"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function NavBar({ isStatic = false }: { isStatic?: boolean }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isFloating = scrolled;
    const useSolidVariant = isStatic || scrolled;
    const linkStyles = useSolidVariant
        ? "text-slate-700"
        : "text-white";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const links = [
        { name: 'Energia Elektryczna', href: '/energia-elektryczna' },
        { name: 'Paliwo Gazowe', href: '/paliwo-gazowe' },
        { name: 'Wsparcie Prawne', href: '/wsparcie-prawne' },
        { name: 'Kontakt', href: '/kontakt' },
    ];

    return (
        <nav
            className={`fixed inset-x-0 z-50 w-full transition-[top] duration-300 ${
                isFloating ? "top-3 sm:top-4" : "top-0"
            }`}
        >
            <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`h-[72px] border transition-all ${isMobileMenuOpen ? 'duration-75' : 'duration-500'} ${
                        isMobileMenuOpen
                            ? "bg-transparent border-transparent shadow-none rounded-none backdrop-blur-0"
                            : scrolled
                                ? "bg-white/78 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 shadow-[0_8px_28px_rgba(15,23,42,0.12)] border-white/55 rounded-full"
                                : "bg-transparent border-transparent shadow-none rounded-none backdrop-blur-0"
                    }`}
                >
                    <div className="max-w-screen-xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                        {/* Logo po lewej stronie */}
                        <div className={`flex-shrink-0 flex items-center transition-opacity ${isMobileMenuOpen ? 'duration-75 opacity-0 pointer-events-none' : 'duration-500 opacity-100'}`}>
                            <Link href="/" className="flex items-center">
                                <Image
                                    src={useSolidVariant ? "/easyenergy-logo.png" : "/easyenergy-logo-light.png"}
                                    alt="EasyEnergy Logo"
                                    width={144}
                                    height={36}
                                    className="w-auto h-8 sm:h-9 object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Desktop Links - Server Side Rendered */}
                        <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`${linkStyles} hover:text-[#3385d9] font-medium transition-colors duration-300`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu - Client Side Rendered */}
                        <MobileMenu 
                            links={links} 
                            useSolidVariant={useSolidVariant} 
                            isOpen={isMobileMenuOpen} 
                            setIsOpen={setIsMobileMenuOpen} 
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
