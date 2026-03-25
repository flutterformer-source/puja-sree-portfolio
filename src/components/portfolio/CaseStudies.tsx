'use client';

import { motion } from 'framer-motion';
import { 
  Dna, 
  Brain, 
  Wind, 
  Trophy, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const CASES = [
  {
    title: 'Orthopedic Rehabilitation',
    subtitle: 'Post-Surgical Recovery',
    icon: <Dna className="w-8 h-8 text-primary" />,
    description: 'Handled post-surgical patients with joint replacements, focusing on mobility restoration, pain reduction, and strengthening exercises.',
    tags: ['Joint Replacement', 'Mobility', 'Pain Management']
  },
  {
    title: 'Neurological Rehabilitation',
    subtitle: 'Stroke & Motor Function',
    icon: <Brain className="w-8 h-8 text-primary" />,
    description: 'Worked with stroke and neurological disorder patients to improve motor function, balance, and coordination through structured therapy sessions.',
    tags: ['Stroke Recovery', 'Motor Function', 'Coordination']
  },
  {
    title: 'Cardio-Pulmonary Care',
    subtitle: 'Endurance & Capacity',
    icon: <Wind className="w-8 h-8 text-primary" />,
    description: 'Assisted patients with breathing exercises and endurance training to improve lung capacity and overall stamina.',
    tags: ['Breathing Exercises', 'Endurance', 'Lung Capacity']
  },
  {
    title: 'Sports Injury Recovery',
    subtitle: 'Return to Activity',
    icon: <Trophy className="w-8 h-8 text-primary" />,
    description: 'Helped athletes recover from injuries through targeted rehabilitation programs and gradual return-to-activity planning.',
    tags: ['Athletic Rehab', 'Injury Recovery', 'Performance']
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-24 relative overflow-hidden bg-primary/[0.02]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20"
            >
              Clinical Impact
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extrabold tracking-tighter"
            >
              Case Handling & <span className="text-primary italic drop-shadow-[0_0_30px_rgba(37, 99, 235, 0.2)]">Outcomes</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg font-light max-w-sm italic border-l-2 border-primary/20 pl-6"
          >
            "Every recovery is a unique journey of resilience and specialized care."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group glass-card p-10 md:p-12 rounded-[3rem] relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight className="w-8 h-8 text-primary/50" />
               </div>
               
               <div className="mb-8 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                 {item.icon}
               </div>
               
               <div className="mb-6">
                 <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">{item.subtitle}</p>
                 <h3 className="text-3xl font-bold tracking-tight mb-4">{item.title}</h3>
                 <p className="text-muted-foreground text-lg leading-relaxed font-light">
                   {item.description}
                 </p>
               </div>
               
               <div className="flex flex-wrap gap-2">
                 {item.tags.map((tag) => (
                   <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-foreground/70">
                     {tag}
                   </span>
                 ))}
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
