'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RotatingButton from '@/components/RotatingButton';
import { useLanguage } from '@/contexts/LanguageContext';
import SkeletonLoader from '@/components/SkeletonLoader';

interface Service {
  _id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  features: string[];
  featuresAr: string[];
  featured: boolean;
}

// Custom SVG Icon Components
function ConcreteCuttingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7M3 7L12 13L21 7M3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function ReinforcedConcreteIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 9H21M9 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor"/>
      <circle cx="7.5" cy="16.5" r="1" fill="currentColor"/>
      <circle cx="16.5" cy="16.5" r="1" fill="currentColor"/>
    </svg>
  );
}

function DrillingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 4V2M12 22V20M4 12H2M22 12H20M6.343 6.343L4.93 4.93M19.07 19.07L17.657 17.657M6.343 17.657L4.93 19.07M19.07 4.93L17.657 6.343" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function CrackRepairIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 9.5L16 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 9.5L8 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DemolitionIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 21V7L9 3H15L19 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 9V13M15 9V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function ConsultationIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 9H16M8 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function getIcon(iconName: string) {
  switch (iconName) {
    case 'concrete-cutting':
      return <ConcreteCuttingIcon />;
    case 'reinforced-concrete':
      return <ReinforcedConcreteIcon />;
    case 'drilling':
      return <DrillingIcon />;
    case 'crack-repair':
      return <CrackRepairIcon />;
    case 'demolition':
      return <DemolitionIcon />;
    case 'consultation':
      return <ConsultationIcon />;
    default:
      return <ConcreteCuttingIcon />;
  }
}


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function ServicesPage() {
  const { language, t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [featuredServices, setFeaturedServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const [allServicesRes, featuredRes] = await Promise.all([
        fetch('/api/services'),
        fetch('/api/services?featured=true'),
      ]);
      const allServices = await allServicesRes.json();
      const featured = await featuredRes.json();
      setServices(allServices);
      setFeaturedServices(featured);
    } catch (error) {
      console.error('Failed to fetch services:', error);
    } finally {
      setLoading(false);
    }
  };

  const testimonials = t('servicesPage.testimonialsList') || [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-20 sm:pt-24 md:pt-28 pb-4 md:pb-6 safe-area-left safe-area-right"
        aria-label="Breadcrumb"
      >
          <ol className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'} text-sm text-white/70`}>
          <li>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="hover:text-[#FFDD00] transition-colors duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#FFDD00] rounded">
                {t('servicesPage.home')}
              </Link>
            </motion.div>
          </li>
          <li aria-hidden="true">
            <span className="mx-2">/</span>
          </li>
          <li className="text-white font-medium" aria-current="page">
            {t('servicesPage.services')}
          </li>
        </ol>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 safe-area-left safe-area-right">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center mb-6"
          >
            <div className={`w-10 h-px bg-white/30 ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
            <span className="text-xs md:text-sm font-semibold text-white/80 uppercase tracking-[0.2em]">
              {t('servicesPage.services')}
            </span>
            <div className={`w-10 h-px bg-white/30 ${language === 'ar' ? 'mr-4' : 'ml-4'}`} />
          </motion.div>

          <h1 className="font-arkes text-[clamp(1.875rem,6vw,4.375rem)] font-bold mb-4 sm:mb-5 md:mb-6 text-white text-overflow-safe">
            {t('servicesPage.ourServices')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-[min(42rem,90vw)] mx-auto text-overflow-safe" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            {t('servicesPage.heroDescription')}
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20 pb-16 sm:pb-24 md:pb-32 lg:pb-40 safe-area-left safe-area-right">
        {loading ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14"
          >
            <SkeletonLoader variant="service" count={6} />
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-14"
          >
            {services.map((service) => (
              <motion.div
                key={service._id}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredCard(service._id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div 
                  whileHover={{ 
                    y: -6,
                    scale: 1.02,
                    borderColor: 'rgba(255, 221, 0, 0.5)',
                    boxShadow: '0 20px 40px rgba(255, 221, 0, 0.2)'
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-[#111114] rounded-xl border border-white/10 p-4 sm:p-6 md:p-8 transition-all duration-300 cursor-default"
                >
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.15,
                        rotate: 5,
                        backgroundColor: 'rgba(255, 221, 0, 0.1)',
                        borderColor: 'rgba(255, 221, 0, 0.3)'
                      }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white/5 border border-white/10 transition-all duration-300"
                    >
                      <motion.div 
                        className="text-white transition-colors duration-300"
                        whileHover={{ color: '#FFDD00' }}
                      >
                        {getIcon(service.icon)}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col h-full">
                    <motion.h3 
                      className="text-xl md:text-2xl font-bold text-white mb-3 transition-colors duration-300"
                      whileHover={{ color: '#FFDD00' }}
                    >
                      {language === 'ar' ? service.titleAr : service.title}
                    </motion.h3>
                    <p className="text-white/70 mb-6 flex-grow leading-relaxed">
                      {language === 'ar' ? service.descriptionAr : service.description}
                    </p>
                    
                    {(language === 'ar' ? service.featuresAr : service.features) && (language === 'ar' ? service.featuresAr : service.features).length > 0 && (
                      <ul className="mb-6 space-y-2" role="list">
                        {(language === 'ar' ? service.featuresAr : service.features).map((feature, idx) => (
                          <li key={idx} className="text-sm text-white/60 flex items-center">
                            <svg
                              className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-[#FFDD00] flex-shrink-0`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/20 text-white rounded-lg font-semibold hover:bg-[#FFDD00] hover:border-[#FFDD00] hover:text-black transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#FFDD00] focus:ring-offset-2 focus:ring-offset-black"
                        aria-label={`${t('servicesPage.learnMore')} ${service.title}`}
                      >
                        <span>{t('servicesPage.learnMore')}</span>
                        <motion.svg
                          className={`w-5 h-5 ${language === 'ar' ? 'mr-2' : 'ml-2'}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                          whileHover={{ x: language === 'ar' ? -4 : 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === 'ar' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Hover Glow Effect */}
                  {hoveredCard === service._id && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FFDD00]/5 to-transparent pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Featured Services Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16 lg:py-20 pb-20 sm:pb-24 md:pb-32 lg:pb-40 safe-area-left safe-area-right">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className={`w-10 h-px bg-white/30 ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
            <span className="text-xs md:text-sm font-semibold text-white/80 uppercase tracking-[0.2em]">
              {t('servicesPage.featured')}
            </span>
            <div className={`w-10 h-px bg-white/30 ${language === 'ar' ? 'mr-4' : 'ml-4'}`} />
          </div>
          <h2 className="font-arkes text-[clamp(2rem,6vw,3.75rem)] font-bold text-white mb-3 sm:mb-4 text-overflow-safe">
            {t('servicesPage.featuredServices')}
          </h2>
          <p className="text-white/80 max-w-[min(42rem,90vw)] mx-auto text-base sm:text-lg text-overflow-safe" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
            {t('servicesPage.featuredDescription')}
          </p>
        </motion.div>
        
        <div className="space-y-16 md:space-y-24">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              <div className="flex-1 w-full">
                <motion.div 
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(255, 221, 0, 0.3)'
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#111114] rounded-xl p-8 md:p-10 border border-white/10 transition-all duration-300"
                >
                  <div className="mb-6">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: 'rgba(255, 221, 0, 0.1)',
                        borderColor: 'rgba(255, 221, 0, 0.3)'
                      }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-lg bg-white/5 border border-white/10 transition-all duration-300"
                    >
                      <motion.div 
                        className="text-white transition-colors duration-300"
                        whileHover={{ color: '#FFDD00' }}
                      >
                        {getIcon(service.icon)}
                      </motion.div>
                    </motion.div>
                  </div>
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300"
                    whileHover={{ color: '#FFDD00' }}
                  >
                    {language === 'ar' ? service.titleAr : service.title}
                  </motion.h3>
                  <p className="text-white/70 mb-6 text-lg leading-relaxed">
                    {language === 'ar' ? service.descriptionAr : service.description}
                  </p>
                  {(language === 'ar' ? service.featuresAr : service.features) && (language === 'ar' ? service.featuresAr : service.features).length > 0 && (
                    <ul className="space-y-3 mb-8" role="list">
                      {(language === 'ar' ? service.featuresAr : service.features).map((feature, idx) => (
                        <li key={idx} className="text-white/80 flex items-center">
                          <svg
                            className={`w-5 h-5 ${language === 'ar' ? 'ml-3' : 'mr-3'} text-[#FFDD00] flex-shrink-0`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-[#FFDD00] text-black rounded-lg font-semibold hover:bg-[#FFDD00]/90 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#FFDD00] focus:ring-offset-2 focus:ring-offset-black"
                      aria-label={`${t('servicesPage.bookNow')} ${service.title}`}
                    >
                      <span>{t('servicesPage.bookNow')}</span>
                      <motion.svg
                        className={`w-5 h-5 ${language === 'ar' ? 'mr-2' : 'ml-2'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        whileHover={{ x: language === 'ar' ? -4 : 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === 'ar' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
              <div className="flex-1 w-full">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative bg-gradient-to-br from-[#111114] to-black rounded-xl h-64 md:h-96 flex items-center justify-center border border-white/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFDD00]/10 to-transparent" />
                  <motion.div 
                    className="relative z-10 text-white/20 scale-150"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {getIcon(service.icon)}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24 pb-20 sm:pb-24 md:pb-32 lg:pb-40 safe-area-left safe-area-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.01,
                borderColor: 'rgba(255, 221, 0, 0.3)',
                boxShadow: '0 20px 40px rgba(255, 221, 0, 0.15)'
              }}
              className="relative bg-gradient-to-br from-[#111114] to-black rounded-2xl p-8 md:p-12 text-center border border-white/10 overflow-hidden transition-all duration-300"
            >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,221,0,0.1)_0%,_transparent_50%)]" />
          </div>
          
          <div className="relative z-10">
            <h2 className="font-arkes text-[clamp(1.875rem,5vw,3rem)] font-bold text-white mb-3 sm:mb-4 text-overflow-safe">
              {t('servicesPage.readyToGetStarted')}
            </h2>
            <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-[min(42rem,90vw)] mx-auto leading-relaxed text-overflow-safe" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
              {t('servicesPage.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#FFDD00] text-black rounded-lg font-semibold hover:bg-[#FFDD00]/90 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#FFDD00] focus:ring-offset-2 focus:ring-offset-black"
                  aria-label={t('servicesPage.getAQuote')}
                >
                  {t('servicesPage.getAQuote')}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  aria-label={t('servicesPage.contactUs')}
                >
                  {t('servicesPage.contactUs')}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16 lg:py-20 pb-20 sm:pb-24 md:pb-32 lg:pb-40 safe-area-left safe-area-right">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className={`w-10 h-px bg-white/30 ${language === 'ar' ? 'ml-4' : 'mr-4'}`} />
            <span className="text-xs md:text-sm font-semibold text-white/80 uppercase tracking-[0.2em]">
              {t('servicesPage.testimonials')}
            </span>
            <div className={`w-10 h-px bg-white/30 ${language === 'ar' ? 'mr-4' : 'ml-4'}`} />
          </div>
          <h2 className="font-arkes text-[clamp(2rem,6vw,3.75rem)] font-bold text-white mb-3 sm:mb-4 text-overflow-safe">
            {t('servicesPage.trustedByProfessionals')}
          </h2>
          <p className="text-white/80 text-base sm:text-lg text-overflow-safe" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
            {t('servicesPage.testimonialsDescription')}
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                scale: 1.02,
                borderColor: 'rgba(255, 221, 0, 0.5)',
                boxShadow: '0 12px 24px rgba(255, 221, 0, 0.15)'
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111114] rounded-xl p-6 md:p-8 border border-white/10 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center mb-4" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-[#FFDD00]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <blockquote className="text-white/80 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-white/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
