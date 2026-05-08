'use client';

import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function MobileActionBar() {
  const { t } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
      <motion.a 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        href="tel:+15099020922"
        className="bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-800 transition-transform active:scale-95"
      >
        <Phone className="w-5 h-5" />
        <span className="font-extrabold text-sm tracking-tight">{t.hero.ctaMain}</span>
      </motion.a>
      
      <motion.a 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        href="https://wa.me/15099020922"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-center border border-green-500 transition-transform active:scale-95"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
