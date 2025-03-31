"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ParticleBackground } from '../ui/ParticleBackground';
import { AnimatedButton } from '../ui/AnimatedButton';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(containerRef, { once: false, threshold: 0.1 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  // Parallax effect on scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
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
        repeatType: 'loop'
      }
    }
  };
  
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ 
        backgroundImage: 'radial-gradient(circle at center, rgba(10, 25, 41, 0.2) 0%, rgba(26, 32, 44, 0.8) 100%)' 
      }}
    >
      {/* Particles Background */}
      <ParticleBackground />
      
      {/* Decorative Blobs */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 morphing-blob" />
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 morphing-blob" />
      
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 inline-block"
        >
          <span className="bg-electric-teal/20 text-electric-teal py-2 px-4 rounded-full text-sm md:text-base font-medium">
            Web Design & Development Services
          </span>
        </motion.div>
        
        <motion.h1
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Coding for Busy Oaks
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          We create sleek, modern websites with high-impact animations
          and interactive elements while you relax and focus on growing your business.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
        
        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {[
            { value: '50+', label: 'Hours Saved' },
            { value: '24h', label: 'Delivery Time' },
            { value: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="glass-effect p-4 rounded-xl">
              <div className="font-space font-bold text-3xl text-gradient">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        variants={bounceArrowVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-electric-teal font-medium mb-2">Dig Deeper</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-electric-teal"
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