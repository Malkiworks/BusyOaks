"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ParticleBackground } from '../ui/ParticleBackground';
import { AnimatedButton } from '../ui/AnimatedButton';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(containerRef, { once: false });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  // Parallax effect on scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Text glitch effect with GSAP
  useEffect(() => {
    if (inView && textRef.current) {
      const text = textRef.current.innerText;
      const chars = Array.from(text);
      
      textRef.current.innerHTML = '';
      
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        textRef.current?.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: 'power2.out',
          onComplete: () => {
            if (char !== ' ') {
              gsap.to(span, {
                color: '#0ff',
                duration: 0.2,
                repeat: 1,
                yoyo: true,
                ease: 'power2.inOut',
                delay: Math.random() * 0.2
              });
            }
          }
        });
      });
    }
  }, [inView]);
  
  // Bounce arrow animation
  const bounceArrowVariants = {
    hidden: { y: 0 },
    visible: { 
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };
  
  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-0 overflow-x-hidden"
      style={{ 
        backgroundImage: 'radial-gradient(circle at center, rgba(10, 25, 41, 0.2) 0%, rgba(26, 32, 44, 0.8) 100%)' 
      }}
    >
      {/* Particles Background */}
      <ParticleBackground />
      
      {/* Decorative Blobs - adjust position for mobile */}
      <div className="absolute top-[10%] left-[5%] w-40 sm:w-64 h-40 sm:h-64 morphing-blob opacity-30 sm:opacity-20" />
      <div className="absolute bottom-[5%] right-[3%] w-48 sm:w-80 h-48 sm:h-80 morphing-blob opacity-30 sm:opacity-20" />
      
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center px-2"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 inline-block"
        >
          <div style={{ marginTop: '10px' }}></div>
          <span className="bg-electric-teal/20 text-electric-teal py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm md:text-base font-medium">
            Web Design & Development Services
          </span>
        </motion.div>
        
        <motion.h1
          ref={textRef}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-4 sm:mb-6 text-white leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Coding for Busy Oaks
        </motion.h1>
        
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-10 text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          We create sleek, modern websites with high-impact animations
          and interactive elements while you relax and focus on growing your business.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <AnimatedButton size="lg" variant="primary" triggerConfetti href="#packages">
            Start Your Project
          </AnimatedButton>
          
          <AnimatedButton size="lg" variant="outline" href="#portfolio">
            View Portfolio
          </AnimatedButton>
        </motion.div>
        
        {/* Stats - stack on mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {[
            { value: '50+', label: 'Hours Saved' },
            { value: '24h', label: 'Delivery Time' },
            { value: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="glass-effect p-3 sm:p-4 rounded-xl">
              <div className="font-space font-bold text-2xl sm:text-3xl text-gradient">{stat.value}</div>
              <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        variants={bounceArrowVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-electric-teal font-medium mb-1 sm:mb-2 text-sm sm:text-base">Dig Deeper</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6 text-electric-teal"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </motion.div>
    </section>
  );
}; 