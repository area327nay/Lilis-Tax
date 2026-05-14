'use client';

import React, { ReactNode } from 'react';
import { useLanguage } from '../../LanguageContext';
import { motion } from 'motion/react';
import { Target, Heart, History, MapPin } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-slate-50 pt-32 pb-48 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-6 border border-yellow-200">
               {t.nav.about}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
              {t.about.heroTitle.split(' ')[0]} <span className="text-green-700 italic">{t.about.heroTitle.split(' ')[1]}</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              {t.about.heroSub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 p-8 md:p-20 border border-slate-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center space-x-3 text-green-700 font-bold mb-8">
                <History className="w-6 h-6" />
                <span className="uppercase tracking-widest text-sm">{t.about.journey}</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
                {t.about.storyTitle.split(' leadership')[0]} <br/> <span className="text-green-700 underline decoration-yellow-400 decoration-4 underline-offset-8">Financial Leadership</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  {t.about.storyP1}
                </p>
                <p>
                  {t.about.storyP2}
                </p>
                <p>
                  {t.about.storyP3}
                </p>
              </div>

              {/* Story Video */}
              <div className="mt-12 group">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/9dce-sjlJWw?rel=0" 
                    title="Lili's Tax Services Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] border border-slate-100 -rotate-2 -z-10"></div>
              <div className="relative w-full aspect-[4/5]">
                <img 
                  src="https://raw.githubusercontent.com/area327nay/Lilis-Tax/main/public/PS1_0741.jpg" 
                  alt="Lilia at computer" 
                  className="w-full h-full rounded-[2.5rem] shadow-2xl object-cover border border-slate-100"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
           <ValueCard 
             icon={<Target />}
             title={t.about.values.clarity}
             description={t.about.values.clarityDesc}
           />
           <ValueCard 
             icon={<Heart />}
             title={t.about.values.integrity}
             description={t.about.values.integrityDesc}
           />
           <ValueCard 
             icon={<MapPin />}
             title={t.about.values.community}
             description={t.about.values.communityDesc}
           />
        </motion.div>
      </section>


      {/* Mission Banner */}
      <section className="bg-gray-900 mx-4 sm:mx-8 md:mx-12 rounded-[3rem] py-24 px-8 md:px-16 overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-green-500 font-bold uppercase tracking-[0.3em] text-sm mb-8">{t.about.mission}</h2>
          <blockquote className="text-3xl md:text-5xl font-light text-white leading-tight italic">
            "{t.about.missionText}"
          </blockquote>
        </motion.div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactElement, title: string, description: string }) {
  return (
    <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 group">
      <div className="w-16 h-16 bg-white shadow-sm border border-slate-200 flex items-center justify-center rounded-2xl text-green-700 mb-8 group-hover:border-green-700/30 transition-colors">
        {React.cloneElement(icon, { 
          className: 'w-8 h-8' 
        } as React.HTMLAttributes<SVGElement>)}
      </div>
      <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}
