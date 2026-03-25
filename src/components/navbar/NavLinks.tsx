'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Expertise', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Case Studies', href: '#cases', id: 'cases' },
  { label: 'Approach', href: '#approach', id: 'approach' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

interface NavLinksProps {
  className?: string;
  activeSection?: string;
  onItemClick?: () => void;
}

const NavLinks = ({ className, activeSection, onItemClick }: NavLinksProps) => {
  return (
    <ul className={cn('flex items-center gap-8', className)}>
      {NAV_ITEMS.map((item, index) => (
        <motion.li
          key={item.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <Link
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.id);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
              onItemClick?.();
            }}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {item.label}
          </Link>
          {activeSection === item.id && (
            <motion.div
              layoutId="active-underline"
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          {!activeSection && (
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
          )}
        </motion.li>
      ))}
    </ul>
  );
};

export default NavLinks;
