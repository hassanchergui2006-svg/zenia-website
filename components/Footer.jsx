'use client';

import { motion } from 'framer-motion';
import { Leaf, Instagram, Mail, Heart } from 'lucide-react';

function TikTokIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
    </svg>
  );
}

const footerLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Produits', href: '#produits' },
  { label: 'Avantages', href: '#avantages' },
  { label: 'Offre étudiante', href: '#offre' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, label: '@zenia_043', href: 'https://www.instagram.com/zenia_043/', ariaLabel: 'Instagram ZENIA' },
  { icon: TikTokIcon, label: '@zenia_143', href: 'https://www.tiktok.com/@zenia_143', ariaLabel: 'TikTok ZENIA' },
  { icon: Mail, label: 'productszenia@gmail.com', href: 'mailto:productszenia@gmail.com', ariaLabel: 'Email ZENIA' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-dark-green text-cream relative overflow-hidden"
      aria-label="Pied de page ZENIA"
    >
      {/* Top wavy divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10">
          <path d="M0,0 C360,40 720,0 1440,0 L1440,40 L0,40 Z" fill="#F7F0E6" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-leaf-green/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-20 left-0 w-48 h-48 rounded-full bg-lavender/10 blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Decorative drawn elements */}
      <div className="absolute top-24 right-12 text-cream/10 text-5xl pointer-events-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>✦</div>
      <div className="absolute bottom-16 left-12 text-lavender/20 text-6xl pointer-events-none" aria-hidden="true" style={{ fontFamily: 'Kalam, cursive' }}>~</div>

      <div className="container-main px-4 md:px-8 pt-20 pb-8 relative z-10">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-cream rounded-2xl px-3 py-2">
                <img
                  src="/assets/logo.png"
                  alt="ZENIA — Focus & Calm"
                  className="h-14 w-auto object-contain mix-blend-multiply"
                  onError={(e) => {
                    e.currentTarget.parentElement.style.display = 'none';
                    e.currentTarget.parentElement.nextSibling.style.display = 'flex';
                  }}
                />
              </div>
              <div className="hidden items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cream/10 border border-cream/20 flex items-center justify-center">
                  <Leaf size={18} className="text-cream" aria-hidden="true" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-2xl text-cream" style={{ fontFamily: 'Playfair Display, serif' }}>ZENIA</span>
                  <span className="text-leaf-green text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>Focus & Calm</span>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p
              className="text-cream/70 text-base leading-relaxed"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              Ton bien-être, notre priorité.
            </p>

            {/* Handwriting note */}
            <p
              className="text-lavender text-xl"
              style={{ fontFamily: 'Kalam, cursive' }}
            >
              Ton moment bien-être entre deux révisions.
            </p>

            {/* Small trust badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['🌿 Naturel', '🇲🇦 Maroc', '✓ Certifié'].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-2.5 py-1 rounded-full bg-cream/10 text-cream/70 border border-cream/15"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3
              className="text-cream font-bold text-sm tracking-widest uppercase"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors duration-200 hover:text-lavender ${
                      link.label === 'Offre étudiante' ? 'text-lavender' : 'text-cream/65'
                    }`}
                    style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                  >
                    {link.label === 'Offre étudiante' ? `🎓 ${link.label}` : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3
              className="text-cream font-bold text-sm tracking-widest uppercase"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              Contact & Réseaux
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {socialLinks.map(({ icon: Icon, label, href, ariaLabel }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-cream/65 hover:text-lavender transition-colors duration-200 group"
                    aria-label={ariaLabel}
                    style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                  >
                    <div className="w-8 h-8 rounded-full bg-cream/10 border border-cream/15 flex items-center justify-center group-hover:bg-lavender/20 group-hover:border-lavender/30 transition-all duration-200">
                      <Icon size={14} aria-hidden="true" />
                    </div>
                    <span className="text-sm">{label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter placeholder */}
            <div className="mt-2 p-4 rounded-2xl bg-cream/5 border border-cream/10">
              <p
                className="text-cream/50 text-xs mb-2"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Rejoins notre communauté bien-être :
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="ton@email.ma"
                  disabled
                  aria-label="Inscription newsletter (bientôt disponible)"
                  className="flex-1 px-3 py-2 rounded-xl text-xs bg-cream/10 border border-cream/15 text-cream/60 placeholder:text-cream/30 cursor-not-allowed focus:outline-none"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                />
                <button
                  disabled
                  aria-label="S'inscrire à la newsletter (bientôt disponible)"
                  className="px-3 py-2 rounded-xl bg-leaf-green/50 text-cream text-xs font-semibold cursor-not-allowed opacity-60"
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  Bientôt
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-cream/40 text-xs"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            © 2026 ZENIA. Tous droits réservés.
          </p>
          <p
            className="text-cream/40 text-xs flex items-center gap-1"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Fait avec <Heart size={10} className="text-lavender fill-lavender mx-1" aria-hidden="true" /> au Maroc 🇲🇦
          </p>
          <div className="flex gap-4">
            {['Mentions légales', 'Politique de confidentialité'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-cream/40 text-xs hover:text-cream/70 transition-colors duration-200"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
