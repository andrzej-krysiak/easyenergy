import Link from "next/link";
import RoadMap from "./RoadMap";
import OfferSection from "./OfferSection";
import HeroButtons from "./HeroButtons";
import { FiTrendingDown, FiShield, FiCheckCircle } from "react-icons/fi";

export default function Home() {
    return (
        <main className="relative overflow-hidden selection:bg-[#3385d9]/20 font-display transition-all duration-500 bg-slate-50">

            {/* Centralny, w pełni skupiony na typografii i konwersji Hero - ZERO układu "zdjęcie po prawej" */}
            <section className="relative min-h-[100svh] flex flex-col justify-center items-center pt-24 lg:pt-28 xl:pt-32 pb-12 sm:pb-16 z-30">
                {/* Cinematic background */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/home-hero.webp')" }}
                        aria-hidden="true"
                    />
                    {/* Darken for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/25" />
                    {/* Brand wash */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/45 via-[#0b2a4a]/18 to-transparent mix-blend-multiply" />
                    {/* Subtle highlight to keep it “alive” */}
                    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#3385d9]/20 blur-[120px]" />
                    {/* Texture grid overlay (keeps visual identity) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,#000_60%,transparent_100%)]" />
                    {/* Top fade under navbar */}
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-950/70 to-transparent" />
                </div>

                <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12 w-full relative z-10">
                    {/* Hero Content Group */}
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
                        {/* Główny Nagłówek */}
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.0] md:leading-[0.95] tracking-tight mb-8 lg:mb-12 max-w-4xl drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)] animate-in-up">
                            Twoja energia.<br />
                            <span className="bg-gradient-to-r from-[#3385d9] via-[#66b3ff] to-[#3385d9] bg-clip-text text-transparent inline-block pb-2">
                                Pewna przyszłość.
                            </span>
                        </h1>

                        {/* Podtytuł */}
                        <p className="text-base sm:text-lg lg:text-xl text-slate-200/95 leading-relaxed max-w-2xl mx-auto mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)] animate-in-up delay-100">
                            Osiągaj wyższe zyski z optymalizacji kosztów gazu i prądu. Kompleksowe doradztwo rynkowe połączone z pełnym wsparciem prawno-procesowym.
                        </p>

                        {/* Przyciski Akcji */}
                        <HeroButtons />
                    </div>

                    {/* Piękny szklany pasek z metrykami zaufania i uderzającymi argumentami */}
                    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <div className="p-3 sm:p-6 md:p-8 lg:p-10 bg-white/10 backdrop-blur-[40px] border border-white/20 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_18px_70px_rgba(0,0,0,0.35)] flex flex-row items-stretch justify-between divide-x divide-white/15 animate-in-up delay-300 transform-gpu">
                            
                            <div className="flex-1 flex flex-col items-center justify-center md:items-start text-center md:text-left px-2 sm:px-6 group">
                                <div className="size-8 sm:size-10 bg-white/10 text-[#66b3ff] rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform border border-white/15">
                                    <FiTrendingDown className="w-4 h-4 sm:w-5 h-5" />
                                </div>
                                <h4 className="text-white font-bold mb-1 text-[10px] sm:text-xs md:text-sm leading-tight">Optymalizacja KFE</h4>
                                <p className="hidden sm:block text-white/70 text-xs font-medium">Zakupy w najniższych możliwych dołkach giełdowych.</p>
                            </div>

                             <div className="flex-1 flex flex-col items-center justify-center md:items-start text-center md:text-left px-2 sm:px-6 group">
                                <div className="size-8 sm:size-10 bg-white/10 text-[#66b3ff] rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform border border-white/15">
                                    <FiShield className="w-4 h-4 sm:w-5 h-5" />
                                </div>
                                <h4 className="text-white font-bold mb-1 text-[10px] sm:text-xs md:text-sm leading-tight">Bezpieczeństwo Prawne</h4>
                                <p className="hidden sm:block text-white/70 text-xs font-medium">Brak ukrytych opłat i zero niekorzystnych zapisów umownych.</p>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center md:items-start text-center md:text-left px-2 sm:px-6 group">
                                <div className="size-8 sm:size-10 bg-white/10 text-[#66b3ff] rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform border border-white/15">
                                    <FiCheckCircle className="w-4 h-4 sm:w-5 h-5" />
                                </div>
                                <h4 className="text-white font-bold mb-1 text-[10px] sm:text-xs md:text-sm leading-tight">Gwarancja Serwisu</h4>
                                <p className="hidden sm:block text-white/70 text-xs font-medium">Całodobowy kontakt i wsparcie eksperckie w cenie procesu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative">
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-950/10 to-transparent pointer-events-none z-40" />
                <RoadMap />
                <div id="oferta">
                    <OfferSection />
                </div>
            </div>
        </main>
    );
}
