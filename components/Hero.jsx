'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const stickers = [
  { label: 'Focus & Calm', bg: 'bg-soft-green border-leaf-green/40 text-dark-green', rotate: '-rotate-3', pos: 'top-4 -left-6 md:-left-10' },
  { label: '100% Naturel', bg: 'bg-warm-yellow/70 border-warm-yellow text-brown', rotate: 'rotate-2', pos: 'top-8 -right-4 md:-right-8' },
  { label: 'Concentration', bg: 'bg-lavender/30 border-lavender/50 text-deep-purple', rotate: 'rotate-3', pos: 'bottom-24 -left-4 md:-left-8' },
  { label: 'Détente', bg: 'bg-paper border-soft-green text-dark-green', rotate: '-rotate-2', pos: 'bottom-16 -right-2 md:-right-6' },
  { label: '🇲🇦 Fabriqué au Maroc', bg: 'bg-cream border-leaf-green/30 text-dark-green', rotate: 'rotate-1', pos: 'bottom-2 left-1/2 -translate-x-1/2' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const [imgAttempt, setImgAttempt] = useState(0);
  const heroSrcs = ['/assets/pack-bien-etre.png', '/assets/pack-bien-etre.svg'];
  const heroSrc = heroSrcs[imgAttempt] ?? null;

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-cream"
      aria-label="Section principale ZENIA"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-soft-green/30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-0 w-64 h-64 rounded-full bg-lavender/15 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-warm-yellow/15 blur-2xl pointer-events-none" aria-hidden="true" />

      {/* Decorative drawn elements */}
      <div className="absolute top-32 left-8 text-leaf-green/30 text-5xl pointer-events-none select-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>✦</div>
      <div className="absolute bottom-32 right-12 text-lavender/40 text-4xl pointer-events-none select-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>♡</div>
      <div className="absolute top-48 right-20 text-warm-yellow/50 text-3xl pointer-events-none select-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>★</div>
      <div className="absolute bottom-48 left-16 text-leaf-green/25 text-6xl pointer-events-none select-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>~</div>

      <div className="container-main px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — Text content */}
          <div className="flex flex-col gap-6 order-1">

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              <span className="badge-offer text-sm">
                🎓 Offre étudiante&nbsp;<strong>-20%</strong>
              </span>
            </motion.div>

            {/* Main title */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-dark-green"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Ton{' '}
                <span className="brush-highlight-green">bien-être,</span>
                <br />
                <span
                  className="italic font-normal text-dark-green"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  notre{' '}
                  <span className="brush-highlight-purple">priorité.</span>
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base md:text-lg text-ink/70 leading-relaxed max-w-lg"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              ZENIA accompagne les étudiants et jeunes actifs marocains avec une routine naturelle pensée pour{' '}
              <strong className="text-dark-green font-semibold">réduire le stress</strong>,
              favoriser la détente et garder le{' '}
              <strong className="text-dark-green font-semibold">focus</strong>.
            </motion.p>

            {/* Handwriting note */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-leaf-green text-lg"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              "Prends soin de toi entre deux révisions."
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#produits" className="btn-primary gap-2 text-base px-7 py-3.5">
                Découvrir les produits
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#offre" className="btn-secondary gap-2 text-base px-7 py-3.5">
                <Sparkles size={16} aria-hidden="true" />
                Profiter de -20%
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex flex-wrap gap-4 pt-2"
            >
              {['✓ Livraison au Maroc', '✓ Naturel & Bio', '✓ Satisfait ou remboursé'].map((item) => (
                <span key={item} className="text-xs text-ink/60 font-semibold" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Product image */}
          <div className="relative flex items-center justify-center order-2 lg:order-2 min-h-[340px] md:min-h-[480px]">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              {/* Product image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
                {!heroSrc ? (
                  <div className="w-full h-full rounded-3xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #DDE8D2 0%, #F7F0E6 50%, #FFF9ED 100%)' }}>
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex gap-2">
                        <span className="text-5xl">💊</span>
                        <span className="text-5xl">🍬</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-4xl">💧</span>
                        <span className="text-4xl">🍵</span>
                      </div>
                      <span className="text-dark-green/60 font-bold text-sm mt-1" style={{ fontFamily: 'Playfair Display, serif' }}>ZENIA</span>
                    </div>
                  </div>
                ) : (
                  <img
                    key={heroSrc}
                    src={heroSrc}
                    alt="Pack Bien-Être ZENIA — Capsules, Gummies, Huile Essentielle, Tisane"
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl p-2"
                    onError={() => setImgAttempt((a) => a + 1)}
                  />
                )}
                {/* Glow derrière l'image */}
                <div className="absolute inset-0 -m-8 rounded-full bg-soft-green/25 blur-2xl -z-10" aria-hidden="true" />
              </div>

              {/* Decorative circle behind */}
              <div className="absolute inset-0 -m-6 rounded-full bg-soft-green/20 blur-xl -z-10" aria-hidden="true" />
            </motion.div>

            {/* Sticker labels around product */}
            {stickers.map((sticker, i) => (
              <motion.div
                key={sticker.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease: 'backOut' }}
                className={`absolute ${sticker.pos} z-20`}
              >
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-semibold text-xs shadow-sm border ${sticker.bg} ${sticker.rotate} whitespace-nowrap`}
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  {sticker.label}
                </span>
              </motion.div>
            ))}

            {/* Drawn stars / hearts */}
            <div className="absolute top-6 left-10 text-warm-yellow/70 text-2xl pointer-events-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>✦</div>
            <div className="absolute bottom-10 right-8 text-lavender/60 text-xl pointer-events-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>♡</div>
          </div>
        </div>
      </div>
    </section>
  );
}
