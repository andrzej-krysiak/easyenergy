'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

interface LinkItem {
    name: string;
    href: string;
}

export default function MobileMenu({ links }: { links: LinkItem[] }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
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

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[var(--background)] absolute w-full left-0 top-20 shadow-md border-b border-slate-200 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="px-4 pt-2 pb-6 flex flex-col space-y-4">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-slate-600 hover:text-blue-600 hover:bg-slate-50 font-medium px-3 py-2 rounded-md transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
