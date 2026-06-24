'use client';

import React, { ReactNode } from 'react';
import { useLanguage } from '../../LanguageContext';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, ShieldAlert, Timer, Lightbulb, Scale, Sparkles, Files, MapPinned, HeartHandshake, BarChart3, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyHirePro() {
  const { t, language } = useLanguage();

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
              src="https://i.ibb.co/ZRnXpdzD/PS1-0741.jpg" 
              alt="Professional consultation" 
              className="w-full h-full rounded-[3rem] shadow-2xl border border-slate-100 object-cover"
              width="1600"
              height="900"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>

      {/* Feature Block: Dedicated Local Expertise */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Short introductory header & text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 block bg-green-50 px-3 py-1.5 rounded-lg w-fit border border-green-100">
              {language === 'en' ? 'Community Trust' : 'Confianza Comunitaria'}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {language === 'en' ? 'Dedicated Local Expertise' : 'Experiencia Local Dedicada'}
            </h2>
            <div className="w-16 h-1 bg-green-600 rounded-full my-4"></div>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              {language === 'en' 
                ? 'We bring professional, licensed financial guidance right to your doorstep. Our deeply personalized services ensure that every detail of your taxes, bookkeeping, and payroll is managed with precision, care, and a thorough understanding of Washington state and federal regulations.' 
                : 'Brindamos orientación financiera profesional y con licencia directamente en su comunidad. Nuestros servicios profundamente personalizados garantizan que cada detalle de sus impuestos, contabilidad y nómina se gestione con precisión, cuidado y un conocimiento profundo de las regulaciones estatales y federales.'}
            </p>
            <p className="text-slate-500 text-base leading-relaxed">
              {language === 'en'
                ? 'Whether you are a local family in Yakima or a small agricultural enterprise in Central Washington, we stand by you year-round with reliable and friendly support.'
                : 'Ya sea una familia local en Yakima o una pequeña empresa agrícola en el centro de Washington, lo respaldamos durante todo el año con un apoyo confiable y amable.'}
            </p>
          </div>

          {/* Right Side: Extracted photos of the professional working with clients */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg border border-slate-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img 
                  src="https://i.ibb.co/wFKjnnvb/PS1-0832.jpg" 
                  alt="Professional financial guidance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width="800"
                  height="1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-sm">
                    {language === 'en' ? 'Expert Auditing Support' : 'Soporte de Auditoría Experto'}
                  </span>
                </div>
              </motion.div>

              <motion.div 
                className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg border border-slate-100 sm:mt-8 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="https://i.ibb.co/jZ6xL8gG/PS1-0727.jpg" 
                  alt="Personalized consultation session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width="800"
                  height="1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold text-sm">
                    {language === 'en' ? 'Peace of Mind Consultation' : 'Consulta de Paz Mental'}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
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
               className="h-full flex flex-col justify-between p-10 bg-slate-50/70 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
             >
               <div className="flex gap-8 items-start">
                 <div className="p-4 bg-white shadow-sm border border-slate-200 text-green-700 rounded-2xl shrink-0 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                   {React.cloneElement(icons[index] as React.ReactElement, { 
                     className: 'w-6 h-6' 
                   } as React.HTMLAttributes<SVGElement>)}
                 </div>
                 <div>
                   <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">{benefit.title}</h3>
                   <p className="text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
                 </div>
               </div>
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
