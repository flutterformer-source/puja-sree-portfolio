'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'siddhis',
    title: 'Physiotherapist & Occupational Therapist',
    company: 'Siddhis Speech and Hearing Solutions',
    period: 'Current',
    description: 'Working with patients requiring both physical and functional rehabilitation, focusing on improving independence and quality of life.',
    responsibilities: [
      'Conduct patient assessments and therapy planning',
      'Provide personalized physiotherapy and occupational therapy sessions',
      'Help patients regain daily living skills',
      'Build strong patient relationships for better recovery outcomes',
      'Work closely with families to ensure continuity of care'
    ]
  },
  {
    id: 'apollo',
    title: 'Clinical Intern',
    company: 'Apollo Hospitals, Banjara Hills',
    period: 'Internship Period',
    description: 'Gained exposure to advanced treatment protocols and multidisciplinary healthcare environments across multiple departments.',
    responsibilities: [
      'Assisted in orthopedic rehabilitation treatments',
      'Managed neurological cases including stroke recovery',
      'Supported cardio-pulmonary therapy sessions',
      'Participated in sports injury rehabilitation programs',
      'Worked closely with senior doctors and therapists'
    ]
  },
];

const Experience = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background min-h-[80vh] flex flex-col justify-center">
      {/* Medical Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            Clinical Career Path
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            CLINICAL <span className="text-primary italic">JOURNEY</span>
          </h2>
          <p className="text-muted-foreground/60 text-sm uppercase tracking-widest font-medium">Select a milestone to view full clinical details</p>
        </div>

        {/* Horizontal Card Row */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-7xl mx-auto">
          {EXPERIENCES.map((exp) => {
            const isSelected = selectedId === exp.id;
            
            return (
              <motion.div
                key={exp.id}
                layout
                onClick={() => setSelectedId(isSelected ? null : exp.id)}
                className={`cursor-pointer transition-all duration-500 rounded-[2.5rem] border ${
                  isSelected 
                    ? 'bg-white text-[#245f72] border-white shadow-[0_30px_100px_-15px_rgba(255,255,255,0.2)] md:w-[60%]' 
                    : 'bg-white/5 text-foreground border-white/10 hover:border-primary/40 md:w-[40%]'
                } p-10 relative overflow-hidden flex flex-col`}
              >
                {/* Background Accent for Unselected */}
                {!isSelected && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -mr-8 -mt-8 blur-2xl" />
                )}

                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors ${
                        isSelected ? 'bg-[#245f72]/10 border-[#245f72]/20' : 'bg-primary/10 border-primary/20'
                      }`}>
                        <Building2 className={`w-6 h-6 ${isSelected ? 'text-[#245f72]' : 'text-primary'}`} />
                      </div>
                      <div>
                        <p className={`text-[9px] font-black uppercase tracking-[0.2em] mb-1 opacity-60`}>Institution</p>
                        <p className="font-bold tracking-tight">{exp.company}</p>
                      </div>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm ${
                      isSelected ? 'bg-[#245f72] text-white' : 'bg-primary text-primary-foreground'
                    }`}>
                      {exp.period}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="mb-8">
                    <h3 className={`text-2xl md:text-3xl font-black mb-4 tracking-tight leading-tight transition-colors ${
                      isSelected ? 'text-[#245f72]' : 'text-white'
                    }`}>
                      {exp.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors ${
                      isSelected ? 'text-[#245f72]/80' : 'text-muted-foreground'
                    }`}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Selection Indicator / Entire Text Wrapper */}
                  <div className="mt-auto">
                    <AnimatePresence mode="wait">
                      {isSelected ? (
                        <motion.div
                          key="selected-content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-6 border-t border-[#245f72]/10 space-y-4"
                        >
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#245f72]/60 mb-2">Detailed Clinical Responsibilities</p>
                          <div className="grid grid-cols-1 gap-3">
                            {exp.responsibilities.map((resp, i) => (
                              <div key={i} className="flex gap-3 items-start animate-in fade-in slide-in-from-left duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                                <CheckCircle2 className="w-4 h-4 text-[#245f72] mt-0.5 flex-shrink-0" />
                                <p className="text-[13px] leading-snug font-medium text-[#245f72]/90">{resp}</p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="unselected-prompt"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 group-hover:text-primary transition-colors"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
