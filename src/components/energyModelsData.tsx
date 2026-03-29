import { FiTarget, FiShield, FiActivity, FiLayers } from 'react-icons/fi';
import React from 'react';
import type { EnergyModel } from './EnergyModelsAdvisor';

export const allModels: EnergyModel[] = [
    {
        id: 'spot-cap',
        goalLabel: 'Bezpieczny kompromis',
        modelName: 'Spot z Cap',
        badge: 'Rekomendowane dla większości firm',
        description: 'Łączymy zakupy po dynamicznych cenach rynkowych RDN z ustaloną z góry maksymalną granicą ceny (Cap). Zyskujesz, gdy na giełdzie jest tanio, ale jesteś chroniony przed ekstremami.',
        whyThis: 'To doskonały kompromis: korzystasz z rynkowych spadków na co dzień, zachowując "spadochron" ochronny na wypadek nagłego kryzysu giełdowego.',
        benefits: [
            'Twój budżet chroni gwarantowana maksymalna cena zakupu',
            'Gdy rynek spada, płacisz dokładnie tyle, ile wynoszą rynkowe minima',
        ],
        icon: React.createElement(FiTarget, { className: 'text-3xl' }),
        image: '/spot-cap.png',
        color: 'text-[#3385d9]',
        bgColor: 'bg-[#3385d9]/10',
    },
    {
        id: 'stala-cena',
        goalLabel: 'Przewidywalne koszty',
        modelName: 'Stała cena',
        badge: 'Najwyższe bezpieczeństwo',
        description: 'Gwarancja stałej ceny przez cały okres umowy. Zabezpiecza przed wzrostem rynkowych stawek. Możemy zawierać umowy od jednego roku do kilkunastu lat — nawet wieloletnie z gwarantowaną stawką.',
        whyThis: 'Idealne rozwiązanie, jeśli zależy Ci na sztywnym i absolutnie przewidywalnym budżecie bez żadnych niespodzianek na fakturze w ujęciu wieloletnim.',
        benefits: [
            'Pełna przewidywalność kosztów w długim okresie',
            'Całkowita odporność na wahania i gwałtowne skoki cen rynkowych',
        ],
        icon: React.createElement(FiShield, { className: 'text-3xl' }),
        image: '/stala-cena.png',
        color: 'text-[#3385d9]',
        bgColor: 'bg-[#3385d9]/10',
    },
    {
        id: 'spot',
        goalLabel: 'Niższe ceny (akceptuję zmienność)',
        modelName: 'Spot',
        badge: 'Największy potencjał oszczędności',
        description: 'W tym modelu zakupy rozliczane są w oparciu o bieżące notowania na Rynku Dnia Następnego. Ceny zmieniają się w każdej godzinie doby, każdego dnia w roku — płacisz dokładnie tyle, ile wynosi aktualna cena rynkowa.',
        whyThis: 'Wybierz ten model, jeśli jesteś w stanie zaakceptować ryzyko giełdowe w zamian za możliwość znacznych oszczędności w tzw. "dolinach cenowych".',
        benefits: [
            'Rozliczenia bezpośrednio według bieżących wahań stawek rynkowych',
            'Możliwość dynamicznej optymalizacji zużycia w najtańszych godzinach',
        ],
        icon: React.createElement(FiActivity, { className: 'text-3xl' }),
        image: '/spot.png',
        color: 'text-[#3385d9]',
        bgColor: 'bg-[#3385d9]/10',
    },
    {
        id: 'transze',
        goalLabel: 'Pełna kontrola i strategia',
        modelName: 'Transze',
        badge: 'Dla analityków i strategów',
        description: 'Sam decydujesz, kiedy i jaką partię (transzę) zakontraktujesz po stałej cenie na przyszłość — na rok, kwartał lub konkretny miesiąc. Niezakontraktowana część rozliczana jest automatycznie według bieżącej giełdy (Spot).',
        whyThis: 'Skierowane do firm z aktywną flotą zakupową, pragnących uśrednić cenę, świadomie łapiąc różne okazje rynkowe na przestrzeni kwartałów lub lat.',
        benefits: [
            'Pełna swoboda w kontraktowaniu dowolnych partii wolumenu',
            'Niezakontraktowane części rozliczane jako Spot',
        ],
        icon: React.createElement(FiLayers, { className: 'text-3xl' }),
        image: '/transze.png',
        color: 'text-[#3385d9]',
        bgColor: 'bg-[#3385d9]/10',
    },
];
