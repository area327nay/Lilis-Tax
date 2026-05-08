'use client';

import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const { t } = useLanguage();

  return (
    <div className="pb-24 bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-32 border-b border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
           <div className="inline-flex p-4 bg-white shadow-sm border border-slate-200 text-green-700 rounded-2xl mb-8">
             <HelpCircle className="w-8 h-8" />
           </div>
           <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-none">
             {t.faq.title.split('Questions')[0]} <br /> <span className="text-green-700 italic">Questions.</span>
           </h1>
           <p className="text-xl text-slate-500 font-medium">{t.faq.subtitle}</p>
        </motion.div>
      </section>

      {/* FAQ List */}
      <section className="max-w-3xl mx-auto px-6 py-32">
        <div className="space-y-6">
          {t.faq.items.map((faq, index) => (
            <FAQItem key={index} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-[3.5rem] p-8 md:p-20 text-center border border-slate-100 relative overflow-hidden"
        >
           <div className="relative z-10">
             <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">{t.faq.ctaTitle}</h2>
             <p className="text-xl text-slate-500 mb-10 max-w-xl mx-auto font-medium">{t.faq.ctaSubtitle}</p>
             <a href="tel:+15099020922" className="btn-primary inline-flex items-center gap-3 text-lg px-12 py-5">
               {t.nav.contact}
             </a>
           </div>
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-green-700/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
        </motion.div>
      </section>
    </div>
  );
}

function FAQItem({ q, a }: { q: string, a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-8 flex items-center justify-between text-left group transition-colors"
      >
        <span className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-green-700 transition-colors tracking-tight">{q}</span>
        <div className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-green-700 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-green-50 group-hover:text-green-700'}`}>
           {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 pt-2 text-slate-500 text-lg leading-relaxed border-t border-slate-50 font-medium">
               {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
