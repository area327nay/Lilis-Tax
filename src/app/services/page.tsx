'use client';

import React, { ReactNode } from 'react';
import { useLanguage } from '../../LanguageContext';
import { motion } from 'motion/react';
import { Receipt, Building2, Wallet, Briefcase, FileText, BarChart3, ChevronRight, Users } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'tax',
      title: t.services.taxPrep,
      icon: <Receipt className="w-12 h-12" />,
      description: t.services.taxPrepDesc,
      details: t.services.taxPrepDetails,
      images: [
        'https://raw.githubusercontent.com/area327nay/Lilis-Tax/main/PS1_0727.jpg'
      ],
      alt: "Tax preparation deductions"
    },
    {
      id: 'bookkeeping',
      title: t.services.bookkeeping,
      icon: <BarChart3 className="w-12 h-12" />,
      description: t.services.bookkeepingDesc,
      details: t.services.bookkeepingDetails,
      images: [
        'https://raw.githubusercontent.com/area327nay/Lilis-Tax/main/PS1_0748.jpg'
      ],
      alt: "Bookkeeping services"
    },
    {
      id: 'payroll',
      title: t.services.payroll,
      icon: <Users className="w-12 h-12" />,
      description: t.services.payrollDesc,
      details: t.services.payrollDetails,
      images: [
        'https://raw.githubusercontent.com/area327nay/Lilis-Tax/main/PS1_0748.jpg'
      ],
      alt: "Bookkeeping services"
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
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}
            >
              <div className="lg:w-1/2">
                <div className="p-10 md:p-16 bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                  <div className="mb-10 inline-flex items-center justify-center p-4 bg-slate-50 text-green-700 rounded-2xl border border-slate-100 transition-colors group-hover:bg-green-700 group-hover:text-white">
                    {React.cloneElement(service.icon as React.ReactElement, { 
                      className: 'w-8 h-8' 
                    } as React.HTMLAttributes<SVGElement>)}
                  </div>
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-12">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center space-x-3 text-slate-700 font-bold text-sm">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-3"
                  >
                    <span>{t.services.ctaRequest}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className={`grid ${service.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-8 p-4`}>
                  {service.images.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-2 bg-slate-50 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className={`relative z-10 w-full ${service.images.length === 1 ? 'aspect-video' : 'aspect-[4/5]'} transition-transform group-hover:scale-[1.02]`}>
                        <img 
                          src={img} 
                          alt={service.alt || service.title}  
                          className="w-full h-full rounded-[2.5rem] shadow-2xl object-cover border border-slate-100" 
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-none">{t.services.proBridgeTitle}</h2>
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
