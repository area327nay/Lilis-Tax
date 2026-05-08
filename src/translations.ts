
export type Language = 'en' | 'es';

export interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    pro: string;
    faq: string;
    checklist: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaMain: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    heroTitle: string;
    heroSub: string;
    journey: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    mission: string;
    missionText: string;
    values: {
      clarity: string;
      clarityDesc: string;
      integrity: string;
      integrityDesc: string;
      community: string;
      communityDesc: string;
    };
  };
  services: {
    title: string;
    taxPrep: string;
    taxPrepDesc: string;
    taxPrepDetails: string[];
    bookkeeping: string;
    bookkeepingDesc: string;
    bookkeepingDetails: string[];
    payroll: string;
    payrollDesc: string;
    payrollDetails: string[];
    heroBadge: string;
    heroTitle: string;
    heroSub: string;
    ctaRequest: string;
    proBridgeBadge: string;
    proBridgeTitle: string;
    proBridgeSub: string;
    proBridgeBtn: string;
  };
  whyPro: {
    title: string;
    subtitle: string;
    badge: string;
    ctaTitle: string;
    ctaSubtitle: string;
    benefits: {
      title: string;
      desc: string;
    }[];
  };
  faq: {
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  contact: {
    title: string;
    heroSubtitle: string;
    heroBadge: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      successTitle: string;
      successSubtitle: string;
      another: string;
      namePlaceholder: string;
      messagePlaceholder: string;
      or: string;
      bookingBtn: string;
    };
    hours: string;
    location: string;
    coverageTitle: string;
    coverageSub: string;
    callUs: string;
    emailUs: string;
    officeHours: string;
    serviceArea: string;
  };
  areas: {
    title: string;
    subtitle: string;
    badge: string;
    cta: string;
    cities: {
      name: string;
      desc: string;
    }[];
  };
  legal: {
    privacy: string;
    terms: string;
    rights: string;
    privacyTitle: string;
    termsTitle: string;
    privacySubtitle: string;
    termsSubtitle: string;
    sections: Record<string, string>;
    confidentiality?: string;
  };
  home: {
    badge: string;
    storyTitle: string;
    storySub: string;
    storyQuote: string;
    exp: string;
    conf: string;
    checklistTitle: string;
    checklistSub: string;
    checklistBtn: string;
    modal: {
      title: string;
      firstName: string;
      email: string;
      submit: string;
      successTitle: string;
      successSub: string;
      downloadLink: string;
    };
    footerDesc: string;
  };
  checklist: {
    heroBadge: string;
    heroTitle: string;
    heroSub: string;
    printBtn: string;
    encouragementTitle: string;
    encouragementText: string;
    sections: {
      personal: {
        title: string;
        items: string[];
      };
      income: {
        title: string;
        items: string[];
      };
      deductions: {
        title: string;
        items: string[];
      };
      business: {
        title: string;
        items: string[];
      };
    };
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      about: 'Our Story',
      services: 'Services',
      pro: 'Why a Pro?',
      faq: 'FAQ',
      checklist: 'Checklist',
      contact: 'Contact',
    },
    hero: {
      title: 'Expert Tax Preparation in Union Gap & Yakima Area.',
      subtitle: 'Professional, reliable, and educational financial services for families and small businesses in Central Washington since 2009. Serving Yakima, Mattawa, Othello, and Quincy.',
      ctaMain: 'Call to Schedule',
      ctaSecondary: 'Free Consultation',
    },
    about: {
      title: 'Our Local Story',
      heroTitle: 'Central WA Focused.',
      heroSub: 'Building trust in Union Gap and surrounding communities through clear communication and expert financial guidance since 2009.',
      journey: "Lilia's Journey",
      storyTitle: 'From the Fields to Yakima Valley Leadership',
      storyP1: 'Raised in Mexico and working in Central Washington farmlands as a teenager, Lilia Gomez-Munguia witnessed first-hand the challenges seasonal workers face when navigating tax laws and language barriers.',
      storyP2: 'Driven by a desire to help her Yakima Area community, she earned her AAS in legal office assistance from Yakima Valley Community College in 2003 and became a tax professional in 2006.',
      storyP3: 'In 2009, she opened Lili’s Tax Services in a humble Union Gap office. Her realization was simple: tax preparation should be a genuine, educational conversation.',
      mission: 'Our Mission',
      missionText: 'To empower our Central Washington community through educational financial services and absolute integrity.',
      values: {
        clarity: 'Clarity',
        clarityDesc: 'We translate complex tax jargon into clear, actionable advice so you stay in control of your finances.',
        integrity: 'Integrity',
        integrityDesc: 'Complete confidentiality and honest solutions optimized for the growth of local businesses.',
        community: 'Local Commitment',
        communityDesc: 'Based in Union Gap, we travel to Yakima, Mattawa, Othello, and Quincy to serve you where you are.',
      }
    },
    services: {
      title: 'Our Services',
      taxPrep: 'Tax Preparation',
      taxPrepDesc: 'Individual and small business tax returns with a focus on maximized deductions.',
      taxPrepDetails: [
        'Personal Income Tax (1040)',
        'Business Tax (Schedule C, 1120, 1065)',
        'Amended Tax Returns',
        'State & Local Tax Support',
        'Year-round Proactive Planning'
      ],
      bookkeeping: 'Bookkeeping',
      bookkeepingDesc: 'Keeping your financial records accurate and up-to-date throughout the year.',
      bookkeepingDetails: [
        'Monthly Financial Statements',
        'Accounts Payable & Receivable',
        'Bank & Credit Card Reconciliation',
        'QuickBooks Online Integration',
        'Simplified Expense Tracking'
      ],
      payroll: 'Payroll Solutions',
      payrollDesc: 'Reliable payroll processing to keep your business compliant.',
      payrollDetails: [
        'Full-Service Payroll Processing',
        'Quarterly Tax Filing (940/941)',
        'W-2 & 1099 Issuance',
        'Employee Direct Deposit',
        'Compliance Advisory'
      ],
      heroBadge: 'Our expertise',
      heroTitle: 'Expert Services.',
      heroSub: 'Professional financial solutions tailored for families and agricultural businesses in Union Gap, Yakima, Mattawa, Othello, and Quincy.',
      ctaRequest: 'Request a Quote',
      proBridgeBadge: 'Strategic Advantage',
      proBridgeTitle: 'Not sure why you should hire a professional?',
      proBridgeSub: 'Learn how a licensed tax preparer can save you thousands and protect your financial future.',
      proBridgeBtn: 'Read 10 Benefits'
    },
    whyPro: {
      title: 'Invest in your Financial Future',
      subtitle: "Hiring a licensed professional is more than just 'filling forms'—it's a strategic move to protect your assets.",
      badge: 'Licensed & Regulated IRS Standards',
      ctaTitle: 'Ready to see the difference?',
      ctaSubtitle: 'Join hundreds of families who trust Lilia with their financial success.',
      benefits: [
        { title: 'Maximum Refund', desc: 'We identify every credit and deduction you are eligible for.' },
        { title: 'Audit Protection', desc: 'Avoid mathematical mistakes that could trigger IRS delays.' },
        { title: 'Save Time', desc: 'Our expertise lets you focus on your family while we handle the paperwork.' },
        { title: 'Navigate Complexity', desc: 'From multi-state filings to seasonal worker regulations, we handle it.' },
        { title: 'Professional Support', desc: 'If you get an IRS letter, we stand by you to help you respond.' },
        { title: 'Stay Updated', desc: 'Tax laws change every year. We stay updated so you don’t have to.' },
        { title: 'Future Planning', desc: 'We help you plan for next year to optimize your financial future.' },
        { title: 'Peace of Mind', desc: 'Knowing your taxes are handled by a pro provides invaluable security.' },
        { title: 'Local Expertise', desc: 'We understand specific requirements for Washington and our local areas.' },
        { title: 'Organized Records', desc: 'We help you organize your records for better financial health.' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Get quick answers to common tax and financial concerns.',
      ctaTitle: 'Still have questions?',
      ctaSubtitle: 'We are here to help. Reach out directly and we will provide the clarity you need.',
      items: [
        { q: 'What documents do I need?', a: 'Typically, W-2s, 1099s, ID cards, SSN/ITIN cards for all dependents, and any records of income or expenses.' },
        { q: 'What if I lost my documents?', a: 'We can guide you on requesting transcripts from the IRS to ensure your filing is accurate.' },
        { q: 'Do you offer translation?', a: 'Lilia is fully bilingual in English and Spanish. We explain every complex concept in your preferred language.' },
        { q: 'How long does it take?', a: 'Simple returns typically take 3-5 business days. More complex business filings may take longer.' },
        { q: 'Can you help with past years?', a: 'Yes, we can help you file previous years and resolve outstanding issues with the IRS or state.' }
      ]
    },
    contact: {
      title: 'Get in Touch',
      heroBadge: 'Connect with us',
      heroSubtitle: 'We are ready to assist you with your professional tax needs. Reach out today to schedule your consultation.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'How can we help?',
        submit: 'Send Message',
        successTitle: 'Thank You!',
        successSubtitle: 'Your message has been sent. Lilia will reach out to you within 24-48 business hours.',
        another: 'Send another message',
        namePlaceholder: 'Jane Doe',
        messagePlaceholder: 'Tell us about your needs...',
        or: 'or book instantly',
        bookingBtn: 'Online Booking Tool'
      },
      hours: 'Mon-Fri: 10am - 7pm | Sat: 10am - 5pm | Sun: Closed',
      location: '2642 Main St, Union Gap, WA 98903',
      coverageTitle: 'Regional Coverage',
      coverageSub: 'Union Gap Office & Central WA Mobile Services',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      officeHours: 'Office Hours',
      serviceArea: 'Our Office'
    },
    areas: {
      title: 'Regional Coverage',
      subtitle: 'Primary office in Union Gap. Serving Yakima, Mattawa, Othello, and Quincy through mobile services.',
      badge: 'Local Presence',
      cta: 'Schedule a Visit',
      cities: [
        { name: 'Union Gap', desc: 'Our primary physical office and consultation hub.' },
        { name: 'Yakima', desc: 'Central consultation and secure document handling.' },
        { name: 'Mattawa', desc: 'Travel service and convenient document drop-off points.' },
        { name: 'Othello', desc: 'Bi-weekly visits and mobile tax preparation services.' },
        { name: 'Quincy', desc: 'Scheduled drop-offs and remote filing support.' }
      ]
    },
    legal: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
      privacyTitle: 'Our Privacy Commitment',
      termsTitle: 'Website Terms of Use',
      privacySubtitle: 'Your trust is our most valuable asset. We treat your financial data with the highest level of confidentiality.',
      termsSubtitle: 'Clear expectations for a professional partnership.',
      confidentiality: 'Total Privacy',
      sections: {
        collection: 'Data Collection',
        collectionText: 'We collect only the information necessary to fulfill your tax and financial service requests.',
        disclosure: 'Third-Party Disclosure',
        disclosureText: 'We do not sell, trade, or otherwise transfer your information to outside parties except to provide requested services.',
        standards: 'Professional Standards',
        standardsText: "Lili's Tax Services, LLC operates under the highest ethical and professional standards as regulated by the IRS.",
        client: 'Client Responsibility',
        clientText: 'Accuracy of tax returns depends on the completeness and honesty of the records provided.'
      }
    },
    home: {
      badge: 'Serving Union Gap, Yakima, Mattawa & Othello',
      storyTitle: "Lilia's Journey",
      storySub: 'Founding Principal since 2009',
      storyQuote: '"I started in a 300 sq. ft. office because I saw a need for genuine, educational financial support in our community."',
      exp: 'Years Experience',
      conf: 'Confidential',
      checklistTitle: 'Tax Checklist 2026',
      checklistSub: "Don't forget a thing! Download our free list of what to bring to your appointment.",
      checklistBtn: 'Get Tax Checklist',
      modal: {
        title: 'Be Prepared for Tax Season.',
        firstName: 'First Name',
        email: 'Email',
        submit: 'Send My Free Checklist',
        successTitle: 'Success!',
        successSub: 'Your checklist is ready for download.',
        downloadLink: 'Download Checklist (PDF)',
      },
      footerDesc: 'Professional tax preparation, bookkeeping, and payroll services you can trust. Serving families and businesses in Union Gap, Yakima, Mattawa, Othello, and Quincy since 2009.',
    },
    checklist: {
      heroBadge: 'Client Resources',
      heroTitle: 'Tax Preparation Document Checklist',
      heroSub: "Gathering your documents is the first step to maximized deductions and peace of mind. Use our comprehensive checklist to prepare for your appointment.",
      printBtn: 'Download / Print Checklist',
      encouragementTitle: 'Get Organized, Get Maximized',
      encouragementText: 'Being prepared helps us identify every credit and deduction you qualify for. We serve individuals, seasonal workers, and small businesses in the Central Washington area.',
      sections: {
        personal: {
          title: 'Personal Information',
          items: [
            'Driver License or Government-issued photo ID',
            'Social Security cards (SSN) or ITIN letters for everyone on the return',
            'Birth certificates for all dependents appearing on your return',
            'Bank account & routing numbers (for Direct Deposit of your refund)',
            'Copy of last year’s tax return (if you are a new client)'
          ]
        },
        income: {
          title: 'Income Documents',
          items: [
            'W-2 forms from all employers during the year',
            '1099-NEC / 1099-MISC for self-employment or independent contract work',
            '1099-INT, 1099-DIV, 1099-G (Interest, Dividends, Unemployment)',
            '1099-SSA (Social Security benefits statement)',
            'Records of rental property income',
            'W-2G for gambling or lottery winnings'
          ]
        },
        deductions: {
          title: 'Common Deductions',
          items: [
            'Childcare provider information (Name, address, and Tax ID or SSN)',
            'Form 1098 Mortgage Interest statement',
            'Medical, dental, and vision expense receipts',
            'Record of charitable donations (Cash and non-cash)',
            'Education expenses (1098-T) and Student Loan Interest (1098-E)'
          ]
        },
        business: {
          title: 'Small Business & Self-Employed',
          items: [
            'Detailed records of business income or gross receipts',
            'Expense receipts (Materials, travel, supplies, advertising)',
            'Vehicle mileage logs (Business miles vs. total miles driven)',
            'Home office square footage and utility records'
          ]
        }
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Historia',
      services: 'Servicios',
      pro: '¿Por qué Pro?',
      faq: 'Preguntas',
      checklist: 'Lista',
      contact: 'Contacto',
    },
    hero: {
      title: 'Su Reembolso en Union Gap y el Área de Yakima.',
      subtitle: 'Preparación de impuestos experta con un toque personal para familias y pequeños negocios en Central WA. Sirviendo a Yakima, Mattawa, Othello y Quincy.',
      ctaMain: 'Llamar para Cita',
      ctaSecondary: 'Consulta Gratis',
    },
    about: {
      title: 'Nuestra Historia Local',
      heroTitle: 'Enfoque en Central WA.',
      heroSub: 'Construyendo confianza en Union Gap y el Valle de Yakima a través de guía financiera experta desde 2009.',
      journey: 'La Trayectoria de Lilia',
      storyTitle: 'De los Campos al Liderazgo en Yakima Valley',
      storyP1: 'Criada en México y trabajando en campos del centro de Washington cuando era adolescente, Lilia Gomez-Munguia presenció de primera mano los desafíos que enfrentan los trabajadores.',
      storyP2: 'Impulsada por el deseo de ayudar a su comunidad en el área de Yakima, obtuvo su AAS en asistencia legal en 2003 y se convirtió en profesional de impuestos en 2006.',
      storyP3: 'En 2009, abrió Lili’s Tax Services en una humilde oficina en Union Gap. Su idea fue simple: la preparación de impuestos debe ser una conversación educativa y genuina.',
      mission: 'Nuestra Misión',
      missionText: 'Empoderar a nuestra comunidad del centro de Washington a través de servicios financieros educativos e integridad absoluta.',
      values: {
        clarity: 'Claridad',
        clarityDesc: 'Traducimos el lenguaje complejo de los impuestos en consejos claros para su tranquilidad financiera.',
        integrity: 'Integridad',
        integrityDesc: 'Confidencialidad total y soluciones honestas optimizadas para el crecimiento de negocios locales.',
        community: 'Compromiso Local',
        communityDesc: 'Desde nuestra oficina en Union Gap, viajamos a Yakima, Mattawa, Othello y Quincy para servirle.',
      }
    },
    services: {
      title: 'Nuestros Servicios',
      taxPrep: 'Preparación de Impuestos',
      taxPrepDesc: 'Declaraciones individuales y de pequeñas empresas con enfoque en deducciones máximas.',
      taxPrepDetails: [
        'Impuesto sobre la renta personal (1040)',
        'Impuesto comercial (Anexo C, 1120, 1065)',
        'Declaraciones de impuestos enmendadas',
        'Soporte de impuestos estatales y locales',
        'Planificación proactiva durante todo el año'
      ],
      bookkeeping: 'Contabilidad',
      bookkeepingDesc: 'Mantener sus registros financieros precisos y actualizados durante todo el año.',
      bookkeepingDetails: [
        'Estados financieros mensuales',
        'Cuentas por pagar y por cobrar',
        'Conciliación bancaria y de tarjetas de crédito',
        'Integración de QuickBooks Online',
        'Seguimiento de gastos simplificado'
      ],
      payroll: 'Soluciones de Nómina',
      payrollDesc: 'Procesamiento de nómina confiable para mantener su negocio en cumplimiento.',
      payrollDetails: [
        'Procesamiento de nómina de servicio completo',
        'Presentación de impuestos trimestrales (940/941)',
        'Emisión de W-2 y 1099',
        'Depósito directo para empleados',
        'Asesoría de cumplimiento'
      ],
      heroBadge: 'Nuestra experiencia',
      heroTitle: 'Servicios Expertos.',
      heroSub: 'Soluciones financieras profesionales diseñadas para familias y negocios agrícolas en Union Gap, Yakima, Mattawa, Othello y Quincy.',
      ctaRequest: 'Solicite una Cotización',
      proBridgeBadge: 'Ventaja Estratégica',
      proBridgeTitle: '¿No está seguro de por qué contratar a un profesional?',
      proBridgeSub: 'Conozca cómo un preparador de impuestos con licencia puede ahorrarle miles y proteger su futuro.',
      proBridgeBtn: 'Leer 10 Beneficios'
    },
    whyPro: {
      title: 'Invierta en su Futuro Financiero',
      subtitle: 'Contratar a un profesional con licencia es más que completar formularios; es un movimiento estratégico.',
      badge: 'Estándares del IRS Regulados',
      ctaTitle: '¿Listo para ver la diferencia?',
      ctaSubtitle: 'Únase a cientos de familias en Yakima que confían en Lilia.',
      benefits: [
        { title: 'Reembolso Máximo', desc: 'Identificamos cada crédito y deducción para los que califica.' },
        { title: 'Protección de Auditoría', desc: 'Evite errores matemáticos que podrían retrasar su reembolso.' },
        { title: 'Ahorre Tiempo', desc: 'Nuestra experiencia le permite enfocarse en su familia.' },
        { title: 'Navegue la Complejidad', desc: 'Manejamos casos de multi-estado y trabajadores estacionales.' },
        { title: 'Soporte Profesional', desc: 'Si recibe una carta del IRS, estamos con usted para responder.' },
        { title: 'Manténgase Actualizado', desc: 'Las leyes cambian cada año. Nosotros nos mantenemos al día.' },
        { title: 'Planificación Futura', desc: 'Le ayudamos a planear para el próximo año.' },
        { title: 'Paz Mental', desc: 'Saber que sus impuestos están en manos de un pro brinda seguridad.' },
        { title: 'Experiencia Local', desc: 'Entendemos los requisitos específicos de Washington y áreas locales.' },
        { title: 'Registros Organizados', desc: 'Le ayudamos a organizar sus registros para una mejor salud financiera.' }
      ]
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas rápidas a inquietudes comunes.',
      ctaTitle: '¿Aún tiene preguntas?',
      ctaSubtitle: 'Estamos aquí para ayudar. Contáctenos directamente.',
      items: [
        { q: '¿Qué documentos necesito?', a: 'W-2, 1099, identificaciones, tarjetas de SSN/ITIN de dependientes y registros de ingresos.' },
        { q: '¿Documentos perdidos?', a: '¡Podemos guiarle para pedir transcripciones al IRS para asegurar su declaración!' },
        { q: '¿Traducción?', a: 'Lilia es bilingüe. Le explicaremos todo en su idioma preferido.' },
        { q: '¿Cuánto tiempo tarda?', a: '3-5 días para declaraciones simples. Casos complejos pueden tardar más.' },
        { q: '¿Años anteriores?', a: 'Sí, podemos ayudarle con años pasados y resolver problemas con el IRS.' }
      ]
    },
    contact: {
      title: 'Póngase en Contacto',
      heroBadge: 'Conéctese con nosotros',
      heroSubtitle: 'Estamos listos para asistirlo con sus necesidades fiscales. Contáctenos hoy para programar su consulta.',
      form: {
        name: 'Nombre Completo',
        email: 'Dirección de Correo',
        phone: 'Número de Teléfono',
        message: '¿Cómo podemos ayudar?',
        submit: 'Enviar Mensaje',
        successTitle: '¡Gracias!',
        successSubtitle: 'Su mensaje ha sido enviado. Lilia se comunicará con usted en 24-48 horas hábiles.',
        another: 'Enviar otro mensaje',
        namePlaceholder: 'Juana Pérez',
        messagePlaceholder: 'Cuéntenos sobre sus necesidades...',
        or: 'o reserve al instante',
        bookingBtn: 'Herramienta de Reserva en Línea'
      },
      hours: 'Lun-Vie: 10am - 7pm | Sab: 10am - 5pm | Dom: Cerrado',
      location: '2642 Main St, Union Gap, WA 98903',
      coverageTitle: 'Cobertura Regional',
      coverageSub: 'Oficina en Union Gap y Servicios Móviles en Central WA',
      callUs: 'Llámenos',
      emailUs: 'Correo',
      officeHours: 'Horario',
      serviceArea: 'Nuestra Oficina'
    },
    areas: {
      title: 'Cobertura Regional',
      subtitle: 'Oficina principal en Union Gap. Sirviendo a Yakima, Mattawa, Othello y Quincy.',
      badge: 'Presencia Local',
      cta: 'Programar Visita',
      cities: [
        { name: 'Union Gap', desc: 'Nuestra oficina física principal y centro de consultas.' },
        { name: 'Yakima', desc: 'Consulta central y manejo seguro de documentos.' },
        { name: 'Mattawa', desc: 'Servicio de viajes y puntos convenientes de entrega de documentos.' },
        { name: 'Othello', desc: 'Visitas quincenales y servicios móviles de preparación de impuestos.' },
        { name: 'Quincy', desc: 'Entregas programadas y soporte de presentación remota.' }
      ]
    },
    legal: {
      privacy: 'Privacidad',
      terms: 'Términos',
      rights: 'Todos los derechos reservados.',
      privacyTitle: 'Compromiso de Privacidad',
      termsTitle: 'Términos de Uso',
      privacySubtitle: 'Su confianza es nuestro mayor activo. Tratamos sus datos con confidencialidad absoluta.',
      termsSubtitle: 'Expectativas claras para una asociación profesional.',
      confidentiality: 'Privacidad Total',
      sections: {
        collection: 'Recopilación de Datos',
        collectionText: 'Recopilamos solo la información necesaria para sus trámites fiscales.',
        disclosure: 'Divulgación a Terceros',
        disclosureText: 'No vendemos ni transferimos su información a terceros sin su consentimiento.',
        standards: 'Estándares Profesionales',
        standardsText: "Lili's Tax Services, LLC opera bajo los más altos estándares éticos del IRS.",
        client: 'Responsabilidad del Cliente',
        clientText: 'La precisión depende de la integridad de los registros que nos proprocionen.'
      }
    },
    home: {
      badge: 'Sirviendo a Union Gap, Yakima, Mattawa y Othello',
      storyTitle: 'La Trayectoria de Lilia',
      storySub: 'Directora Fundadora desde 2009',
      storyQuote: '"Comencé en una oficina pequeña porque vi la necesidad de apoyo real en nuestra comunidad."',
      exp: 'Años de Experiencia',
      conf: 'Confidencial',
      checklistTitle: 'Lista de Control 2026',
      checklistSub: '¡Que no se le olvide nada! Descargue nuestra lista gratuita.',
      checklistBtn: 'Obtener Lista de Impuestos',
      modal: {
        title: 'Prepárese para la Temporada de Impuestos.',
        firstName: 'Nombre',
        email: 'Correo Electrónico',
        submit: 'Enviar mi Lista Gratuita',
        successTitle: '¡Éxito!',
        successSub: 'Su lista está lista para descargar.',
        downloadLink: 'Descargar Lista (PDF)',
      },
      footerDesc: 'Servicios profesionales de preparación de impuestos, contabilidad y nómina en los que puede confiar. Sirviendo a familias y negocios en Union Gap, Yakima, Mattawa, Othello y Quincy desde 2009.',
    },
    checklist: {
      heroBadge: 'Recursos para Clientes',
      heroTitle: 'Lista de Documentos para Impuestos',
      heroSub: 'Reunir sus documentos es el primer paso para obtener deducciones máximas y paz mental. Use nuestra lista completa para prepararse para su cita.',
      printBtn: 'Descargar / Imprimir Lista',
      encouragementTitle: 'Organícese, Maximice su Reembolso',
      encouragementText: 'Estar preparado nos ayuda a identificar cada crédito y deducción para los que califica. Atendemos a individuos, trabajadores temporales y pequeños negocios en el área de Central Washington.',
      sections: {
        personal: {
          title: 'Información Personal',
          items: [
            'Licencia de conducir o identificación con foto emitida por el gobierno',
            'Tarjetas de Seguro Social (SSN) o cartas de ITIN de todos en la declaración',
            'Actas de nacimiento de todos los dependientes en su declaración',
            'Números de cuenta y de ruta bancaria (para depósito directo)',
            'Copia de la declaración del año pasado (si es un cliente nuevo)'
          ]
        },
        income: {
          title: 'Documentos de Ingresos',
          items: [
            'Formas W-2 de todos los empleadores durante el año',
            '1099-NEC / 1099-MISC para trabajo por cuenta propia o contratista independiente',
            '1099-INT, 1099-DIV, 1099-G (Intereses, Dividendos, Desempleo)',
            '1099-SSA (Declaración de beneficios de Seguro Social)',
            'Registros de ingresos de propiedades de alquiler',
            'W-2G para ganancias de juegos o lotería'
          ]
        },
        deductions: {
          title: 'Deducciones Comunes',
          items: [
            'Información del proveedor de guardería (Nombre, dirección y Tax ID o SSN)',
            'Forma 1098 de intereses hipotecarios',
            'Recibos de gastos médicos, dentales y de la vista',
            'Registro de donaciones caritativas (efectivo y no efectivo)',
            'Gastos de educación (1098-T) e intereses de préstamos estudiantiles (1098-E)'
          ]
        },
        business: {
          title: 'Pequeñas Empresas y Trabajadores Independientes',
          items: [
            'Registros detallados de ingresos comerciales o recibos brutos',
            'Recibos de gastos (Materiales, viajes, suministros, publicidad)',
            'Registros de millaje del vehículo (millas de negocio vs. totales)',
            'Pies cuadrados de oficina en casa y registros de servicios'
          ]
        }
      }
    }
  }
};
