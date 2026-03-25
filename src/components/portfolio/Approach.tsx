'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Link2, 
  Sparkles,
  Search,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const PHILOSOPHY = [
  { icon: <Search className="w-5 h-5" />, title: 'Deep Understanding', text: 'Deeply understanding patient needs and conditions before planning.' },
  { icon: <Target className="w-5 h-5" />, title: 'Personalized Plans', text: 'Creating customized therapy plans for every unique individual.' },
  { icon: <Users className="w-5 h-5" />, title: 'Building Trust', text: 'Establishing strong emotional connections and trust with patients.' },
  { icon: <Lightbulb className="w-5 h-5" />, title: 'Active Participation', text: 'Encouraging patients to take an active role in their recovery journey.' },
  { icon: <Link2 className="w-5 h-5" />, title: 'Family Support', text: 'Supporting and involving families in the rehabilitation process.' },
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
              Patient Care Philosophy
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-10 tracking-tighter line-clamp-2">
              My <span className="text-primary italic drop-shadow-[0_0_30px_rgba(37, 99, 235, 0.2)]">Approach</span>
            </h2>
            <div className="space-y-6">
              {PHILOSOPHY.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/10 group-hover:bg-primary/20 transition-all group-hover:-rotate-6">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <div className="border-b border-primary/5 pb-6 last:border-0 w-full">
                    <h3 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Future Journey */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-10 md:p-16 rounded-[4rem] relative overflow-hidden bg-white/[0.02]">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                   <div className="p-4 bg-primary/10 rounded-3xl">
                     <BookOpen className="w-8 h-8 text-primary" />
                   </div>
                   <h2 className="text-4xl font-extrabold tracking-tighter">Future <span className="text-primary italic">Journey</span></h2>
                </div>

                <div className="space-y-8 text-xl text-muted-foreground font-light leading-relaxed">
                  <p>
                    Dr. Puja Sri aims to expand her expertise in <span className="text-foreground font-medium">advanced rehabilitation techniques</span> and contribute to innovative therapy practices.
                  </p>
                  <p>
                    She is committed to continuous learning and delivering high-quality care to patients across all age groups, ensuring that every individual receives the best possible path to recovery.
                  </p>
                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-xs pt-8 border-t border-primary/10 cursor-pointer"
                  >
                    View Continuous Learning Path
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-6 -left-6 p-6 glass-card rounded-3xl border border-primary/20 shadow-xl animate-bounce">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
