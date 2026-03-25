"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function NavBar({ isStatic = false }: { isStatic?: boolean }) {
    const [scrolled, setScrolled] = useState(isStatic);
    const linkStyles = scrolled
        ? "text-slate-700"
        : "text-white";

    useEffect(() => {
        if (isStatic) {
            return;
        }

        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isStatic]);
    const links = [
        { name: 'Energia Elektryczna', href: '/energia-elektryczna' },
        { name: 'Paliwo Gazowe', href: '/paliwo-gazowe' },
        { name: 'Wsparcie Prawne', href: '/wsparcie-prawne' },
        { name: 'Kontakt', href: '/kontakt' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
            scrolled 
                ? "bg-[var(--background)]/95 backdrop-blur-md shadow-sm" 
                : "bg-transparent border-transparent"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo po lewej stronie */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={scrolled ? "/easyenergy-logo.png" : "/easyenergy-logo-light.png"}
                                alt="EasyEnergy Logo"
                                width={200}
                                height={60}
                                className="w-auto h-12 object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Links - Server Side Rendered */}
                    <ul className="hidden md:flex items-center space-x-8">
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
                    <MobileMenu links={links} />
                </div>
            </div>
        </nav>
    );
}
