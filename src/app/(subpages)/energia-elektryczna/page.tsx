import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle, FiShield, FiActivity, FiTarget, FiLayers, FiChevronRight } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import ScrollReveal from '../../../components/ScrollReveal';

export const metadata = {
    title: 'Energia Elektryczna | EasyEnergy',
    description: 'Dostarczamy nowoczesne rozwiązania energetyczne oparte na czystych źródłach i transparentnych zasadach. Wybierz segment dopasowany do Twojego stylu życia.',
};

export default function EnergiaElektrycznaPage() {
    return (
        <main className="font-display text-slate-900 antialiased selection:bg-[#3385d9]/20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 pt-26 pb-16 relative z-10">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-base font-medium mb-10">
                    <Link href="/" className="text-slate-500 hover:text-slate-900 transition-colors">
                        Strona główna
                    </Link>
                    <FiChevronRight className="text-slate-400 text-lg" />
                    <span className="text-[#3385d9]">Energia elektryczna</span>
                </nav>

                <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/70 shadow-[0_30px_120px_rgba(2,6,23,0.12)]">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/energia-elektryczna.png')" }}
                        aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/15" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10" />

                    <div className="relative px-7 pt-34 pb-6 sm:px-10 sm:pt-40 sm:pb-8 lg:px-14 lg:pt-52 lg:pb-12">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.02] mb-6">
                                Energia, która napędza{" "}
                                <span className="bg-gradient-to-r from-[#93c5fd] via-[#66b3ff] to-white text-transparent bg-clip-text">
                                    Twoją przyszłość
                                </span>
                                .
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed max-w-2xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                                Dostarczamy nowoczesne rozwiązania energetyczne oparte na czystych źródłach i transparentnych zasadach. Wybierz segment dopasowany do Twojego stylu życia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Segments Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 pb-12">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Modele zakupu energii</h2>
                        <p className="text-slate-500 mb-8">Zoptymalizuj koszty za pomocą odpowiedniej strategii zakupu energii elektrycznej.</p>
                        <IoIosArrowDown className="text-4xl text-[#3385d9] animate-bounce mx-auto" />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {/* Segment Card 1: Stała cena */}
                    <ScrollReveal>
                        <div className="group glass-card rounded-3xl p-8 flex flex-col md:flex-row items-center gap-12 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(51,133,217,0.15)] hover:border-[#3385d9]/40 transition-all duration-500">
                            <div className="flex-1 space-y-6">
                                <div className="size-16 bg-[#3385d9]/10 rounded-2xl flex items-center justify-center text-[#3385d9] group-hover:scale-110 transition-transform duration-500">
                                    <FiShield className="text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight text-[#3385d9]">Stała cena</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        Gwarancja stałej ceny przez cały okres umowy. Możemy zawierać umowy krótkoterminowe na rok, ale również umowy na dłuższe okresy kilkuletnie, a nawet wieloletnie umowy gwarantujące stałą cenę do końca 2035 roku. Zyskujemy w ten sposób przewidywalność kosztów w dłuższym okresie.
                                    </p>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <FiCheckCircle className="text-[#3385d9] text-xl" />
                                        Pełna przewidywalność kosztów w dłuższym okresie
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <FiCheckCircle className="text-[#3385d9] text-xl" />
                                        Zabezpieczenie przed wzrostem stawek budżetowych
                                    </li>
                                </ul>
                                <Link href="/kontakt" className="inline-block bg-white text-[#3385d9] border border-[#3385d9]/20 px-8 py-3 rounded-xl font-bold hover:bg-[#3385d9] hover:text-white transition-all shadow-sm">
                                    Zapytaj o szczegóły
                                </Link>
                            </div>
                            <div className="flex-1 w-full h-[400px] overflow-hidden rounded-2xl relative">
                                <Image
                                    src="/stala-cena.png"
                                    alt="Stała cena interior"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:brightness-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Segment Card 2: Spot */}
                    <ScrollReveal>
                        <div className="group glass-card rounded-3xl p-8 flex flex-col md:flex-row-reverse items-center gap-12 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(51,133,217,0.15)] hover:border-[#3385d9]/40 transition-all duration-500">
                            <div className="flex-1 space-y-6">
                                <div className="size-16 bg-[#3385d9]/10 rounded-2xl flex items-center justify-center text-[#3385d9] group-hover:scale-110 transition-transform duration-500">
                                    <FiActivity className="text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight text-[#3385d9]">Spot</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        W tym modelu zakupy energii rozliczane są w oparciu o notowania na Rynku Dnia Następnego. Ceny energii zmieniają się w każdej godzinie doby, każdego dnia w roku. Takie rozwiązanie gwarantuje nam zawsze rynkową cenę zakupu energii elektrycznej.
                                    </p>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <FiCheckCircle className="text-[#3385d9] text-xl" />
                                        Rozliczenia bezpośrednio w oparciu o bieżący rynek
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <FiCheckCircle className="text-[#3385d9] text-xl" />
                                        Dynamiczne korzyści z dolin cenowych
                                    </li>
                                </ul>
                                <Link href="/kontakt" className="inline-block bg-white text-[#3385d9] border border-[#3385d9]/20 px-8 py-3 rounded-xl font-bold hover:bg-[#3385d9] hover:text-white transition-all shadow-sm">
                                    Zapytaj o szczegóły
                                </Link>
                            </div>
                            <div className="flex-1 w-full h-[400px] overflow-hidden rounded-2xl relative">
                                <Image
                                    src="/spot.png"
                                    alt="Spot model rynek"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:brightness-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Segment Card 3: Spot z Cap */}
                    <ScrollReveal>
                        <div className="group glass-card rounded-3xl p-8 flex flex-col md:flex-row items-center gap-12 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(51,133,217,0.15)] hover:border-[#3385d9]/40 transition-all duration-500">
                            <div className="flex-1 space-y-6">
                                <div className="size-16 bg-[#3385d9]/10 rounded-2xl flex items-center justify-center text-[#3385d9] group-hover:scale-110 transition-transform duration-500">
                                    <FiTarget className="text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight text-[#3385d9]">Spot z Cap</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        W tym modelu zakupy energii rozliczane są w oparciu o notowania na Rynku Dnia Następnego, jednak mamy ustaloną maksymalną cenę zakupu energii w danej godzinie. Dzięki takiemu rozwiązaniu łączymy zakupy w cenach rynkowych z zabezpieczeniem na wypadek gwałtownego wzrostu cen energii.
                                    </p>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <FiCheckCircle className="text-[#3385d9] text-xl" />
                                        Bezpieczeństwo granicznej ceny maksymalnej
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <FiCheckCircle className="text-[#3385d9] text-xl" />
                                        Korzystanie ze zniżek na rynku bieżącym
                                    </li>
                                </ul>
                                <Link href="/kontakt" className="inline-block bg-white text-[#3385d9] border border-[#3385d9]/20 px-8 py-3 rounded-xl font-bold hover:bg-[#3385d9] hover:text-white transition-all shadow-sm">
                                    Zapytaj o szczegóły
                                </Link>
                            </div>
                            <div className="flex-1 w-full h-[400px] overflow-hidden rounded-2xl relative">
                                <Image
                                    src="/spot-cap.png"
                                    alt="Spot z Cap rynek"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:brightness-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Segment Card 4: Transze */}
                    <ScrollReveal>
                        <div className="group glass-card rounded-3xl p-8 flex flex-col md:flex-row-reverse items-center gap-12 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(51,133,217,0.15)] hover:border-[#3385d9]/40 transition-all duration-500">
                            <div className="flex-1 space-y-6">
                                <div className="size-16 bg-[#3385d9]/10 rounded-2xl flex items-center justify-center text-[#3385d9] group-hover:scale-110 transition-transform duration-500">
                                    <FiLayers className="text-3xl" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold mb-4 tracking-tight text-[#3385d9]">Transze</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        Możemy zlecać naszemu sprzedawcy energii kiedy i jaką ilość energii ma dla nas zakontraktować w stałej cenie. Możemy zlecać zakup w transzach na cały rok, na kwartał, a nawet na konkretny miesiąc. Wolumen, którego nie zakontraktowaliśmy będzie rozliczany według notowań na Rynku Dnia Następnego.
                                    </p>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <FiCheckCircle className="text-[#3385d9] text-xl" />
                                        Zakup energii w odpowiednich częściach (wolumenie)
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                        <FiCheckCircle className="text-[#3385d9] text-xl" />
                                        Dowolnie elastyczna struktura i optymalizacja
                                    </li>
                                </ul>
                                <Link href="/kontakt" className="inline-block bg-white text-[#3385d9] border border-[#3385d9]/20 px-8 py-3 rounded-xl font-bold hover:bg-[#3385d9] hover:text-white transition-all shadow-sm">
                                    Zapytaj o szczegóły
                                </Link>
                            </div>
                            <div className="flex-1 w-full h-[400px] overflow-hidden rounded-2xl relative">
                                <Image
                                    src="/transze.png"
                                    alt="Transze na zakupie"
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:brightness-[1.03]"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Doradztwo Eksperckie CTA */}
            <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 py-12">
                <div className="relative overflow-hidden bg-[#3385d9] rounded-xl p-8 md:p-12">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Doradztwo eksperckie</h2>
                            <p className="text-blue-50 text-lg leading-relaxed">
                                Ostateczny wybór modelu zakupu energii elektrycznej zależy od potrzeb i profilu zużycia energii w Twoim przedsiębiorstwie. Skonsultuj się z naszym ekspertem, aby dobrać rozwiązanie idealne dla Twojego biznesu.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <Link href="/umow-spotkanie" className="inline-block bg-white text-[#3385d9] hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-black/10 text-center">
                                Umów bezpłatną konsultację
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </main>
    );
}
