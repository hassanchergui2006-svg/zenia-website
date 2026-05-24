'use client';

import { motion } from 'framer-motion';
import { Leaf, Heart, Sparkles, MapPin, BookOpen } from 'lucide-react';
import { advantages } from '@/data/advantages';

const iconMap = {
  Leaf: Leaf,
  Heart: Heart,
  Sparkles: Sparkles,
  MapPin: MapPin,
  BookOpen: BookOpen,
};

const colorMap = {
  green: {
    bg: 'bg-soft-green/60',
    icon: 'text-dark-green',
    border: 'border-soft-green',
    accent: 'bg-soft-green',
  },
  purple: {
    bg: 'bg-lavender/20',
    icon: 'text-deep-purple',
    border: 'border-lavender/30',
    accent: 'bg-lavender/30',
  },
  yellow: {
    bg: 'bg-warm-yellow/20',
    icon: 'text-brown',
    border: 'border-warm-yellow/40',
    accent: 'bg-warm-yellow/40',
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Advantages() {
  return (
    <section
      id="avantages"
      className="section-padding bg-paper relative overflow-hidden"
      aria-labelledby="advantages-title"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-soft-green/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-lavender/15 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-main relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span
            className="text-leaf-green text-base mb-2 block"
            style={{ fontFamily: 'Kalam, cursive' }}
          >
            ~ Pourquoi nous choisir ~
          </span>
          <h2
            id="advantages-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-green"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Pourquoi choisir{' '}
            <span className="brush-highlight-green">ZENIA</span> ?
          </h2>
          <p
            className="mt-4 text-ink/60 max-w-xl mx-auto text-base"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Une routine naturelle pensée pour les étudiants et jeunes actifs marocains.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {advantages.map((adv) => {
            const Icon = iconMap[adv.icon] || Leaf;
            const colors = colorMap[adv.color] || colorMap.green;

            return (
              <motion.article
                key={adv.id}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={`card-paper border ${colors.border} relative overflow-hidden group`}
                aria-label={adv.title}
              >
                {/* Decorative corner */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 rounded-bl-3xl ${colors.accent} opacity-40`}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-4 shadow-sm`}
                >
                  <Icon size={22} className={colors.icon} aria-hidden="true" />
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-bold text-dark-green mb-2 group-hover:text-leaf-green transition-colors duration-300"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {adv.title}
                </h3>
                <p
                  className="text-sm text-ink/65 leading-relaxed"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  {adv.description}
                </p>

                {/* Small accent dot */}
                <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${colors.accent} opacity-60`} aria-hidden="true" />
              </motion.article>
            );
          })}

          {/* Last card spanning full width on some breakpoints — checklist style */}
          <motion.div
            variants={cardVariants}
            className="sm:col-span-2 lg:col-span-3 bg-soft-green/30 rounded-2xl border border-soft-green p-6 flex flex-col sm:flex-row items-center gap-4 justify-between"
          >
            <div className="flex flex-col gap-1">
              <span
                className="text-leaf-green text-lg"
                style={{ fontFamily: 'Kalam, cursive' }}
              >
                "Une routine naturelle pour rester calme, concentré et détendu."
              </span>
              <span
                className="text-sm text-ink/60"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                — ZENIA, Focus & Calm
              </span>
            </div>
            <a
              href="#produits"
              className="btn-primary whitespace-nowrap shrink-0"
            >
              Voir nos produits
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
