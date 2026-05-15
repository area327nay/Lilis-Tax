'use client';

import { useLanguage } from '../LanguageContext';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <img 
                src="https://raw.githubusercontent.com/area327nay/Lilis-Tax/main/ec50e98e-188d-4afb-8919-07c9511a407a.JPG" 
                alt="Stacked Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-8">
              {t.home.footerDesc}
            </p>
            <div className="space-y-3 mb-8">
              <a href="tel:+15099020922" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="font-bold underline decoration-green-900/50 underline-offset-4">(509) 902-0922</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-green-600" />
                <span className="font-medium">2642 Main St, Union Gap, WA 98903</span>
              </div>
              <a href="mailto:Lilistaxservices@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Lilistaxservices@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/LiliTaxServices/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">{t.nav.services}</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link href="/services" className="hover:text-white transition-colors">{t.services.taxPrep}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.services.bookkeeping}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.services.payroll}</Link></li>
              <li><Link href="/why-hire-a-pro" className="hover:text-white transition-colors">{t.nav.pro}</Link></li>
              <li><Link href="/checklist" className="hover:text-white transition-colors">{t.nav.checklist}</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">{t.areas.title}</h4>
             <ul className="space-y-4 text-slate-400 font-medium">
               {t.areas.cities.map((city, idx) => (
                 <li key={idx} className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                   {city.name}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Lili's Tax Services, LLC. {t.legal.rights}
          </div>
          <div className="flex items-center gap-6 text-[10px] font-extrabold tracking-widest text-slate-500 uppercase">
             <Link href="/privacy" className="hover:text-white transition-colors">{t.legal.privacy}</Link>
             <Link href="/terms" className="hover:text-white transition-colors">{t.legal.terms}</Link>
          </div>
          <div className="flex items-center gap-6 text-xs font-bold tracking-widest text-slate-400 uppercase">
             <span>{t.contact.hours}</span>
          </div>
        </div>

        {/* Local SEO Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxPreparationService",
          "name": "Lili's Tax Services, LLC",
          "description": "Professional tax preparation, bookkeeping, and payroll services in Union Gap, Yakima, Mattawa, Othello, and Quincy.",
          "telephone": "+15099020922",
          "url": "https://lilistax.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2642 Main St",
            "addressLocality": "Union Gap",
            "addressRegion": "WA",
            "postalCode": "98903",
            "addressCountry": "US"
          },
          "areaServed": [
            { "@type": "City", "name": "Union Gap" },
            { "@type": "City", "name": "Yakima" },
            { "@type": "City", "name": "Mattawa" },
            { "@type": "City", "name": "Othello" },
            { "@type": "City", "name": "Quincy" }
          ],
          "priceRange": "$$"
        })}} />
      </div>
    </footer>
  );
}
