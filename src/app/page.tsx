'use client';

import React from 'react';
import { useLanguage } from '../LanguageContext';
import { 
  ChevronRight, 
  ShieldCheck, 
  ReceiptText, 
  Users, 
  Map, 
  FileDown, 
  Phone, 
  CheckCircle2, 
  MapPin, 
  Building2, 
  HeartHandshake, 
  Scale, 
  Lightbulb,
  BookOpenText,
  Calculator,
  Monitor,
  User,
  CalendarDays,
  LineChart,
  Briefcase
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import ChecklistModal from '../components/ChecklistModal';

export default function Home() {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-100 overflow-hidden min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <motion.div 
            className="flex justify-center mb-12 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            id="hero-logo-motion-container"
          >
            <img 
              src="https://i.ibb.co/qMvn8DkZ/7aa7c204-8013-423d-b2a6-ba979a344318.jpg" 
              alt="Wide Logo" 
              className="h-24 sm:h-36 md:h-48 lg:h-56 w-auto object-contain"
              id="hero-logo-img"
              width="1200"
              height="350"
              loading="lazy"
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-3/5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                {t.home.badge}
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-8 text-slate-900 tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+15099020922"
                  className="btn-primary gap-2"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>{t.hero.ctaMain}</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-secondary gap-3"
                >
                  <FileDown className="w-5 h-5 text-green-700" />
                  <span>{t.home.checklistBtn}</span>
                </button>
              </div>
            </motion.div>

            {/* Lilia's Story Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:w-2/5 flex flex-col gap-4"
            >
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center font-serif italic text-2xl text-white shadow-xl shadow-slate-900/40">
                    LG
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl leading-none text-slate-900 tracking-tight">Lilia E. Gomez-Munguia</h3>
                    <p className="text-sm text-green-700 font-extrabold uppercase tracking-widest mt-1.5 flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4" />
                       {t.home.storySub}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-lg italic leading-relaxed font-medium">
                  {t.home.storyQuote}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-800 text-white p-8 rounded-[2rem] shadow-xl shadow-green-900/10 border border-green-700">
                  <div className="text-3xl font-extrabold mb-1">15+</div>
                  <div className="text-[10px] opacity-80 font-extrabold uppercase tracking-widest">{t.home.exp}</div>
                </div>
                <div className="bg-yellow-400 text-slate-900 p-8 rounded-[2rem] shadow-xl shadow-yellow-900/10 border border-yellow-300">
                  <div className="text-3xl font-extrabold mb-1">100%</div>
                  <div className="text-[10px] opacity-80 font-extrabold uppercase tracking-widest">{t.home.conf}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values-section" className="py-24 bg-slate-100/50 border-b border-slate-200/60 relative overflow-hidden">
        <div id="core-values-container" className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              id="core-values-heading"
              className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {language === 'en' 
                ? 'Financial Guidance Rooted in Community Care' 
                : 'Guía Financiera Arraigada en el Cuidado de la Comunidad'}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Caring & Empathy */}
            <motion.div 
              id="core-value-card-empathy"
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/30 border border-slate-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-700 mb-6 group-hover:bg-green-700 group-hover:text-white transition-all duration-300 shadow-sm">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {language === 'en' ? 'A Judgment-Free Environment' : 'Un Ambiente Libre de Juicios'}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {language === 'en' 
                  ? 'We know taxes can be overwhelming. We treat every client like family, offering patient, bilingual support and genuine care for your financial well-being.' 
                  : 'Sabemos que los impuestos pueden ser abrumadores. Tratamos a cada cliente como familia, ofreciendo apoyo paciente, bilingüe y un cuidado genuino para su bienestar financiero.'}
              </p>
            </motion.div>

            {/* Column 2: Affordability */}
            <motion.div 
              id="core-value-card-affordability"
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/30 border border-slate-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-700 mb-6 group-hover:bg-green-700 group-hover:text-white transition-all duration-300 shadow-sm">
                <Scale className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {language === 'en' ? 'Transparent, Accessible Pricing' : 'Precios Transparentes y Accesibles'}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {language === 'en' 
                  ? "Expert financial protection shouldn't be out of reach. We provide premium, licensed tax and bookkeeping services at fair, honest rates with absolutely no hidden fees." 
                  : 'La protección financiera experta no debería estar fuera de su alcance. Brindamos servicios premium de impuestos y contabilidad con licencia a tarifas justas y honestas, sin cargos ocultos.'}
              </p>
            </motion.div>

            {/* Column 3: Trust & Education */}
            <motion.div 
              id="core-value-card-education"
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/30 border border-slate-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-700 mb-6 group-hover:bg-green-700 group-hover:text-white transition-all duration-300 shadow-sm">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {language === 'en' ? 'Empowering You for the Future' : 'Empoderándolo para el Futuro'}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {language === 'en' 
                  ? 'We do more than just file paperwork. Our goal is to educate our clients, helping you understand your finances so you can make confident, informed decisions year after year.' 
                  : 'Hacemos más que solo presentar documentos. Nuestro objetivo es educar a nuestros clientes, ayudándole a comprender sus finanzas para que pueda tomar decisiones seguras e informadas año tras año.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Video Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              id="why-choose-us-text"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                {language === 'en' ? 'Trusted by the' : 'Con la Confianza de la'} <br/>
                <span className="text-green-500 underline decoration-yellow-400 decoration-3 underline-offset-8">Yakima Community</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 font-medium leading-relaxed">
                {language === 'en' 
                  ? 'We are more than just tax preparers; we are your local partners in financial growth. Watch how we serve our community with excellence.' 
                  : 'Somos más que simples preparadores de impuestos; somos sus socios locales en el crecimiento financiero. Vea cómo servimos a nuestra comunidad con excelencia.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{language === 'en' ? 'Bilingual Support' : 'Soporte Bilingüe'}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{language === 'en' ? 'Licensed Professionals' : 'Profesionales con Licencia'}</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 w-full"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              id="why-choose-us-video"
            >
              <div className="relative group aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                <iframe
                  className="w-full h-full aspect-video rounded-[2.5rem]"
                  src="https://www.youtube.com/embed/bjfTtCXNoqE"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-24 bg-slate-50/40 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            id="services-section-header"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-green-700 block mb-3">
              {t.services.coreServicesHeader}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{t.services.title}</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              id="mini-service-card-tax"
              className="h-full"
            >
              <MiniServiceCard 
                icon={
                  <div className="relative w-16 h-16 flex items-center justify-center scale-90">
                    <div className="absolute top-1 left-1 text-slate-300">
                      <ReceiptText strokeWidth={1.2} className="w-12 h-12" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-white p-1 rounded-lg shadow-md border border-slate-200 text-green-700">
                      <ShieldCheck strokeWidth={1.5} className="w-6 h-6" />
                    </div>
                  </div>
                }
                title={t.services.taxPrep}
                description={t.services.taxPrepDesc}
                ctaText={language === 'en' ? 'Learn More' : 'Saber Más'}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              id="mini-service-card-bizformation"
              className="h-full"
            >
              <MiniServiceCard 
                icon={
                  <div className="relative w-16 h-16 flex items-center justify-center scale-90">
                    <div className="absolute top-1 left-1 text-slate-300">
                      <Building2 strokeWidth={1.2} className="w-12 h-12" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-white p-1 rounded-lg shadow-md border border-slate-200 text-green-700">
                      <Briefcase strokeWidth={1.5} className="w-6 h-6" />
                    </div>
                  </div>
                }
                title={t.services.bizFormation}
                description={t.services.bizFormationDesc}
                ctaText={language === 'en' ? 'Learn More' : 'Saber Más'}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              id="mini-service-card-bookkeeping"
              className="h-full"
            >
              <MiniServiceCard 
                icon={
                  <div className="relative w-16 h-16 flex items-center justify-center scale-90">
                    <div className="absolute top-1 left-1 text-slate-300">
                      <BookOpenText strokeWidth={1.2} className="w-12 h-12" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-white p-1 rounded-lg shadow-md border border-slate-200 text-green-700">
                      <Calculator strokeWidth={1.5} className="w-6 h-6" />
                    </div>
                  </div>
                }
                title={t.services.bookkeeping}
                description={t.services.bookkeepingDesc}
                ctaText={language === 'en' ? 'Learn More' : 'Saber Más'}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              id="mini-service-card-payroll"
              className="h-full"
            >
              <MiniServiceCard 
                icon={
                  <div className="relative w-16 h-16 flex items-center justify-center scale-90">
                    <div className="absolute top-1 left-1 text-slate-300">
                      <Monitor strokeWidth={1.2} className="w-12 h-12" />
                    </div>
                    <div className="absolute top-3 left-4 text-green-600/80">
                      <LineChart strokeWidth={2} className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-white p-1 rounded-lg shadow-md border border-slate-200 text-green-700 flex items-center gap-0.5">
                      <User strokeWidth={1.5} className="w-4 h-4" />
                      <CalendarDays strokeWidth={1.5} className="w-4 h-4" />
                    </div>
                  </div>
                }
                title={t.services.payroll}
                description={t.services.payrollDesc}
                ctaText={language === 'en' ? 'Learn More' : 'Saber Más'}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-2xl z-0"></div>
                <div className="relative z-10 w-full h-[400px] md:h-[500px]">
                  <img 
                    src="https://i.ibb.co/jZ6xL8gG/PS1-0727.jpg" 
                    alt="Lilia consulting" 
                    className="w-full h-full rounded-[2.5rem] shadow-2xl border border-slate-100 object-cover"
                    width="800"
                    height="600"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 p-6 bg-slate-900 text-white rounded-3xl shadow-xl z-20">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest opacity-70">Years of Growth</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
                {t.nav.about}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                {t.about.mission}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t.about.missionText}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <div className="p-2 bg-white shadow-sm border border-slate-200 rounded-xl text-green-700">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.legal.confidentiality ?? (language === 'en' ? 'Total Privacy' : 'Privacidad Total')}</h4>
                    <p className="text-slate-500 text-xs">{t.home.conf}</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <div className="p-2 bg-white shadow-sm border border-slate-200 rounded-xl text-green-700">
                    <Map className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{language === 'en' ? 'Central WA' : 'Centro de WA'}</h4>
                    <p className="text-slate-500 text-xs text-nowrap">{language === 'en' ? 'We travel to serve you.' : 'Viajamos para servirle.'}</p>
                  </div>
                </motion.div>
              </div>
              <Link 
                href="/about"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>{language === 'en' ? 'Read Full Story' : 'Leer Historia Completa'}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 rounded bg-green-100 text-green-800 text-[10px] font-extrabold uppercase tracking-widest mb-4">
                Local Presence
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
                {t.areas.title}
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                {t.areas.subtitle}
              </p>
            </div>
            <Link href="/contact" className="btn-secondary whitespace-nowrap">
               Schedule a Visit
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {t.areas.cities.map((city, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all"
               >
                 <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-green-700 mb-6 border border-slate-100">
                    <MapPin className="w-5 h-5" />
                 </div>
                 <h4 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{city.name}</h4>
                 <p className="text-sm text-slate-500 font-medium leading-relaxed">{city.desc}</p>
               </motion.div>
             ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Download Banner */}
      <section className="bg-white py-16 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-green-900 rounded-[3rem] p-8 md:p-16 border border-green-800 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-green-900/40 overflow-hidden relative">
            <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
               <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight leading-none">{t.home.checklistTitle}</h2>
               <p className="text-green-100 text-lg max-w-md">{t.home.checklistSub}</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="relative z-10 bg-white text-green-900 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform flex items-center space-x-3 shadow-2xl"
            >
              <FileDown className="w-6 h-6" />
              <span>{t.home.checklistBtn}</span>
            </button>
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-700 rounded-full blur-[80px] opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-1/2 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-[60px] opacity-10"></div>
          </div>
        </motion.div>
      </section>

      <ChecklistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

function MiniServiceCard({ icon, title, description, ctaText }: { icon: React.ReactNode, title: string, description: string, ctaText: string }) {
  return (
    <div className="flex flex-col justify-between h-full bg-slate-50/60 border border-slate-100 p-8 rounded-[2rem] transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/40 hover:-translate-y-1 hover:bg-white group">
      <div>
        <div className="w-16 h-16 bg-white shadow-sm border border-slate-200 flex items-center justify-center rounded-2xl mb-6 group-hover:border-green-700/30 transition-all duration-300">
          {icon}
        </div>
        <h4 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">
          {description}
        </p>
      </div>
      <div className="mt-8">
        <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-green-700 hover:gap-2.5 transition-all">
          <span>{ctaText}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
