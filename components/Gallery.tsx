'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import RotatingButton from './RotatingButton';
import { useLanguage } from '@/contexts/LanguageContext';

const galleryImages = [
  { src: '/IMG-20251111-WA0028.webp', alt: 'Diamond saw cutting reinforced wall' },
  { src: '/IMG-20251111-WA0037.webp', alt: 'Crew preparing safety harnesses for elevated work' },
  { src: '/IMG-20251111-WA0038.webp', alt: 'Detail of finished concrete surface after repair' },
  { src: '/IMG-20251111-WA0032.webp', alt: 'Completed wall opening with clean edges' },
  { src: '/IMG-20251111-WA0034.webp', alt: 'Concrete cutting tools arranged on site' },
  { src: '/WhatsApp Image 2025-11-11 at 18.29.40_f2ca1be1.webp', alt: 'Precise plumbing and electrical installation work' },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: t('gallery.filters.all') },
    { key: 'cutting', label: t('gallery.filters.cutting') },
    { key: 'perforation', label: t('gallery.filters.perforation') },
    { key: 'maintenance', label: t('gallery.filters.maintenance') },
  ];

  return (
    <section id="project" className="py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-black text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12"
          style={{ textAlign: 'left' }}
        >
          {t('gallery.heading')}
        </motion.h2>

        {/* Image Gallery - Responsive masonry layout */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="relative rounded-lg overflow-hidden border border-white aspect-[6/5] sm:aspect-[6/5]"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-lg overflow-hidden border border-white aspect-[6/5] sm:aspect-[6/5] sm:mt-8 md:mt-12"
          >
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-lg overflow-hidden border border-white aspect-[3/4] sm:aspect-[3/4]"
          >
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-lg overflow-hidden border border-white aspect-[3/4] sm:aspect-[3/4] sm:mt-8 md:mt-12"
          >
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Image 5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-lg overflow-hidden border border-white aspect-square sm:aspect-square"
          >
            <Image
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Image 6 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-lg overflow-hidden border border-white aspect-[3/4] sm:aspect-[3/4] sm:mt-8 md:mt-12"
          >
            <Image
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {filters.map((filter) => (
            <RotatingButton
              key={filter.key}
              text={filter.label}
              width="auto"
              height={48}
              borderRadius={24}
              fontSize={16}
              fontWeight={600}
              letterSpacing={0}
              isActive={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
              useGradient={true}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

