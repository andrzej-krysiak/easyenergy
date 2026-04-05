'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';

interface LinkItem {
    name: string;
    href: string;
}

export default function MobileMenu({ 
    links, 
    useSolidVariant = false,
    isOpen,
    setIsOpen
}: { 
    links: LinkItem[], 
    useSolidVariant?: boolean,
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
}) {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    
    // Add explicitly "Strona główna" to mobile links
    const allLinks = [{ name: 'Strona główna', href: '/' }, ...links];

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <div className="lg:hidden flex items-center">
            {/* Animated Hamburger / X Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative z-[60] p-2 -mr-2 focus:outline-none flex justify-center items-center h-12 w-12 transition-colors duration-300 ${
                    isOpen
                        ? 'text-[#3385d9]'
                        : useSolidVariant
                            ? 'text-slate-600'
                            : 'text-white'
                }`}
                aria-label="Toggle menu"
            >
                <div className="relative w-6 h-4">
                    <span 
                        className={`absolute left-0 w-full h-[2px] rounded-full bg-current transition-all duration-300 ease-in-out ${
                            isOpen ? 'top-[7px] rotate-45' : 'top-0'
                        }`} 
                    />
                    <span 
                        className={`absolute left-0 top-[7px] w-full h-[2px] rounded-full bg-current transition-all duration-300 ease-in-out ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`} 
                    />
                    <span 
                        className={`absolute left-0 w-full h-[2px] rounded-full bg-current transition-all duration-300 ease-in-out ${
                            isOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'
                        }`} 
                    />
                </div>
            </button>

            {/* Portal for Backdrop and Side Drawer */}
            {mounted && createPortal(
                <div className={`fixed inset-0 z-[40] lg:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                    {/* Backdrop Overlay */}
                    <div
                        className={`absolute inset-0 bg-slate-900/20 backdrop-blur-md transition-all duration-500 ease-in-out ${
                            isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Side Drawer */}
                    <div
                        className={`absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.1)] flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isOpen ? 'translate-x-0' : 'translate-x-[100%]'
                        }`}
                    >
                        {/* Header inside drawer */}
                        <div className="h-[72px] sm:h-[88px] flex items-center px-6">
                            <Image 
                                src="/easyenergy-logo.png" 
                                alt="EasyEnergy Logo" 
                                width={144} 
                                height={36} 
                                className="w-auto h-8 sm:h-9 object-contain"
                            />
                        </div>

                        {/* Links Container */}
                        <div className="flex-col px-6 pt-8 pb-8 overflow-y-auto">
                            <div className="flex flex-col border-t border-slate-200">
                                {allLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <div key={link.href}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`flex items-center justify-between py-5 border-b border-slate-200 transition-colors duration-300 group ${
                                                    isActive ? 'text-[#3385d9]' : 'text-slate-700 hover:text-[#3385d9]'
                                                }`}
                                            >
                                                <span className={`text-lg transition-all duration-300 ${isActive ? 'font-semibold' : 'font-medium'}`}>
                                                    {link.name}
                                                </span>
                                                <FiChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'translate-x-1 text-[#3385d9]' : 'text-slate-300 group-hover:text-[#3385d9] group-hover:translate-x-1'}`} />
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer Piece inside Drawer */}
                        <div className="mt-auto px-10 pb-10 pt-6">
                            <p className="text-sm font-medium text-slate-400">EasyEnergy © {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}
