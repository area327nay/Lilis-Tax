'use client';

import React from 'react';
import { useLanguage } from '../../LanguageContext';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ShieldCheck, 
  ReceiptText, 
  Building2, 
  BookOpenText, 
  Calculator, 
  Monitor, 
  User, 
  CalendarDays, 
  LineChart, 
  Briefcase 
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      id: 'tax',
      title: t.services.taxPrep,
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center scale-90">
          <div className="absolute top-1 left-1 text-slate-300">
            <ReceiptText strokeWidth={1.2} className="w-12 h-12" />
          </div>
          <div className="absolute bottom-1 right-1 bg-white p-1 rounded-lg shadow-md border border-slate-200 text-green-700">
            <ShieldCheck strokeWidth={1.5} className="w-6 h-6" />
          </div>
        </div>
      ),
      description: t.services.taxPrepDesc,
      details: t.services.taxPrepDetails
    },
    {
      id: 'bizformation',
      title: t.services.bizFormation,
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center scale-90">
          <div className="absolute top-1 left-1 text-slate-300">
            <Building2 strokeWidth={1.2} className="w-12 h-12" />
          </div>
          <div className="absolute bottom-1 right-1 bg-white p-1 rounded-lg shadow-md border border-slate-200 text-green-700">
            <Briefcase strokeWidth={1.5} className="w-6 h-6" />
          </div>
        </div>
      ),
      description: t.services.bizFormationDesc,
      details: t.services.bizFormationDetails
    },
    {
      id: 'bookkeeping',
      title: t.services.bookkeeping,
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center scale-90">
          <div className="absolute top-1 left-1 text-slate-300">
            <BookOpenText strokeWidth={1.2} className="w-12 h-12" />
          </div>
          <div className="absolute bottom-1 right-1 bg-white p-1 rounded-lg shadow-md border border-slate-200 text-green-700">
            <Calculator strokeWidth={1.5} className="w-6 h-6" />
          </div>
        </div>
      ),
      description: t.services.bookkeepingDesc,
      details: t.services.bookkeepingDetails
    },
    {
      id: 'payroll',
      title: t.services.payroll,
      icon: (
        <div className="relative w-16 h-16 flex items-center justify-center scale-90">
          <div className="absolute top-1 left-1 text-slate-300">
            <Monitor strokeWidth={1.2} className="w-12 h-12" />
          </div>
          <div className="absolute top-3 left-4 text-green-600/80">
            <LineChart strokeWidth={2} className="w-4 h-4" />
          </div>
          <div className="absolute bottom-0 right-0 bg-white p-1 rounded-lg shadow-md border border-slate-200 text-green-700 flex items-center gap-0.5">
            <User strokeWidth={1.5} className="w-4 h-4" />
            <CalendarDays strokeWidth={1.5} className="w-4 h-4" />
          </div>
        </div>
      ),
      description: t.services.payrollDesc,
      details: t.services.payrollDetails
    }
  ];

  return (
    <div className="bg-white pb-24">
       {/* Hero */}
       <section className="bg-slate-50 pt-32 pb-48 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-6 border border-green-100">
               {t.services.heroBadge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              {t.services.heroTitle}
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              {t.services.heroSub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50/60 border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:shadow-slate-200/45 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="w-20 h-20 bg-white shadow-sm border border-slate-200 flex items-center justify-center rounded-2xl mb-8 group-hover:border-green-700/30 transition-all duration-300">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">{service.title}</h2>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="w-full h-px bg-slate-200/60 mb-8"></div>
                <ul className="space-y-4 mb-10">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-slate-600 font-normal text-[1rem] leading-relaxed">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link 
                  href="/contact"
                  className="w-full py-4 bg-green-700 hover:bg-green-800 text-white rounded-2xl flex items-center justify-center gap-2 font-bold shadow-md shadow-green-700/10 hover:shadow-lg hover:shadow-green-700/20 transition-all"
                >
                  <span>{t.services.ctaRequest}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Hiring a Pro - Quick Bridge */}
      <section className="bg-slate-900 py-24 mx-6 mt-32 rounded-[4rem] relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 text-center text-white relative z-10"
        >
          <div className="inline-block px-3 py-1 rounded bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8">
            {t.services.proBridgeBadge}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-none">{t.services.proBridgeTitle}</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            {t.services.proBridgeSub}
          </p>
          <Link 
            href="/why-hire-a-pro"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl"
          >
            <span>{t.services.proBridgeBtn}</span>
            <ChevronRight className="w-6 h-6" />
          </Link>
        </motion.div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
      </section>
    </div>
  );
}
