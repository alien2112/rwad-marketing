'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsAndConditionsPage() {
  const { t } = useLanguage();
  const isRTL = useLanguage().language === 'ar';

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('terms.title')}</h1>
          <p className="text-white/70 text-sm">
            {t('terms.lastUpdated')}: {t('terms.lastUpdatedDate')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.section1.title')}</h2>
            <p className="text-white/80 leading-relaxed">{t('terms.section1.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.section2.title')}</h2>
            <p className="text-white/80 leading-relaxed mb-4">{t('terms.section2.content')}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>{t('terms.section2.item1')}</li>
              <li>{t('terms.section2.item2')}</li>
              <li>{t('terms.section2.item3')}</li>
              <li>{t('terms.section2.item4')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.section3.title')}</h2>
            <p className="text-white/80 leading-relaxed">{t('terms.section3.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.section4.title')}</h2>
            <p className="text-white/80 leading-relaxed">{t('terms.section4.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.section5.title')}</h2>
            <p className="text-white/80 leading-relaxed">{t('terms.section5.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.section6.title')}</h2>
            <p className="text-white/80 leading-relaxed">{t('terms.section6.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.section7.title')}</h2>
            <p className="text-white/80 leading-relaxed">{t('terms.section7.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.section8.title')}</h2>
            <p className="text-white/80 leading-relaxed">{t('terms.section8.content')}</p>
          </section>
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-3">{t('terms.contact.title')}</h3>
          <p className="text-white/80 mb-4">{t('terms.contact.description')}</p>
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

