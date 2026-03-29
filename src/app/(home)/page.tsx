import Link from "next/link";
import RoadMap from "./RoadMap";
import { FiArrowRight, FiTrendingDown, FiShield, FiCheckCircle } from "react-icons/fi";

export default function Home() {
    return (
        <main className="relative overflow-hidden selection:bg-[#3385d9]/20 font-display transition-all duration-500 bg-slate-50">

            {/* Centralny, w pełni skupiony na typografii i konwersji Hero - ZERO układu "zdjęcie po prawej" */}
            <section className="relative min-h-screen flex flex-col justify-between items-center pt-28 sm:pt-32 pb-16 z-30">
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

                <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center">
                    

                    {/* Główny Nagłówek */}
                    <h1 className="text-4xl sm:text-5xl md:text-[5rem] lg:text-[6.5rem] font-black text-white leading-[1.0] md:leading-[0.95] tracking-tight mb-18 max-w-4xl drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                        Twoja energia.<br />
                        <span className="bg-gradient-to-r from-[#3385d9] via-[#66b3ff] to-[#3385d9] bg-clip-text text-transparent inline-block pb-2">
                            Pewna przyszłość.
                        </span>
                    </h1>

                    {/* Podtytuł */}
                    <p className="text-lg sm:text-xl lg:text-2xl text-slate-200/95 leading-relaxed max-w-2xl mx-auto mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                        Osiągaj wyższe zyski z optymalizacji kosztów gazu i prądu. Kompleksowe doradztwo rynkowe połączone z pełnym wsparciem prawno-procesowym.
                    </p>

                    {/* Przyciski Akcji */}
                    <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto mb-10 relative">
                        {/* Subtelny glow za pierwszym guzikiem */}
                        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#66b3ff]/25 blur-[55px] rounded-full z-0 hidden sm:block"></div>
                        
                        <Link
                            href="/kontakt"
                            className="inline-flex justify-center items-center w-full sm:w-auto px-10 py-5 text-[17px] sm:text-lg font-bold text-white bg-[#3385d9] rounded-2xl hover:bg-[#286bb3] shadow-[0_4px_30px_rgba(51,133,217,0.4)] hover:shadow-[0_8px_40px_rgba(51,133,217,0.5)] hover:-translate-y-1 transition-all duration-300 relative z-10"
                        >
                            Rozpocznij współpracę
                        </Link>
                        <Link
                            href="/energia-elektryczna"
                            className="inline-flex justify-center items-center w-full sm:w-auto px-10 py-5 text-[17px] sm:text-lg font-bold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.20)] transition-all duration-300 group relative z-10"
                        >
                            Nasza oferta
                            <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </div>

                </div>

                {/* Piękny szklany pasek z metrykami zaufania i uderzającymi argumentami (zamiast standardowego rzędu ikon) */}
                <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-20">
                     <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-8 rounded-[2rem] shadow-[0_18px_70px_rgba(0,0,0,0.35)] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
                         
                         <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 group">
                             <div className="w-12 h-12 bg-white/10 text-[#66b3ff] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/15">
                                 <FiTrendingDown className="w-6 h-6" />
                             </div>
                             <h4 className="text-white font-bold mb-1">Optymalizacja KFE</h4>
                             <p className="text-white/70 text-sm font-medium">Zakupy w najniższych możliwych dołkach giełdowych.</p>
                         </div>

                         <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 pt-6 md:pt-0 group">
                             <div className="w-12 h-12 bg-white/10 text-[#66b3ff] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/15">
                                 <FiShield className="w-6 h-6" />
                             </div>
                             <h4 className="text-white font-bold mb-1">Bezpieczeństwo Prawne</h4>
                             <p className="text-white/70 text-sm font-medium">Brak ukrytych opłat i zero niekorzystnych zapisów umownych.</p>
                         </div>

                         <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 pt-6 md:pt-0 group">
                             <div className="w-12 h-12 bg-white/10 text-[#66b3ff] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/15">
                                 <FiCheckCircle className="w-6 h-6" />
                             </div>
                             <h4 className="text-white font-bold mb-1">Gwarancja Serwisu</h4>
                             <p className="text-white/70 text-sm font-medium">Całodobowy kontakt i wsparcie eksperckie w cenie procesu.</p>
                         </div>

                     </div>
                </div>
            </section>

            <div className="relative">
                <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-slate-950/10 to-transparent pointer-events-none z-40" />
                <RoadMap />
            </div>
        </main>
    );
}
