'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin } from 'lucide-react';
import NavLinks from './NavLinks';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
}

const MobileMenu = ({ isOpen, onClose, activeSection }: MobileMenuProps) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Focus trap implementation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-background border-l border-border shadow-2xl lg:hidden p-8 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Menu
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <NavLinks
                className="flex-col items-start gap-6 text-xl"
                activeSection={activeSection}
                onItemClick={onClose}
              />
            </nav>

            <div className="mt-auto pt-8 border-t border-border space-y-4">
              <a
                href="https://www.linkedin.com/in/dr-gudavalli-puja-sri-560785247/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-muted/50 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                LinkedIn Profile
              </a>
              <button
                className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                onClick={onClose}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
