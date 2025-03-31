"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import { useAnimation } from '@/app/lib/animation-context';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const { triggerConfettiEffect } = useAnimation();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      url: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      url: 'https://linkedin.com',
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      url: 'https://wa.me/qr/QJE2LOGS7YK3G1',
    },
  ];
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-teal/40 to-transparent" />
      <div className="absolute -top-40 -right-20 w-80 h-80 morphing-blob opacity-10" />
      <div className="absolute -bottom-40 -left-20 w-80 h-80 morphing-blob opacity-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-5xl font-space font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's Create Something Amazing
          </motion.h2>
          <motion.p 
            className="text-white/70 mb-8 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Ready to elevate your web presence with stunning visuals and engaging interactions?
            Get in touch with us today.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="card-hover p-8">
            <h3 className="text-2xl font-space font-bold mb-6 text-white">Contact Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-electric-teal/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-teal">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Joshua Malki</p>
                  <a href="tel:+27797384779" className="text-white/60 hover:text-electric-teal transition-colors">+27 79 738 4779</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-electric-teal/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-teal">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Dylan Duminy</p>
                  <a href="tel:+27662325409" className="text-white/60 hover:text-electric-teal transition-colors">+27 66 232 5409</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-electric-teal/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-teal">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a href="mailto:oaksbusy@gmail.com" className="text-white/60 hover:text-electric-teal transition-colors">oaksbusy@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-charcoal/40 flex items-center justify-center text-white/70 hover:text-electric-teal hover:bg-charcoal/60 transition-all duration-300 border border-white/10"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.4)',
                    borderColor: 'rgba(0, 255, 255, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => triggerConfettiEffect()}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="card-hover p-8">
            <h3 className="text-2xl font-space font-bold mb-6 text-white">Get Started</h3>
            <p className="text-white/70 mb-6">
              Ready to start your project? Click one of the buttons below to contact us via WhatsApp with your preferred package.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => window.open('https://wa.me/qr/QJE2LOGS7YK3G1', '_blank')}
                className={cn(
                  "block w-full py-3 px-4 rounded-lg text-center transition-all duration-300",
                  "bg-charcoal hover:bg-charcoal/80 text-white font-medium border border-electric-teal/30"
                )}
              >
                Basic Package
              </button>
              
              <button 
                onClick={() => window.open('https://wa.me/qr/QJE2LOGS7YK3G1', '_blank')}
                className={cn(
                  "block w-full py-3 px-4 rounded-lg text-center transition-all duration-300",
                  "bg-gradient-to-r from-electric-teal to-lime-green hover:from-electric-teal/90 hover:to-lime-green/90 text-deep-navy font-medium"
                )}
              >
                Pro Package
              </button>
              
              <button 
                onClick={() => window.open('https://wa.me/qr/QJE2LOGS7YK3G1', '_blank')}
                className={cn(
                  "block w-full py-3 px-4 rounded-lg text-center transition-all duration-300",
                  "bg-charcoal hover:bg-charcoal/80 text-white font-medium border border-electric-teal/30"
                )}
              >
                Enterprise Package
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 