'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsAndConditionsPage() {
  const { t } = useLanguage();
  const isRTL = useLanguage().language === 'ar';

  return (
    <main className="min-h-screen bg-black text-white safe-area-left safe-area-right">
      <div className="max-w-[min(56rem,95vw)] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={isRTL ? 'rotate-180' : ''}
            >
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{t('terms.backToHome')}</span>
          </Link>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-3 sm:mb-4 text-overflow-safe">{t('terms.title')}</h1>
          <p className="text-white/70 text-xs sm:text-sm" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>
            {t('terms.lastUpdated')}: {t('terms.lastUpdatedDate')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-6 sm:space-y-8">
          <section>
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold mb-3 sm:mb-4 text-overflow-safe">{t('terms.section1.title')}</h2>
            <p className="text-white/80 leading-relaxed text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{t('terms.section1.content')}</p>
          </section>

          <section>
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold mb-3 sm:mb-4 text-overflow-safe">{t('terms.section2.title')}</h2>
            <p className="text-white/80 leading-relaxed mb-3 sm:mb-4 text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{t('terms.section2.content')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-2 sm:ml-4 text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
              <li>{t('terms.section2.item1')}</li>
              <li>{t('terms.section2.item2')}</li>
              <li>{t('terms.section2.item3')}</li>
              <li>{t('terms.section2.item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold mb-3 sm:mb-4 text-overflow-safe">{t('terms.section3.title')}</h2>
            <p className="text-white/80 leading-relaxed text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{t('terms.section3.content')}</p>
          </section>

          <section>
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold mb-3 sm:mb-4 text-overflow-safe">{t('terms.section4.title')}</h2>
            <p className="text-white/80 leading-relaxed text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{t('terms.section4.content')}</p>
          </section>

          <section>
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold mb-3 sm:mb-4 text-overflow-safe">{t('terms.section5.title')}</h2>
            <p className="text-white/80 leading-relaxed text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{t('terms.section5.content')}</p>
          </section>

          <section>
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold mb-3 sm:mb-4 text-overflow-safe">{t('terms.section6.title')}</h2>
            <p className="text-white/80 leading-relaxed text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{t('terms.section6.content')}</p>
          </section>

          <section>
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold mb-3 sm:mb-4 text-overflow-safe">{t('terms.section7.title')}</h2>
            <p className="text-white/80 leading-relaxed text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{t('terms.section7.content')}</p>
          </section>

          <section>
            <h2 className="text-[clamp(1.25rem,4vw,1.5rem)] font-semibold mb-3 sm:mb-4 text-overflow-safe">{t('terms.section8.title')}</h2>
            <p className="text-white/80 leading-relaxed text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{t('terms.section8.content')}</p>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-12 sm:mt-16 p-4 sm:p-6 bg-gray-900/50 rounded-lg border border-gray-800">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-overflow-safe" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>{t('terms.contact.title')}</h3>
          <p className="text-white/80 mb-3 sm:mb-4 text-overflow-safe" style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>{t('terms.contact.description')}</p>
          <Link
            href="/contact"
            className="inline-block bg-[#FFDD00] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#FFDD00]/90 transition-colors"
          >
            {t('terms.contact.button')}
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}


