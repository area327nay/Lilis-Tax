'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { FileText, Gavel, Scale } from 'lucide-react';

export default function TermsOfService() {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white pb-24">
      <section className="bg-slate-50 pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex p-4 bg-white shadow-sm border border-slate-200 text-green-700 rounded-2xl mb-8">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">{t.legal.termsTitle}</h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              {t.legal.termsSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 text-slate-600 leading-relaxed font-medium"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
              <Gavel className="w-6 h-6 text-green-700" />
              {t.legal.sections.standards}
            </h2>
            <p>
              {t.legal.sections.standardsText}
            </p>
          </div>

          <div className="space-y-4">
             <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
               <Scale className="w-6 h-6 text-green-700" />
               {t.legal.sections.client}
             </h2>
             <p>
               {t.legal.sections.clientText}
             </p>
          </div>
          
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 text-slate-500 text-sm">
             {language === 'en'
               ? "Last Updated: May 2026. Lili's Tax Services, LLC reserves the right to modify these terms at any time."
               : "Última actualización: Mayo de 2026. Lili's Tax Services, LLC se reserva el derecho de modificar estos términos en cualquier momento."}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
