'use client';

import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Printer, 
  User, 
  FileText, 
  TrendingDown, 
  Briefcase,
  Info,
  CalendarCheck,
  Check
} from 'lucide-react';

export default function ChecklistPage() {
  const { t } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handlePrint = () => {
    window.print();
  };

  const toggleItem = (sectionId: string, index: number) => {
    const key = `${sectionId}-${index}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const sections = [
    {
      id: 'personal',
      icon: <User className="w-6 h-6" />,
      data: t.checklist.sections.personal
    },
    {
      id: 'income',
      icon: <FileText className="w-6 h-6" />,
      data: t.checklist.sections.income
    },
    {
      id: 'deductions',
      icon: <TrendingDown className="w-6 h-6" />,
      data: t.checklist.sections.deductions
    },
    {
      id: 'business',
      icon: <Briefcase className="w-6 h-6" />,
      data: t.checklist.sections.business
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden pb-20">
      {/* Hero Section - Hidden on Print */}
      <section className="relative pt-16 pb-20 overflow-hidden print:hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(21,128,61,0.05),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-green-100"
            >
              {t.checklist.heroBadge}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]"
            >
              {t.checklist.heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed font-medium bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/50 shadow-sm"
            >
              {t.checklist.heroSub}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={handlePrint}
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
            >
              <Printer className="w-5 h-5" />
              {t.checklist.printBtn}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Checklist Content */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative print:shadow-none print:border-none print:p-0">
          
          {/* Header for Print */}
          <div className="hidden print:block mb-10 border-b-2 border-green-700 pb-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-2 uppercase tracking-tight">Lili’s Tax Services, LLC</h1>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{t.checklist.heroTitle} (2026)</p>
              </div>
              <div className="text-right text-xs text-slate-400 font-bold uppercase tracking-widest">
                (509) 902-0922 • Union Gap, WA
              </div>
            </div>
          </div>

          <div className="mb-16 print:mb-8">
            <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-2xl border border-slate-100 print:bg-white print:p-0 print:border-none">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-green-700 shadow-sm shrink-0 mt-1 border border-slate-100 print:hidden">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 print:text-xl">{t.checklist.encouragementTitle}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {t.checklist.encouragementText}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 print:grid-cols-1 print:gap-y-10">
            {sections.map((section, idx) => (
              <motion.div 
                key={section.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="print:opacity-100 print:translate-x-0 break-inside-avoid"
              >
                <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4 print:mb-4">
                  <div className="p-3 bg-slate-50 text-green-700 rounded-xl print:hidden">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight print:text-lg">
                    {section.data.title}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {section.data.items.map((item, i) => {
                    const isChecked = checkedItems[`${section.id}-${i}`];
                    return (
                      <li key={i} className="flex gap-4 items-start group relative">
                        <button 
                          onClick={() => toggleItem(section.id, i)}
                          className={`relative flex items-center justify-center w-6 h-6 rounded-md border-2 mt-0.5 transition-all shrink-0 print:border-slate-300 ${
                            isChecked ? 'bg-green-600 border-green-600' : 'border-slate-200 group-hover:border-green-600/50'
                          }`}
                        >
                          <Check className={`w-3.5 h-3.5 text-white transition-opacity ${isChecked ? 'opacity-100' : 'opacity-0'}`} />
                        </button>
                        <span 
                          onClick={() => toggleItem(section.id, i)}
                          className={`text-slate-600 font-medium leading-tight pt-0.5 cursor-pointer select-none transition-all print:text-sm ${
                            isChecked ? 'text-slate-400 line-through decoration-slate-300' : 'group-hover:text-slate-900'
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA - Hidden on Print */}
          <div className="mt-20 pt-12 border-t border-slate-100 print:hidden">
            <div className="bg-green-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-green-100">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{t.checklist.footerText}</h3>
                <p className="text-green-700 font-bold uppercase tracking-widest text-sm">{t.checklist.footerSub}</p>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 bg-green-700 text-white px-10 py-5 rounded-2xl font-bold hover:bg-green-800 transition-all shadow-xl shadow-green-700/20 active:scale-95 group"
              >
                <CalendarCheck className="w-6 h-6" />
                <span>{t.checklist.footerBtn}</span>
              </Link>
            </div>
          </div>

          {/* Educational Footer - Print Only */}
          <div className="hidden print:block mt-16 pt-8 border-t-2 border-slate-100">
            <div className="flex gap-8 items-start">
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 mb-2 font-serif italic">{t.checklist.printFooter.quote}</p>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {t.checklist.printFooter.disclaimer}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-1">{t.checklist.printFooter.cta}</p>
                <p className="text-lg font-black text-green-700 tracking-tight">(509) 902-0922</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action for Mobile - Hidden on Print */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-4 md:hidden print:hidden">
        <button 
          onClick={handlePrint}
          className="w-14 h-14 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform"
        >
          <Printer className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
