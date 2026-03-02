'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Energia Elektryczna', href: '/energia-elektryczna' },
        { name: 'Paliwo Gazowe', href: '/paliwo-gazowe' },
        { name: 'Wsparcie Prawne', href: '/wsparcie-prawne' },
        { name: 'Kontakt', href: '/kontakt' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo po lewej stronie */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                            <Image
                                src="/easyenergy-logo.png"
                                alt="EasyEnergy Logo"
                                width={200}
                                height={60}
                                className="w-auto h-12 object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FiX className="h-7 w-7 transition-transform duration-300" />
                            ) : (
                                <FiMenu className="h-7 w-7 transition-transform duration-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white absolute w-full shadow-md border-b border-slate-200 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-slate-600 hover:text-blue-600 hover:bg-slate-50 font-medium px-3 py-2 rounded-md transition-colors duration-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
