'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';


export default function Hero() {
  const { t } = useLanguage();
  const [showFullSentence, setShowFullSentence] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setShowFullSentence((prev) => !prev);
    }, 2600);
    return () => clearInterval(toggle);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <Image
        src="/banner.webp"
        alt="Concrete architecture background"
        fill
        priority
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 w-full max-w-[1200px] px-4 sm:px-6 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 text-center">
        <div className="min-h-[2.2rem] md:min-h-[2.6rem] flex items-center mt-8">
          <AnimatePresence mode="wait">
            {showFullSentence ? (
              <motion.p
                key="full-sentence"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-black text-sm md:text-lg tracking-[0.18em] font-semibold"
              >
                {t('hero.tagline')}
              </motion.p>
            ) : (
              <motion.div
                key="alt-sentence"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative inline-flex h-[1.6em] md:h-[1.8em] items-center justify-center overflow-hidden"
              >
                <span className="text-black text-base md:text-lg font-bold tracking-[0.25em]">
                  {t('hero.taglineAlt')}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl"
        >
          <div className="relative rounded-[32px] md:rounded-[48px] border border-white/20 bg-white/[0.08] backdrop-blur-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="pointer-events-none absolute inset-[10px] rounded-[40px] border border-white/10" />
            <div className="relative flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <span
                  className="hero-logo-text font-arkes block text-[clamp(3rem,6vw,4.5rem)] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                >
                  ALMOHTAREF
                </span>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <span className="mt-5 block text-xs md:text-sm tracking-[0.6em] uppercase text-white/70">
                  {t('hero.alwaysReady')}
                </span>
              </div>
              <Link
                href="#about"
                className="group relative flex items-center justify-center w-14 h-14 rounded-full border border-white/30 bg-black/30 text-white transition-colors duration-300 hover:bg-[#FFDD00] hover:text-black"
                aria-label="Scroll to about section"
              >
                <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-black/20 transition-colors" />
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-y-1"
                >
                  <circle cx="11" cy="11" r="9" stroke="currentColor" strokeOpacity="0.45" />
                  <path
                    d="M7.5 10.5L11 14L14.5 10.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 7.5V13"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

