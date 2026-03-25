'use client';

import { motion } from 'framer-motion';
import { User, GraduationCap, Hospital, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
          {/* Left: Typography Header & Side Label */}
          <div className="w-full lg:w-4/12 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-white/5 mb-8">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/80">Core Philosophy</span>
              </div>
              
              <h2 className="text-7xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.8] text-foreground">
                HEALING <br /> 
                <span className="text-primary italic drop-shadow-[0_0_40px_rgba(255, 255, 227, 0.4)]">BEYOND</span> <br /> 
                LIMITS
              </h2>

              <div className="flex items-center gap-4 p-6 glass-card rounded-[2.5rem] border-white/5 max-w-[280px]">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Credentials</p>
                  <p className="text-sm font-bold text-primary">BPT Specialist</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Detailed Narrative Content */}
          <div className="w-full lg:w-8/12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-8 text-2xl text-muted-foreground leading-relaxed font-light">
                <p className="text-foreground font-light text-3xl mb-12">
                  "Recovery is not a destination, but a <span className="text-primary font-medium">transformation of agency</span>."
                </p>
                <p>
                  Dr. Puja Sri is a dedicated <span className="text-foreground font-medium underline decoration-primary/20 underline-offset-8">BPT Specialist</span> from Montessori College, Vijayawada, who believes that rehabilitation is not just about physical recovery—it's about restoring dignity to every patient.
                </p>
                <p>
                  With foundational training from <span className="text-foreground font-medium italic">Apollo Hospitals, Banjara Hills</span>, she has mastered the delicate balance between orthopedic precision and neurological compassion.
                </p>
              </div>

              {/* High-Impact Clinical Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div className="group p-10 glass-card rounded-[3rem] border-white/5 hover:border-primary/30 transition-all duration-500 bg-white/0 hover:bg-white/[0.02]">
                  <Hospital className="w-12 h-12 text-primary mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                  <h4 className="text-xl font-bold mb-4 tracking-tight">Multimodal Strategy</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Expertise spanning Orthopedic, Neurological, and Cardiopulmonary rehabilitation pathways.</p>
                </div>
                
                <div className="group p-10 glass-card rounded-[3rem] border-white/5 hover:border-primary/30 transition-all duration-500 bg-white/0 hover:bg-white/[0.02]">
                  <User className="w-12 h-12 text-primary mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                  <h4 className="text-xl font-bold mb-4 tracking-tight">Patient Centricity</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">Focusing on emotional well-being as a core pillar of functional and functional recovery.</p>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5">
                <p className="text-sm text-muted-foreground font-light max-w-xl">
                  Currently driving patient-centric results at <span className="text-foreground font-medium">Siddhis Speech and Hearing Solutions</span>, integrating advanced physiotherapy with functional occupational therapy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
