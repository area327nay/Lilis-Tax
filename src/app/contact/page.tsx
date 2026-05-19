'use client';

import React, { ReactNode, useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../LanguageContext';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, Calendar, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (submitted && successHeadingRef.current) {
      successHeadingRef.current.focus();
    }
  }, [submitted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24 bg-white">
      {/* Header */}
      <section className="bg-slate-50 pt-32 pb-48 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16"
           >
             <div className="text-left">
               <div className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold uppercase tracking-widest mb-6 border border-yellow-200">
                  {t.contact.heroBadge}
               </div>
               <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-none">{t.nav.contact}</h1>
               <p className="text-xl text-slate-500 max-w-xl font-medium leading-relaxed">
                 {t.contact.heroSubtitle}
               </p>
             </div>
             <div className="hidden lg:block relative">
               <div className="absolute -inset-4 bg-white/50 rounded-[3rem] blur-2xl"></div>
               <div className="relative z-10 w-full h-[350px]">
                  <img 
                    src="https://raw.githubusercontent.com/area327nay/Lilis-Tax/main/PS1_0818.jpg" 
                    alt="Contact us" 
                    className="w-full h-full rounded-[2.5rem] shadow-2xl border border-white/20 object-cover" 
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 p-6 bg-green-700 text-white rounded-3xl shadow-xl z-20 font-bold">
                 Peace of Mind.
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20"
        >
          {/* Contact Info & Map */}
          <div>
            <div className="space-y-10 mb-16 bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
              <ContactInfoItem 
                icon={<Phone />}
                title={t.contact.callUs}
                content="(509) 902-0922"
                link="tel:+15099020922"
              />
              <ContactInfoItem 
                icon={<Mail />}
                title={t.contact.emailUs}
                content="Lilistaxservices@gmail.com"
                link="mailto:Lilistaxservices@gmail.com"
              />
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-2xl text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1">{t.contact.officeHours}</h4>
                  <div className="space-y-1">
                    <p className="text-lg font-extrabold text-slate-900 tracking-tight leading-tight">Mon - Fri: 10:00 AM - 7:00 PM</p>
                    <p className="text-sm font-bold text-slate-500 tracking-tight">Sat: 10:00 AM - 5:00 PM</p>
                    <p className="text-sm font-bold text-slate-400 tracking-tight">Sun: Closed</p>
                  </div>
                </div>
              </div>
              <ContactInfoItem 
                icon={<MapPin />}
                title={t.contact.serviceArea}
                content={t.contact.location}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[4rem] shadow-2xl shadow-slate-200/60 p-10 md:p-16 border border-slate-100 relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32"></div>
             
             <div className="relative z-10" aria-live="polite">
               {submitted ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="h-full flex flex-col items-center justify-center text-center space-y-8 py-10"
                   role="status"
                 >
                   <div className="w-24 h-24 bg-green-50 text-green-700 rounded-[2rem] border border-green-100 flex items-center justify-center shadow-xl shadow-green-900/10 transition-transform animate-bounce">
                      <CheckCircle className="w-12 h-12" aria-hidden="true" />
                   </div>
                   <h3 
                    ref={successHeadingRef}
                    tabIndex={-1}
                    className="text-4xl font-extrabold text-slate-900 tracking-tight leading-none outline-none"
                   >
                     {t.contact.form.successTitle}
                   </h3>
                   <p className="text-xl text-slate-500 leading-relaxed font-medium">
                     {t.contact.form.successSubtitle}
                   </p>
                   <button 
                    onClick={() => setSubmitted(false)}
                    className="text-green-700 font-extrabold hover:underline uppercase text-sm tracking-widest"
                   >
                     {t.contact.form.another}
                   </button>
                 </motion.div>
               ) : (
                 <>
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-none">{t.contact.title}</h2>
                  <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium">
                    {t.contact.heroSubtitle}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label htmlFor="full-name" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.contact.form.name}</label>
                         <input 
                           id="full-name"
                           name="full-name"
                           required
                           aria-required="true"
                           type="text" 
                           className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white outline-none transition-all font-medium" 
                           placeholder={t.contact.form.namePlaceholder}
                         />
                      </div>
                      <div className="space-y-3">
                         <label htmlFor="phone-number" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.contact.form.phone}</label>
                         <input 
                           id="phone-number"
                           name="phone-number"
                           required
                           aria-required="true"
                           type="tel" 
                           className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white outline-none transition-all font-medium" 
                           placeholder="(509) 000-0000"
                         />
                      </div>
                    </div>
                    <div className="space-y-3">
                       <label htmlFor="email-address" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.contact.form.email}</label>
                       <input 
                         id="email-address"
                         name="email-address"
                         required
                         aria-required="true"
                         type="email" 
                         className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white outline-none transition-all font-medium" 
                         placeholder="jane@example.com"
                       />
                    </div>
                    <div className="space-y-3">
                       <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{t.contact.form.message}</label>
                       <textarea 
                         id="message"
                         name="message"
                         required
                         aria-required="true"
                         rows={4}
                         className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-green-500/10 focus:border-green-600 focus:bg-white outline-none transition-all resize-none font-medium text-lg" 
                         placeholder={t.contact.form.messagePlaceholder}
                       />
                    </div>
                    <button 
                      type="submit"
                      className="btn-primary w-full py-6 flex items-center justify-center gap-3 text-lg"
                    >
                      <Send className="w-5 h-5" aria-hidden="true" />
                      <span>{t.contact.form.submit}</span>
                    </button>
                    
                    <div className="text-center py-2">
                       <span className="text-slate-300 text-xs font-extrabold uppercase tracking-widest">{t.contact.form.or}</span>
                    </div>

                    <a 
                      href="https://calendly.com/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full py-6 flex items-center justify-center gap-3 text-lg border-slate-900 border-2"
                    >
                      <Calendar className="w-5 h-5" aria-hidden="true" />
                      <span>{t.contact.form.bookingBtn}</span>
                    </a>
                  </form>
                 </>
               )}
             </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function ContactInfoItem({ icon, title, content, link }: { icon: React.ReactElement, title: string, content: string, link?: string }) {
  const contentElement = link ? (
    <a href={link} className="text-xl font-extrabold text-slate-900 hover:text-green-700 transition-colors tracking-tight">
      {content}
    </a>
  ) : (
    <p className="text-xl font-extrabold text-slate-900 tracking-tight">{content}</p>
  );

  return (
    <div className="flex gap-6 group">
      <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-2xl text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
        {React.cloneElement(icon, { 
          className: 'w-6 h-6', 
          'aria-hidden': 'true' 
        } as React.HTMLAttributes<SVGElement>)}
      </div>
      <div>
        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
        {contentElement}
      </div>
    </div>
  );
}
