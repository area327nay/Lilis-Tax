'use client';

import { useLanguage } from '../LanguageContext';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <img 
                src="https://i.ibb.co/gM20q1WT/59a4a091-9797-4939-83e4-9d39172ef3bb.jpg" 
                alt="Stacked Logo" 
                className="h-16 w-auto"
                width="256"
                height="256"
                loading="lazy"
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
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Lili's+Tax+Services,+LLC&destination_place_id=ChIJlzFE3oN9l1QRwEW7LX-sylI" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                id="footer-address-link"
              >
                <MapPin className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium hover:underline">{"Lili's Tax Services, LLC, 2642 Main St Suite K, Union Gap, WA 98903"}</span>
              </a>
              <a href="mailto:Lilistaxservices@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Lilistaxservices@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/LiliTaxServices/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/15098239880" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-all"
                id="footer-whatsapp-link"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.458 3.479 1.332 5l-1.42 5.187 5.309-1.393c1.472.803 3.125 1.226 4.767 1.226h.005c5.503 0 9.985-4.482 9.985-9.988C22 6.482 17.518 2 12.012 2zm6.05 14.159c-.248.697-1.238 1.272-1.744 1.356-.464.077-.1.22-3.003-1a13.376 13.376 0 0 1-5.186-4.572c-1.47-2.01-1.96-3.856-1.365-5.068.223-.453.69-.74 1.15-.74.155 0 .296.002.418.008.283.013.431.026.621.433.243.518.832 2.03.904 2.179.073.149.122.323.023.52-.099.198-.148.322-.296.496-.149.174-.313.388-.446.52-.149.149-.304.31-.131.607.174.296.772 1.272 1.657 2.059.885.787 1.637 1.031 1.934 1.18.296.149.469.124.643-.075.174-.198.743-.865.942-1.162.198-.297.396-.248.669-.149.272.099 1.733.817 2.03.965.297.149.495.223.569.347.074.124.074.721-.174 1.417z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">{t.nav.services}</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link href="/services" className="hover:text-white transition-colors">{t.services.taxPrep}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.services.bizFormation}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.services.bookkeeping}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.services.payroll}</Link></li>
              <li><Link href="/why-hire-a-pro" className="hover:text-white transition-colors">{t.nav.pro}</Link></li>
              <li><Link href="/checklist" className="hover:text-white transition-colors">{t.nav.checklist}</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">{t.areas.title}</h4>
             <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-4 text-slate-400 font-medium">
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
          "description": "Professional tax preparation, bookkeeping, and payroll services in Union Gap, Yakima, Mattawa, Othello, Quincy, Grandview, and Tri-Cities (Pasco, Kennewick, Richland).",
          "telephone": "+15099020922",
          "url": "https://lilistax.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2642 Main St Suite K",
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
            { "@type": "City", "name": "Quincy" },
            { "@type": "City", "name": "Grandview" },
            { "@type": "City", "name": "Tri-Cities" }
          ],
          "priceRange": "$$"
        })}} />
      </div>
    </footer>
  );
}
