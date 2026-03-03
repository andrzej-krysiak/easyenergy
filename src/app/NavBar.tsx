import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function NavBar() {
    const links = [
        { name: 'Energia Elektryczna', href: '/energia-elektryczna' },
        { name: 'Paliwo Gazowe', href: '/paliwo-gazowe' },
        { name: 'Wsparcie Prawne', href: '/wsparcie-prawne' },
        { name: 'Kontakt', href: '/kontakt' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-slate-50 backdrop-blur-md border-b border-indigo-200 shadow-sm transition-all duration-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo po lewej stronie */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
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

                    {/* Desktop Links - Server Side Rendered */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-slate-600 text-base hover:text-blue-600 font-medium transition-colors duration-300"
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
