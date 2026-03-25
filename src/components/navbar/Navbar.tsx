'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavLinks, { NAV_ITEMS } from './NavLinks';
import MobileMenu from './MobileMenu';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useActiveSection } from '@/hooks/useActiveSection';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollDirection, scrollY } = useScrollDirection();
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  // GSAP Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar Shrink & Glassmorphism
      ScrollTrigger.create({
        start: 'top top',
        end: '+=100',
        onUpdate: (self) => {
          const progress = self.progress;
          
          gsap.to(headerRef.current, {
            height: progress > 0 ? 70 : 90,
            backgroundColor: progress > 0 ? 'rgba(36, 95, 114, 0.9)' : 'rgba(36, 95, 114, 0)',
            backdropFilter: progress > 0 ? 'blur(20px)' : 'blur(0px)',
            borderBottom: progress > 0 ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0)',
            boxShadow: progress > 0 ? '0 10px 30px -10px rgba(0, 0, 0, 0.2)' : 'none',
            duration: 0.4,
            ease: 'power3.out',
          });
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Hide/Show on Scroll logic (Framer Motion handled via CSS classes or motion props)
  const isHidden = scrollDirection === 'down' && scrollY > 100;

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out h-[90px] flex items-center'
        )}
      >
        <div 
          ref={containerRef}
          className="container mx-auto px-6 h-full flex items-center justify-between"
        >
          {/* Logo */}
          <Link 
            href="#home" 
            className="group flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl"
            >
              P
            </motion.div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent group-hover:to-primary transition-all duration-300">
              PUJA SREE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <NavLinks activeSection={activeSection} />
          </nav>

          {/* Right Section: CTA & Hamburger */}
          <div className="flex items-center gap-4">


            <Link
              href="https://www.linkedin.com/in/dr-gudavalli-puja-sri-560785247/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </Link>

            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Link>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 lg:hidden rounded-xl bg-muted/50 hover:bg-muted transition-colors relative"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
              {isMenuOpen && (
                <span className="absolute inset-0 rounded-xl ring-2 ring-primary ring-offset-2" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;
