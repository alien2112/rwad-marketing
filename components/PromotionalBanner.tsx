'use client';

import { motion } from 'framer-motion';
import RotatingButton from './RotatingButton';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PromotionalBanner() {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl p-8 md:p-12 text-left"
      style={{
        background: 'linear-gradient(to right, #505050, #6b5a00, #8b7500, #b89a00, #d4b800, #FFDD00)',
      }}
    >
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
        {t('promotional.heading')}
      </h2>
      
      {/* Body Text */}
      <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
        {t('promotional.description')}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* SEND WHATS UP Button */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
            <RotatingButton
              text={t('promotional.sendWhatsApp')}
              width="auto"
              height={48}
              borderRadius={24}
              fontSize={16}
              fontWeight={600}
            />
          </a>

          {/* CALL US Button */}
          <a href="#contact">
            <RotatingButton
              text={t('promotional.callUs')}
              width="auto"
              height={48}
              borderRadius={24}
              fontSize={16}
              fontWeight={600}
            />
        </a>
      </div>
    </motion.div>
  );
}

