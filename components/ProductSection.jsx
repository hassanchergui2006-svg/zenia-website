'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Star, Leaf } from 'lucide-react';
import { featuredProducts, gammeProducts } from '@/data/products';

function SafeImage({ src, alt, fallback, className }) {
  const [attempt, setAttempt] = useState(0);
  const svgSrc = src.replace(/\.(png|jpg|jpeg|webp)$/i, '.svg');
  const hasAlt = svgSrc !== src;
  const currentSrc = attempt === 0 ? src : hasAlt ? svgSrc : null;
  if (!currentSrc || attempt >= 2) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl">{fallback || '🌿'}</span>
      </div>
    );
  }
  return (
    <img
      key={currentSrc}
      src={currentSrc}
      alt={alt}
      className={`absolute inset-0 w-full h-full ${className}`}
      onError={() => setAttempt((a) => a + 1)}
    />
  );
}

const badgeStyles = {
  green: 'bg-soft-green text-dark-green border-leaf-green/30',
  purple: 'bg-lavender/25 text-deep-purple border-lavender/40',
  yellow: 'bg-warm-yellow/50 text-brown border-warm-yellow/60',
};

const featuredVisuals = [
  { bg: 'from-lavender/20 via-paper to-soft-green/30' },
  { bg: 'from-soft-green/30 via-paper to-warm-yellow/20' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ProductSection() {
  return (
    <section
      id="produits"
      className="section-padding bg-cream relative overflow-hidden"
      aria-labelledby="products-title"
    >
      <div className="absolute top-10 left-0 w-56 h-56 rounded-full bg-warm-yellow/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-0 w-64 h-64 rounded-full bg-soft-green/20 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-leaf-green text-base mb-2 block" style={{ fontFamily: 'Kalam, cursive' }}>
            ~ Notre gamme ~
          </span>
          <h2
            id="products-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-green"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {'Découvrez notre '}
            <span className="brush-highlight-yellow">gamme bien-être</span>
          </h2>
          <p className="mt-4 text-ink/60 max-w-xl mx-auto text-base" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Des solutions naturelles pensées pour ton quotidien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {featuredProducts.map((product, i) => {
            const badgeClass = badgeStyles[product.badgeColor] || badgeStyles.green;
            const visual = featuredVisuals[i];
            return (
              <motion.article
                key={product.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-paper rounded-3xl border border-soft-green/50 shadow-card overflow-hidden group flex flex-col"
                aria-label={product.name}
              >
                <div className={`relative h-64 md:h-72 bg-gradient-to-br ${visual.bg} overflow-hidden`}>
                  <SafeImage
                    src={product.image}
                    alt={product.name + ' ZENIA'}
                    fallback={i === 0 ? '🍬' : '💊'}
                    className="object-contain scale-90 drop-shadow-xl p-4"
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border shadow-sm whitespace-nowrap ${
                        product.labelColor === 'purple'
                          ? 'bg-lavender/25 text-deep-purple border-lavender/40'
                          : 'bg-soft-green/80 text-dark-green border-leaf-green/40'
                      }`}
                      style={{ fontFamily: 'Kalam, cursive' }}
                    >
                      {product.label}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 z-20">
                    <span className={`badge-product border font-semibold ${badgeClass}`}>{product.badge}</span>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-0.5 z-20">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={10} className="text-warm-yellow fill-warm-yellow" aria-hidden="true" />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-dark-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                </div>
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div>
                    <h3
                      className="text-xl font-bold text-dark-green group-hover:text-leaf-green transition-colors duration-300"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-leaf-green font-semibold mt-0.5" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                      {product.subtitle}
                    </p>
                  </div>
                  <p className="text-sm text-ink/65 leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-xs px-2.5 py-1 rounded-full bg-cream text-dark-green/70 border border-soft-green font-medium"
                        style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-1 mt-auto">
                    <span className="text-2xl font-bold text-dark-green" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {product.price}{' '}
                      <span className="text-base font-semibold text-ink/50">{product.currency}</span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a href="#produits" className="btn-secondary flex-1 text-sm py-2.5 gap-1.5">
                      <Eye size={14} aria-hidden="true" />
                      Voir le produit
                    </a>
                    <a href="#offre" className="btn-primary flex-1 text-sm py-2.5 gap-1.5">
                      <ShoppingBag size={14} aria-hidden="true" />
                      Commander
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-center text-dark-green font-bold text-base flex items-center justify-center gap-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            <Leaf size={14} className="text-leaf-green" aria-hidden="true" />
            {'Découvrez aussi notre gamme complète'}
            <Leaf size={14} className="text-leaf-green" aria-hidden="true" />
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gammeProducts.map((product, i) => {
            const badgeClass = badgeStyles[product.badgeColor] || badgeStyles.green;
            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="bg-paper rounded-2xl border border-soft-green/40 shadow-card overflow-hidden group flex flex-col"
                aria-label={product.name}
              >
                <div className="relative h-36 bg-gradient-to-br from-soft-green/20 to-cream overflow-hidden">
                  <SafeImage
                    src={product.image}
                    alt={product.name + ' ZENIA'}
                    fallback={product.emoji}
                    className="object-contain scale-90 drop-shadow-md p-2"
                  />
                  <div className="absolute top-2 left-2 z-10">
                    <span className={`badge-product border text-[10px] px-2 py-0.5 ${badgeClass}`}>{product.badge}</span>
                  </div>
                  <div className="absolute inset-0 bg-dark-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                </div>
                <div className="p-3 flex flex-col gap-2 flex-1">
                  <h3 className="text-sm font-bold text-dark-green leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {product.name}
                  </h3>
                  <p className="text-xs text-ink/60 leading-relaxed flex-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-1">
                    <span className="text-base font-bold text-dark-green" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {product.price}{' '}
                      <span className="text-xs font-medium text-ink/50">{product.currency}</span>
                    </span>
                    <a
                      href="#offre"
                      className="text-xs font-semibold text-leaf-green hover:text-dark-green transition-colors duration-200 underline underline-offset-2"
                      style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                    >
                      Commander
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-ink/50" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Tous nos produits sont 100% naturels - Fabriques au Maroc - Livraison dans tout le royaume
          </p>
        </motion.div>
      </div>
    </section>
  );
}
