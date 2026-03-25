'use client';

import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Brain, 
  Activity, 
  HeartPulse, 
  UserRoundCheck, 
  ShieldCheck,
  Zap,
  Hammer
} from 'lucide-react';

import Link from 'next/link';

const SKILLS = [
  { 
    id: 'orthopedic-rehabilitation', 
    name: 'Orthopedic Rehabilitation', 
    icon: <Hammer className="w-6 h-6 text-primary" />, 
    level: 'Expert',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'neurological-rehabilitation', 
    name: 'Neurological Rehabilitation', 
    icon: <Brain className="w-6 h-6 text-primary" />, 
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'cardio-pulmonary-therapy', 
    name: 'Cardio-Pulmonary Therapy', 
    icon: <HeartPulse className="w-6 h-6 text-primary" />, 
    level: 'Specialist',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'sports-injury-rehabilitation', 
    name: 'Sports Injury Rehabilitation', 
    icon: <Zap className="w-6 h-6 text-primary" />, 
    level: 'Specialist',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'occupational-therapy', 
    name: 'Occupational Therapy', 
    icon: <UserRoundCheck className="w-6 h-6 text-primary" />, 
    level: 'Expert',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'functional-independence', 
    name: 'Functional Independence', 
    icon: <Stethoscope className="w-6 h-6 text-primary" />, 
    level: 'Practitioner',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'pain-management', 
    name: 'Pain Management', 
    icon: <Activity className="w-6 h-6 text-primary" />, 
    level: 'Senior',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: 'post-surgical-rehab', 
    name: 'Post-Surgical Rehab', 
    icon: <ShieldCheck className="w-6 h-6 text-primary" />, 
    level: 'Expert',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter"
          >
            Areas of <span className="text-primary italic drop-shadow-[0_0_30px_rgba(37, 99, 235, 0.2)]">Expertise</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
             className="text-xl text-muted-foreground font-light leading-relaxed"
          >
            A multi-disciplinary approach to <span className="text-foreground font-medium">functional recovery</span> and patient-centric rehabilitation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <Link href={`/expertise/${skill.id}`} key={skill.id} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  transition: { duration: 0.3 },
                  boxShadow: "0 20px 40px -20px rgba(15, 23, 42, 0.12)"
                }}
                className="p-10 glass-card rounded-[2.5rem] flex flex-col items-center text-center relative overflow-hidden h-full cursor-pointer transition-all duration-300 group-hover:bg-white/10 group-hover:border-primary/40"
              >
                <div className="absolute inset-0 z-0">
                  <img src={skill.image} alt={skill.name} className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors duration-500" />

                
                <div className="p-5 bg-primary/10 rounded-2xl mb-8 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-500 shadow-primary/10 relative z-10">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3 tracking-tight relative z-10">{skill.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 bg-primary/5 px-4 py-1.5 rounded-full relative z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {skill.level}
                </span>

                <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-1">
                  View Details
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
