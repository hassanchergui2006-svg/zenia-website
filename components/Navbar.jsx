'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Produits', href: '#produits' },
  { label: 'Avantages', href: '#avantages' },
  { label: 'Offre étudiante', href: '#offre' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-soft border-b border-soft-green/50'
          : 'bg-cream/70 backdrop-blur-sm'
      }`}
    >
      <nav className="container-main flex items-center justify-between h-16 md:h-20 px-4 md:px-8" aria-label="Navigation principale">
        {/* Logo */}
        <a href="#accueil" className="flex items-center group" aria-label="ZENIA - Accueil">
          <img
            src="/assets/logo.png"
            alt="ZENIA — Focus & Calm"
            className="h-12 md:h-14 w-auto object-contain mix-blend-multiply transition-opacity duration-300 group-hover:opacity-85"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-dark-green flex items-center justify-center">
              <Leaf size={16} className="text-cream" aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xl text-dark-green" style={{ fontFamily: 'Playfair Display, serif' }}>ZENIA</span>
              <span className="text-leaf-green text-[10px] font-semibold tracking-widest uppercase" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>Focus & Calm</span>
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 text-ink/80 hover:text-dark-green hover:bg-soft-green/60 ${
                  link.label === 'Offre étudiante'
                    ? 'text-deep-purple hover:bg-lavender/20'
                    : ''
                }`}
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="badge-offer text-xs">
            🎓 -20% étudiant
          </span>
          <a
            href="#produits"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Commander
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl text-dark-green hover:bg-soft-green/60 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-cream/95 backdrop-blur-md border-t border-soft-green/50 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 text-ink/80 hover:text-dark-green hover:bg-soft-green/60 ${
                    link.label === 'Offre étudiante'
                      ? 'text-deep-purple hover:bg-lavender/20'
                      : ''
                  }`}
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 pb-1 flex flex-col gap-2 border-t border-soft-green/50 mt-1">
                <div className="flex items-center justify-center">
                  <span className="badge-offer">🎓 Offre étudiante -20%</span>
                </div>
                <a
                  href="#produits"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center text-sm"
                >
                  Commander
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
