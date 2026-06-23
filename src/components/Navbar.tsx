'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Globe, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.pro, path: '/why-hire-a-pro' },
    { name: t.nav.checklist, path: '/checklist' },
    { name: t.nav.faq, path: '/faq' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 print:hidden">
      <div className="max-w-7xl mx-auto px-6 h-16">
        <div className="flex justify-end md:justify-center items-center h-full">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex gap-8 text-lg font-semibold text-slate-600">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "transition-colors hover:text-green-700",
                    isActive(item.path) && "text-green-700"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-6 border-l pl-8 border-slate-200">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setLanguage('en')}
                  className={cn(
                    "text-lg font-semibold uppercase transition-colors",
                    language === 'en' ? "text-green-700 font-bold" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  EN
                </button>
                <span className="w-px h-4 bg-slate-300"></span>
                <button 
                  onClick={() => setLanguage('es')}
                  className={cn(
                    "text-lg font-semibold uppercase transition-colors",
                    language === 'es' ? "text-green-700 font-bold" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  ES
                </button>
              </div>
              <a
                href="tel:+15099020922"
                className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-green-900/10"
              >
                {t.hero.ctaMain}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
               onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
               className="p-2 text-gray-500"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-green-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-lg flex justify-between items-center",
                    isActive(item.path) ? "bg-green-50 text-green-700 font-bold" : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="tel:+15099020922"
                  className="flex items-center justify-center space-x-3 w-full bg-green-700 text-white py-4 rounded-xl font-bold shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t.hero.ctaMain}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
