'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import RotatingButton from '@/components/RotatingButton';
import { getImageUrl } from '@/lib/imageUtils';
import { useLanguage } from '@/contexts/LanguageContext';
import SkeletonLoader from '@/components/SkeletonLoader';

interface Project {
  _id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  tags: string[];
  tagsAr: string[];
  category: string;
  categoryAr: string;
  year: string;
  link?: string;
  featured: boolean;
}

// Category keys mapped to database values
const categoryMap: Record<string, { en: string; ar: string }> = {
  drilling: { en: 'Drilling', ar: 'حفر' },
  cutting: { en: 'Cutting', ar: 'قطع' },
  repair: { en: 'Repair', ar: 'إصلاح' },
  demolition: { en: 'Demolition', ar: 'هدم' },
};

const categoryKeys = ['all', 'drilling', 'cutting', 'repair', 'demolition'] as const;
type CategoryKey = typeof categoryKeys[number];

export default function Projects() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects;
    }
    
    const categoryMapping = categoryMap[selectedCategory];
    if (!categoryMapping) return projects;
    
    // Compare with the appropriate field based on language
    const categoryValue = language === 'ar' ? categoryMapping.ar : categoryMapping.en;
    const categoryField = language === 'ar' ? 'categoryAr' : 'category';
    
    return projects.filter((project) => project[categoryField as keyof Project] === categoryValue);
  }, [selectedCategory, projects, language]);

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero/Intro Section */}
      <section className="relative py-20 px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="w-12 h-px bg-white/60 mb-4" />
            <h4 className="text-sm md:text-base font-semibold text-white/60 uppercase tracking-wider mb-8">
              {t('projects.ourLatestProjects')}
            </h4>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            {t('projects.showcaseOfExcellence')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/70 max-w-3xl"
          >
            {t('projects.description')}
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-10 bg-black border-y border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categoryKeys.map((categoryKey) => (
              <RotatingButton
                key={categoryKey}
                text={t(`projects.categories.${categoryKey}`)}
                width="auto"
                height={48}
                borderRadius={24}
                fontSize={16}
                fontWeight={600}
                letterSpacing={0}
                isActive={selectedCategory === categoryKey}
                onClick={() => setSelectedCategory(categoryKey)}
                useGradient={true}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-10 bg-black">
        <div className="max-w-[1400px] mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkeletonLoader variant="project" count={6} />
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative bg-[#111114] rounded-3xl overflow-hidden border border-white/20 hover:border-[#FFDD00]/50 transition-all duration-300 flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={getImageUrl(project.image)}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {project.year}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                        {language === 'ar' ? project.titleAr : project.title}
                      </h3>
                      <p className="text-sm text-white/70 mb-4 line-clamp-2 flex-1">
                        {language === 'ar' ? project.descriptionAr : project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(language === 'ar' ? project.tagsAr : project.tags).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-800/50 text-white/70 text-xs font-semibold rounded-full uppercase tracking-wider border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full bg-[#FFDD00] hover:bg-[#e6c700] text-black px-6 py-3 rounded-xl font-semibold text-sm uppercase transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                          <span>{t('projects.explore')}</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          >
                            <path
                              d="M6 12L10 8L6 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      ) : (
                        <button className="group w-full bg-[#FFDD00] hover:bg-[#e6c700] text-black px-6 py-3 rounded-xl font-semibold text-sm uppercase transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2">
                          <span>{t('projects.explore')}</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          >
                            <path
                              d="M6 12L10 8L6 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-white/70 mb-6">
                {t('projects.noProjectsFound')}
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-[#FFDD00] hover:bg-[#e6c700] text-black px-6 py-3 rounded-xl font-semibold uppercase transition-colors"
              >
                {t('projects.viewAllProjects')}
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
