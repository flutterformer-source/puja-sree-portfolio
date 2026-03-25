'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { Sparkles, Calendar, Hospital, ShieldCheck, ArrowRight } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

      tl.from('.hero-badge', { y: 20, opacity: 0, delay: 0.2 })
        .from('.hero-title-line', { y: 100, opacity: 0, stagger: 0.1 }, '-=0.8')
        .from('.hero-tagline', { y: 20, opacity: 0 }, '-=0.8')
        .from('.hero-p', { y: 20, opacity: 0 }, '-=0.8')
        .from('.hero-highlights', { y: 20, opacity: 0, stagger: 0.1 }, '-=0.8')
        .from('.hero-btns', { y: 20, opacity: 0 }, '-=0.8');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    { icon: <Calendar className="w-4 h-4" />, text: '2+ Years Clinical Experience' },
    { icon: <Hospital className="w-4 h-4" />, text: 'Apollo Hospitals (Internship)' },
    { icon: <ShieldCheck className="w-4 h-4" />, text: 'Siddhis Speech & Hearing Solutions' },
    { icon: <Sparkles className="w-4 h-4" />, text: 'Multi-Specialty Rehabilitation' },
  ];

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <ParticleNetwork />
      <motion.div style={{ y: y1, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                Physiotherapist & Occupational Therapist
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[0.9]">
              <div className="hero-title-line overflow-hidden">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-[#0f172a] to-[#0f172a]/60">
                  DR. PUJA
                </span>
              </div>
              <div className="hero-title-line overflow-hidden">
                <span className="inline-block italic text-primary drop-shadow-[0_0_40px_rgba(37, 99, 235, 0.2)]">
                  SRI
                </span>
              </div>
            </h1>

            {/* Tagline */}
            <div className="hero-tagline overflow-hidden mb-8">
              <p className="text-2xl md:text-3xl font-medium text-accent/90 italic tracking-wide">
                Restoring Movement. Enhancing Lives.
              </p>
            </div>

            {/* Description */}
            <p className="hero-p text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light">
              A dedicated healthcare professional with <span className="text-foreground font-medium">2+ years of experience</span> in physiotherapy and occupational therapy. Passionate about improving patients’ quality of life through personalized treatment and compassionate care.
            </p>

            {/* Highlights (Compact for split layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="hero-highlights flex items-center gap-3 p-4 glass-card rounded-2xl">
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="hero-btns flex flex-col sm:flex-row items-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-5 bg-primary text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden transition-all shadow-primary/20 hover:shadow-primary/40 w-full sm:w-auto text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Appointment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-5 border border-black/5 bg-black/5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-black/10 transition-all w-full sm:w-auto"
              >
                Reach Out
              </motion.button>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            
            <div className="relative glass-card p-4 rounded-[4rem] overflow-hidden group">
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden">
                <img 
                  src="./dr-puja-sri.jpg" 
                  alt="Dr. Puja Sri" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Float Badge */}
              <div className="absolute bottom-10 -right-4 p-6 glass-card rounded-3xl border border-primary/20 shadow-2xl">
                <ShieldCheck className="w-8 h-8 text-primary mb-2" />
                <p className="text-[10px] font-bold uppercase tracking-widest">Certified Specialist</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Luxury Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
