'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PromotionalBanner from './PromotionalBanner';
import { useLanguage } from '@/contexts/LanguageContext';

const aboutImages = [
  {
    src: '/WhatsApp Image 2025-11-11 at 18.29.40_7cb1596f.webp',
    alt: 'Specialized door and window opening service',
  },
  {
    src: '/WhatsApp Image 2025-11-11 at 18.29.40_f2ca1be1.webp',
    alt: 'Precise plumbing and electrical installation work',
  },
  {
    src: '/DeliberateService.webp',
    alt: 'Professional concrete cutting and demolition service',
  },
];

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-black text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section - Top Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
        >
          {/* Horizontal line above */}
          <div style={{ width: '40px', height: '1px', backgroundColor: 'white', marginBottom: '12px' }} />
          {/* ABOUT text */}
          <h4 className="text-sm md:text-base font-semibold text-white uppercase tracking-wider mb-2">
            {t('about.title')}
          </h4>
          {/* ALMOHTAREF text */}
          <h3 
            className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide"
            style={{ fontFamily: '"ARK-ES", sans-serif' }}
          >
            ALMOHTAREF
          </h3>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 leading-tight"
        >
          {t('about.heading')}
        </motion.h2>

        {/* Images and Description Section */}
        <div className="grid md:grid-cols-[1fr_1fr] gap-6 md:gap-8 lg:gap-12 items-start mb-12 md:mb-16">
          {/* Three Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4"
          >
            {aboutImages.map((image) => (
              <div key={image.src} className="relative aspect-square rounded-lg border border-white overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 20vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </motion.div>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white leading-relaxed"
            style={{ alignSelf: 'center' }}
          >
            {t('about.description')}
          </motion.p>
        </div>

        {/* Special Offer Section */}
        <PromotionalBanner />
      </div>
    </section>
  );
}

