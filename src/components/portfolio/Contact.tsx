'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter"
          >
            Get In <span className="text-primary italic drop-shadow-[0_0_30px_rgba(37, 99, 235, 0.2)]">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground font-light leading-relaxed"
          >
           Have a question or want to discuss a potential collaboration? Feel free to reach out using the form below or via social media.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12 rounded-[3.5rem] flex flex-col h-full"
          >
            <h3 className="text-3xl font-bold mb-10 tracking-tight">Contact Info</h3>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                  <p className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">puja.g0807@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">9666848983</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                  <p className="text-xl font-bold">Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-primary/10">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Connect on Social</p>
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://www.linkedin.com/in/dr-gudavalli-puja-sri-560785247/"
                  target="_blank"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-primary/10"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="#"
                  className="w-12 h-12 border border-black/5 bg-black/5 rounded-2xl flex items-center justify-center hover:bg-black/10 transition-all"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-panel p-10 md:p-12 rounded-[3.5rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-black/5 border border-black/5 rounded-2xl focus:outline-none focus:border-primary/30 transition-all placeholder:text-muted-foreground/50 font-light"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-black/5 border border-black/5 rounded-2xl focus:outline-none focus:border-primary/30 transition-all placeholder:text-muted-foreground/50 font-light"
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can I help you?"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30 font-light"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1 mb-2 block">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-6 py-4 bg-black/5 border border-black/5 rounded-2xl focus:outline-none focus:border-primary/30 transition-all placeholder:text-muted-foreground/50 font-light resize-none"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
              >
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer Content */}
        <footer className="pt-12 border-t border-black/5 text-center">
           <p className="text-sm font-light text-muted-foreground mb-4">
             © {currentYear} Dr. Puja Sri. All Rights Reserved.
           </p>
           <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/40">
             Follow for updates on rehabilitation, therapy, and wellness.
           </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
