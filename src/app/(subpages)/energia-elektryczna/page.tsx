import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiHome, FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import { MdFactory, MdAgriculture } from 'react-icons/md';

export const metadata = {
    title: 'Energia Elektryczna | EasyEnergy',
    description: 'Dostarczamy nowoczesne rozwiązania energetyczne oparte na czystych źródłach i transparentnych zasadach. Wybierz segment dopasowany do Twojego stylu życia.',
};

export default function EnergiaElektrycznaPage() {
    return (
        <main className="font-display text-slate-900 antialiased selection:bg-[#3385d9]/20">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8">
                        Energia, która napędza <span className="text-[#3385d9]">Twoją przyszłość.</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                        Dostarczamy nowoczesne rozwiązania energetyczne oparte na czystych źródłach i transparentnych zasadach. Wybierz segment dopasowany do Twojego stylu życia.
                    </p>
                </div>
            </section>

            {/* Interactive Segments Section */}
            <section className="max-w-7xl mx-auto px-6 pb-32">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Nasze segmenty</h2>
                        <p className="text-slate-500">Dopasowane rozwiązania dla każdego rodzaju odbiorcy.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {/* Segment Card 1: Dom */}
                    <div className="group glass-card rounded-3xl p-8 flex flex-col md:flex-row items-center gap-12 hover:-translate-y-1 transition-all duration-500">
                        <div className="flex-1 space-y-6">
                            <div className="size-16 bg-[#3385d9]/10 rounded-2xl flex items-center justify-center text-[#3385d9]">
                                <FiHome className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 tracking-tight text-[#3385d9]">Energia dla Domu</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Stabilność i bezpieczeństwo dla Twojej rodziny. Gwarantujemy stałą cenę przez cały okres trwania umowy oraz dostęp do nowoczesnych systemów Smart Home.
                                </p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <FiCheckCircle className="text-[#3385d9] text-xl" />
                                    Gwarancja stałej ceny przez 24 miesiące
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <FiCheckCircle className="text-[#3385d9] text-xl" />
                                    100% energii z OZE (opcjonalnie)
                                </li>
                            </ul>
                            <Link href="/kontakt" className="inline-block bg-white text-[#3385d9] border border-[#3385d9]/20 px-8 py-3 rounded-xl font-bold hover:bg-[#3385d9] hover:text-white transition-all shadow-sm">
                                Poznaj ofertę
                            </Link>
                        </div>
                        <div className="flex-1 w-full h-[400px] overflow-hidden rounded-2xl relative">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSf6UDen5_OOavaRnwtICq9eNFAl_okwuvCmeBEIdyhZONBpBWQLhRtlCKhX-1TuMN5UhfQ0HjVu9yy8f-tFt5LwJcetFr-PNESyi96ktcY_KczTLsTguGEvJYfVLD0NIqUAPULssjhjbIuO2spiNkyaL5X9lo3PngSjUiGLlNnD_TGkVuI4SHsQQYUn_ZG8ndRgJLHOIJykiEgS7Rf_puNql18Am65BdnC3CfzlAlVzNXRDQdMCK07oqEzaosjvOmosvdCxSQ1xU"
                                alt="Interior of a modern house"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Segment Card 2: Biznes */}
                    <div className="group glass-card rounded-3xl p-8 flex flex-col md:flex-row-reverse items-center gap-12 hover:-translate-y-1 transition-all duration-500">
                        <div className="flex-1 space-y-6">
                            <div className="size-16 bg-[#3385d9]/10 rounded-2xl flex items-center justify-center text-[#3385d9]">
                                <FiBriefcase className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 tracking-tight text-[#3385d9]">Energia dla Biznesu</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Optymalizacja kosztów operacyjnych Twojej firmy. Elastyczne taryfy dopasowane do profilu zużycia i profesjonalny auditing energetyczny w cenie.
                                </p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <FiCheckCircle className="text-[#3385d9] text-xl" />
                                    Indywidualny opiekun biznesowy
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <FiCheckCircle className="text-[#3385d9] text-xl" />
                                    Raporty efektywności co kwartał
                                </li>
                            </ul>
                            <Link href="/kontakt" className="inline-block bg-white text-[#3385d9] border border-[#3385d9]/20 px-8 py-3 rounded-xl font-bold hover:bg-[#3385d9] hover:text-white transition-all shadow-sm">
                                Poznaj ofertę
                            </Link>
                        </div>
                        <div className="flex-1 w-full h-[400px] overflow-hidden rounded-2xl relative">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoB4Bjbf7RmayDBva0AW_5NWa3pczk17ixCB3vdc8dvM4mz5Ftxvbn_5m0Sd7W1-M-CjKg-jqQRmNnH2pcxOUylxAd7XBlECHwbipSiY-4hNv-3hfaOZjJH01nfMqOwnsGGKJ5CfhjLiBV4i_XzrwJ5bhKH9YIafXeNV_hiIKBH1W3Bm6BwV7oo1ZwxaJLRLxpLGNz-TbpiSP_Kx7TKQ3mxGJb4lNiXuerDrVU3kL6cCvY5MzT9PYHAM6oNrJMgD1bKuxchmLkkAA"
                                alt="Corporate office building"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Segment Card 3: Przemysł */}
                    <div className="group glass-card rounded-3xl p-8 flex flex-col md:flex-row items-center gap-12 hover:-translate-y-1 transition-all duration-500">
                        <div className="flex-1 space-y-6">
                            <div className="size-16 bg-[#3385d9]/10 rounded-2xl flex items-center justify-center text-[#3385d9]">
                                <MdFactory className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 tracking-tight text-[#3385d9]">Energia dla Przemysłu</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Rozwiązania wysokiej mocy dla najbardziej wymagających. Integracja z własnymi źródłami OZE oraz zaawansowane systemy stabilizacji napięcia.
                                </p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <FiCheckCircle className="text-[#3385d9] text-xl" />
                                    Taryfy hurtowe bezpośrednio z rynku
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <FiCheckCircle className="text-[#3385d9] text-xl" />
                                    Wsparcie techniczne 24/7/365
                                </li>
                            </ul>
                            <Link href="/kontakt" className="inline-block bg-white text-[#3385d9] border border-[#3385d9]/20 px-8 py-3 rounded-xl font-bold hover:bg-[#3385d9] hover:text-white transition-all shadow-sm">
                                Poznaj ofertę
                            </Link>
                        </div>
                        <div className="flex-1 w-full h-[400px] overflow-hidden rounded-2xl relative">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7HaG6IwaPY1XKOkJLfSjDmrngkCWaEA5lTT19QwX_k-T8qksJMaMiOPsrWynx0ZbiNM3-Pq0a1ZovuC1aYncif9rV25ql3gssrh4LQoTAjL8P9aAMzYQITWJiCMheidWzVTQ87yv25k35Rh4SH2074XHZniwI0ID9kjcaSLy1Fr0aLiI0_QzMoVh7BtC5pZQf6vmWGngPZ6shINY-fed9i6Inbkt6Rh5LG0TPGJ2toXpoWnw8gcYCruA5qWxHbuALBrN4TS78QAo"
                                alt="Industrial facility"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Segment Card 4: Rolnictwo */}
                    <div className="group glass-card rounded-3xl p-8 flex flex-col md:flex-row-reverse items-center gap-12 hover:-translate-y-1 transition-all duration-500">
                        <div className="flex-1 space-y-6">
                            <div className="size-16 bg-[#3385d9]/10 rounded-2xl flex items-center justify-center text-[#3385d9]">
                                <MdAgriculture className="text-3xl" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 tracking-tight text-[#3385d9]">Energia dla Rolnictwa</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    Wspieramy rozwój polskiej wsi. Specjalne programy dofinansowań do fotowoltaiki i pomp ciepła dla gospodarstw rolnych.
                                </p>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <FiCheckCircle className="text-[#3385d9] text-xl" />
                                    Dogodne systemy ratalne
                                </li>
                                <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <FiCheckCircle className="text-[#3385d9] text-xl" />
                                    Pomoc w pozyskaniu dotacji unijnych
                                </li>
                            </ul>
                            <Link href="/kontakt" className="inline-block bg-white text-[#3385d9] border border-[#3385d9]/20 px-8 py-3 rounded-xl font-bold hover:bg-[#3385d9] hover:text-white transition-all shadow-sm">
                                Poznaj ofertę
                            </Link>
                        </div>
                        <div className="flex-1 w-full h-[400px] overflow-hidden rounded-2xl relative">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN2_61CWZDXgx7vGd191qYLKCsMuooM1p4XsV_e6BJit6NJvoH_ceuQoaRNsHD4VD77K-2VRRWlTyKakptOWwR5LLLWMLpLENfqOT2nfby52YZcZAh0b6YCFmfId8qjeCCRicombv1CsUZjbsRrcPmNaZCLYxysaBgzpqwDKtGjdo7x5iuq6sDvg5gw9W8PYBC3iHPUbRpXOd6EBOLBXPQxNOcnKVX8BxOJuQRT9fENihsjyaAtvYDUZUs4Vjc34lBiX6I2eDwdKA"
                                alt="Sustainable farm"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
