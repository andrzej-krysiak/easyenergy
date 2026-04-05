'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiCheckCircle, FiInfo, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { allModels } from './energyModelsData';

export interface EnergyModel {
    id: string;
    goalLabel: string;
    modelName: string;
    badge: string;
    description: string;
    whyThis: string;
    benefits: string[];
    icon: React.ReactNode;
    image: string;
    color: string;
    bgColor: string;
}

interface EnergyModelsAdvisorProps {
    /** IDs of models to display. If omitted, all models are shown. */
    modelIds?: string[];
    ctaHref?: string;
    ctaLabel?: string;
}

export default function EnergyModelsAdvisor({
    modelIds,
    ctaHref = '/kontakt',
    ctaLabel,
}: EnergyModelsAdvisorProps) {
    const models = modelIds
        ? allModels.filter((m) => modelIds.includes(m.id))
        : allModels;
    const [activeId, setActiveId] = useState(models[0].id);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const activeModel = models.find((m) => m.id === activeId) || models[0];

    // Handle clicking outside and scrolling to close
    useEffect(() => {
        const handleClose = () => {
            if (isDropdownOpen) setIsDropdownOpen(false);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('scroll', handleClose, { passive: true });
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleClose);
        };
    }, [isDropdownOpen]);

    const handleSelectModel = (id: string) => {
        setActiveId(id);
        setIsDropdownOpen(false);
    };

    return (
        <div className="w-full relative z-10 font-display">
            {/* TABS (Goal Selector) */}
            <div className="mb-6 lg:mb-8 relative z-30">
                {/* Mobile Dropdown - Visible only on < sm */}
                <div className="sm:hidden relative max-w-[280px] mx-auto" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center bg-[#3385d9] border border-[#3385d9] rounded-2xl py-4 text-white font-bold shadow-none active:scale-[0.98] transition-all relative z-50 overflow-hidden"
                    >
                        {/* Empty spacer to balance the icon on the right for perfect text centering */}
                        <div className="w-6 shrink-0" />
                        <span className="flex-grow text-[14px] text-center leading-tight">{activeModel.goalLabel}</span>
                        <div className="w-12 shrink-0 flex items-center justify-center">
                            <FiChevronDown className={`text-xl transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                    </button>

                    {/* Dropdown Menu - No fixed backdrop, just local overlay */}
                    {isDropdownOpen && (
                        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-none overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200 origin-top">
                            {models.map((model) => (
                                <button
                                    key={model.id}
                                    onClick={() => handleSelectModel(model.id)}
                                    className={`w-full text-center px-6 py-4 text-[14px] font-bold transition-all
                                        ${activeId === model.id 
                                            ? 'bg-blue-50 text-[#3385d9]' 
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-[#3385d9]'
                                        }
                                    `}
                                >
                                    {model.goalLabel}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop Tabs - Visible only on sm+ */}
                <div className="hidden sm:flex flex-wrap justify-center gap-4">
                    {models.map((model) => {
                        const isActive = activeId === model.id;
                        return (
                            <button
                                key={model.id}
                                onClick={() => setActiveId(model.id)}
                                className={`shrink-0 transition-all duration-500 rounded-2xl px-8 py-4 text-[15px] font-bold outline-none relative overflow-hidden cursor-pointer
                                    ${isActive
                                        ? 'bg-[#3385d9] text-white border border-[#3385d9] shadow-[0_10px_25px_-8px_rgba(51,133,217,0.4)]'
                                        : 'bg-white border border-slate-200 text-slate-500 shadow-[0_4px_20px_-4px_rgba(51,133,217,0.1)] hover:text-[#3385d9] hover:bg-blue-50/50 hover:border-[#3385d9]/30 hover:-translate-y-1 hover:shadow-[0_8px_20px_-8px_rgba(51,133,217,0.25)] active:scale-95'
                                    }
                                `}
                            >
                                <span className="relative z-10">{model.goalLabel}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* DYNAMIC CONTENT AREA */}
            <div className={`relative bg-slate-50/10 rounded-[2.5rem] p-5 sm:p-6 lg:p-8 overflow-hidden shadow-[0_40px_100px_-20px_rgba(15,23,42,0.08),0_0_80px_-20px_rgba(51,133,217,0.3)] border border-slate-200/50 transition-all duration-500 ${isDropdownOpen ? 'blur-sm pointer-events-none' : 'blur-0'}`}>
                <div
                    key={activeModel.id}
                    className="relative z-10 animate-[tab-enter_0.5s_cubic-bezier(0.2,0.8,0.2,1)_forwards] space-y-8 lg:space-y-10"
                >
                    {/* TOP ROW: Header & Advisor Box */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-20 items-start">
                        {/* LEFT: Model Info */}
                        <div className="flex-1 w-full space-y-4">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f7ff] border border-[#3385d9]/20 text-[#3385d9] text-xs sm:text-sm font-bold mb-3 lg:mb-4 font-mono tracking-tight shadow-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3385d9] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3385d9]"></span>
                                    </span>
                                    {activeModel.badge}
                                </div>

                                <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-5">
                                    <div className={`size-12 sm:size-14 rounded-2xl flex items-center justify-center shrink-0 ${activeModel.bgColor} ${activeModel.color}`}>
                                        {activeModel.icon}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black tracking-tight text-slate-900 leading-[1.1]">
                                        {activeModel.modelName}
                                    </h3>
                                </div>

                                <p className="text-slate-600 text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed max-w-2xl">
                                    {activeModel.description}
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Advisor Box (Aligned to Top) */}
                        <div className="w-full lg:w-[42%] xl:w-[38%] shrink-0">
                            <div className="bg-slate-100/80 border border-slate-200/80 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)] rounded-2xl p-5 transition-all duration-300 hover:bg-slate-200/70">
                                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#3385d9] uppercase tracking-widest mb-3">
                                    <FiInfo className="text-sm" /> Dlaczego ten wybór?
                                </div>
                                <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-[15px] text-pretty">
                                    {activeModel.whyThis}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM ROW: Benefits & CTA (Horizontal split) */}
                    <div className="pt-8 lg:pt-10 border-t border-slate-200/50 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        {/* Benefits in 2-column grid to make them "one row" on desktop */}
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 flex-1">
                            {activeModel.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <FiCheckCircle className="text-[#3385d9] text-[22px] shrink-0 mt-0.5" />
                                    <span className="text-sm sm:text-base font-bold text-slate-700/80 leading-snug">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <div className="shrink-0 w-full sm:w-auto sm:self-center lg:self-auto flex justify-start sm:justify-center lg:justify-start">
                            <Link href={ctaHref} className="group inline-flex w-full sm:max-w-[280px] items-center justify-center bg-[#3385d9] text-white px-6 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold text-[15px] sm:text-base hover:bg-[#286bb5] hover:shadow-[0_15px_30px_rgba(51,133,217,0.3)] hover:-translate-y-1 transition-all duration-300">
                                {ctaLabel || `Wybierz ${activeModel.modelName}`}
                                <FiChevronRight className="ml-2 text-xl group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
