'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowRight, GraduationCap, BookOpen } from 'lucide-react';

const checklistItems = [
  'Cours ✓',
  'Révisions ✓',
  'Projets ✓',
  'Bien-être ✓',
];

export default function CTASection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ZENIA20').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="offre"
      className="section-padding relative overflow-hidden"
      aria-labelledby="cta-title"
      style={{ background: 'linear-gradient(135deg, #F0E8F8 0%, #E8D8F4 40%, #F7F0E6 100%)' }}
    >
      {/* Background decorative shapes */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(181,139,214,0.18) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(221,232,210,0.25) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(233,207,98,0.08) 0%, transparent 60%)
          `,
        }}
      />

      {/* Decorative lines (notebook style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 border-t border-lavender/10"
            style={{ top: `${80 + i * 40}px` }}
          />
        ))}
      </div>

      {/* Drawn decorative elements */}
      <div className="absolute top-8 left-8 text-lavender/40 text-4xl pointer-events-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>★</div>
      <div className="absolute bottom-12 left-12 text-leaf-green/30 text-5xl pointer-events-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>~</div>
      <div className="absolute top-16 right-8 text-warm-yellow/50 text-3xl pointer-events-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>♡</div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — CTA content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-6"
          >
            {/* Graduation badge */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-lavender/30 flex items-center justify-center">
                <GraduationCap size={20} className="text-deep-purple" aria-hidden="true" />
              </div>
              <span
                className="text-deep-purple font-bold text-sm tracking-wide uppercase"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Offre étudiante exclusive
              </span>
            </div>

            {/* Big discount */}
            <div className="flex items-baseline gap-3">
              <span
                className="text-7xl md:text-8xl font-bold text-deep-purple leading-none"
                style={{ fontFamily: 'Playfair Display, serif' }}
                aria-label="Réduction de 20 pourcent"
              >
                -20%
              </span>
              <div className="flex flex-col">
                <span
                  className="text-deep-purple/70 font-semibold text-sm"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  sur nos produits
                </span>
                <span
                  className="text-deep-purple/70 font-semibold text-sm"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  anti-stress
                </span>
              </div>
            </div>

            {/* Title */}
            <h2
              id="cta-title"
              className="text-2xl md:text-3xl font-bold text-dark-green leading-snug"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Prends soin de toi{' '}
              <span className="brush-highlight-purple">pendant tes révisions</span>
            </h2>

            {/* Description */}
            <p
              className="text-ink/70 text-base leading-relaxed"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              Une routine naturelle, simple et agréable pour rester calme et concentré. Utilise le code promo ci-dessous pour profiter de l'offre.
            </p>

            {/* Promo code */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-lavender/40 px-5 py-3 shadow-sm"
                aria-label="Code promo ZENIA20"
              >
                <span
                  className="text-deep-purple font-bold text-xl tracking-widest"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  ZENIA20
                </span>
              </div>
              <motion.button
                onClick={handleCopy}
                whileTap={{ scale: 0.92 }}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-lavender/30 text-deep-purple font-semibold text-sm border border-lavender/40 hover:bg-lavender/40 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-deep-purple focus:ring-offset-2"
                aria-label={copied ? 'Code copié' : 'Copier le code promo'}
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                {copied ? (
                  <>
                    <Check size={16} aria-hidden="true" />
                    Copié !
                  </>
                ) : (
                  <>
                    <Copy size={16} aria-hidden="true" />
                    Copier
                  </>
                )}
              </motion.button>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#produits"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex w-fit gap-2 text-base px-8 py-4"
              aria-label="Profiter de l'offre étudiante ZENIA"
            >
              Profiter de l'offre
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>

            {/* Handwriting note */}
            <p
              className="text-deep-purple/80 text-2xl"
              style={{ fontFamily: 'Kalam, cursive' }}
              aria-label="Message d'encouragement"
            >
              You got this ! ♡
            </p>
          </motion.div>

          {/* Right — Notebook / post-it visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            {/* Notebook card */}
            <div className="relative">
              {/* Shadow card behind */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl"
                style={{ background: 'rgba(78, 40, 95, 0.12)' }}
                aria-hidden="true"
              />

              {/* Main notebook */}
              <div
                className="relative rounded-3xl p-8 w-full max-w-sm shadow-product"
                style={{
                  background: 'linear-gradient(145deg, #FFF9ED 0%, #F7F0E6 100%)',
                  backgroundImage: `
                    linear-gradient(145deg, #FFF9ED 0%, #F7F0E6 100%),
                    repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(111,139,97,0.08) 31px, rgba(111,139,97,0.08) 32px)
                  `,
                  border: '2px solid rgba(181,139,214,0.25)',
                }}
              >
                {/* Notebook header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-lavender/30 flex items-center justify-center">
                    <BookOpen size={16} className="text-deep-purple" aria-hidden="true" />
                  </div>
                  <span
                    className="font-bold text-dark-green text-base"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    To do list
                  </span>
                </div>

                {/* Checklist */}
                <ul className="flex flex-col gap-3 mb-6" role="list" aria-label="Liste bien-être étudiant">
                  {checklistItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 rounded border-2 border-leaf-green bg-soft-green/50 flex items-center justify-center shrink-0">
                        <Check size={11} className="text-dark-green" aria-hidden="true" />
                      </div>
                      <span
                        className="text-sm text-dark-green font-semibold"
                        style={{ fontFamily: 'Kalam, cursive' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-soft-green/60 pt-4">
                  <p
                    className="text-leaf-green text-lg text-center"
                    style={{ fontFamily: 'Kalam, cursive' }}
                  >
                    Prends soin de toi,
                    <br />
                    ton meilleur atout c'est toi ! 🌿
                  </p>
                </div>

                {/* Post-it sticker */}
                <div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-sm flex items-center justify-center shadow-md"
                  style={{
                    background: 'rgba(233, 207, 98, 0.85)',
                    transform: 'rotate(6deg)',
                  }}
                  aria-hidden="true"
                >
                  <span
                    className="text-center text-brown text-xs font-bold leading-tight px-2"
                    style={{ fontFamily: 'Kalam, cursive' }}
                  >
                    OFFRE
                    ÉTUDIANTE
                    -20%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
