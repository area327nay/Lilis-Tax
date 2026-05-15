'use client';

import React, { ReactNode } from 'react';
import { useLanguage } from '../../LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, ShieldAlert, Timer, Lightbulb, Scale, Sparkles, Files, MapPinned, HeartHandshake, BarChart3, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyHirePro() {
  const { t } = useLanguage();

  const icons = [
    <TrendingUp />, <ShieldAlert />, <Timer />, <Lightbulb />, <Scale />, 
    <Sparkles />, <BarChart3 />, <HeartHandshake />, <MapPinned />, <Files />
  ];

  return (
    <div className="pb-24 bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-32 border-b border-slate-100 pb-48">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-6 border border-yellow-200">
               {t.whyPro.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-none">
              {t.whyPro.title.split('Future')[0]} <span className="text-green-700 italic underline decoration-yellow-400 decoration-4 underline-offset-8">Future</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              {t.whyPro.subtitle}
            </p>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-xs shadow-sm">
               <CheckCircle2 className="w-4 h-4 text-green-700" />
               <span>{t.whyPro.badge}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Header Image */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full aspect-video">
            <img 
              src="/PS1_0826.jpg" 
              alt="Professional consultation" 
              className="w-full h-full rounded-[3rem] shadow-2xl border border-slate-100 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {t.whyPro.benefits.map((benefit, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col gap-6 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
             >
               <div className="flex gap-8 items-start">
                 <div className="p-4 bg-white shadow-sm border border-slate-200 text-green-700 rounded-2xl shrink-0 group-hover:bg-green-700 group-hover:text-white transition-colors">
                   {React.cloneElement(icons[index] as React.ReactElement, { 
                     className: 'w-6 h-6' 
                   } as React.HTMLAttributes<SVGElement>)}
                 </div>
                 <div>
                   <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">{benefit.title}</h3>
                   <p className="text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
                 </div>
               </div>
               
                {index === 1 && ( // Audit Protection
                 <div className="relative w-full aspect-video mt-4">
                   <img 
                     src="/PS1_0725.jpg" 
                     alt="Audit support" 
                     className="w-full h-full rounded-2xl shadow-lg border border-slate-100 object-cover" 
                   />
                 </div>
               )}
               {index === 7 && ( // Peace of Mind
                 <div className="relative w-full aspect-video mt-4">
                   <img 
                     src="/PS1_0832.jpg" 
                     alt="Peace of mind" 
                     className="w-full h-full rounded-2xl shadow-lg border border-slate-100 object-cover" 
                   />
                 </div>
               )}
             </motion.div>
           ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-green-900 py-32 rounded-[4rem] relative overflow-hidden border border-green-800 shadow-2xl shadow-green-900/40"
        >
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-none">
              {t.whyPro.ctaTitle}
            </h2>
            <p className="text-xl text-green-100 mb-12 font-medium max-w-xl mx-auto">
              {t.whyPro.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:+15099020922" className="bg-white text-green-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-2xl">
                {t.hero.ctaMain} <ChevronRight className="w-5 h-5" />
              </a>
              <Link href="/contact" className="bg-green-800 text-white border border-green-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-700 transition-all">
                {t.nav.contact}
              </Link>
            </div>
          </div>
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-700 rounded-full blur-[150px] opacity-20 -mr-64 -mt-64 scale-150 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400 rounded-full blur-[120px] opacity-10 -ml-32 -mb-32 pointer-events-none"></div>
        </motion.div>
      </section>
    </div>
  );
}
