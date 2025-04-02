"use client";

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import { useAnimation } from '@/app/lib/animation-context';
import Link from 'next/link';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const { enableCustomCursor, disableCustomCursor } = useAnimation();
  
  const navbarHeight = useTransform(scrollY, [0, 100], [100, 80]);
  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 25, 41, 0)', 'rgba(10, 25, 41, 0.8)']
  );
  const navbarBorderOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  
  // Enable custom cursor when page loads
  useEffect(() => {
    enableCustomCursor();
    
    return () => {
      disableCustomCursor();
    };
  }, [enableCustomCursor, disableCustomCursor]);
  
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-transparent flex items-center justify-between px-4 sm:px-6 lg:px-12"
      style={{
        height: navbarHeight,
        backgroundColor: navbarBackground,
        borderColor: useTransform(scrollY, 
          [0, 100], 
          ['rgba(255, 255, 255, 0)', 'rgba(0, 255, 255, 0.2)']
        ),
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-electric-teal to-lime-green rounded-lg flex items-center justify-center"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-deep-navy font-bold text-sm sm:text-xl">&lt;/&gt;</span>
            <motion.div 
              className="absolute inset-0 rounded-lg z-[-1]" 
              animate={{ 
                boxShadow: ['0 0 5px rgba(0, 255, 255, 0.5)', '0 0 20px rgba(0, 255, 255, 0.7)', '0 0 5px rgba(0, 255, 255, 0.5)'] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-space font-bold text-sm sm:text-lg leading-tight text-white">Busy Oaks</span>
            <span className="text-[10px] sm:text-xs text-electric-teal opacity-80">Coding for Busy Oaks</span>
          </div>
        </Link>
      </div>
      
      {/* Navigation - Responsive for all devices */}
      <nav className="flex items-center gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm lg:text-base">
        {['Services', 'Portfolio', 'Packages', 'About', 'Contact'].map((item) => (
          <Link 
            key={item} 
            href={`/#${item.toLowerCase()}`}
            className="relative group"
          >
            <span className="text-white hover:text-electric-teal transition-colors">{item}</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-electric-teal to-lime-green group-hover:w-full transition-all duration-300"
              layoutId={`underline-${item}`}
              layout
            />
          </Link>
        ))}
        <motion.a
          href="#packages"
          className="btn-primary ml-2 sm:ml-4 text-xs sm:text-sm py-2 px-3 sm:px-4 sm:py-2 lg:px-6 lg:py-3"
          whileHover={{ y: -5, boxShadow: '0 10px 15px rgba(0, 255, 255, 0.3)' }}
          whileTap={{ y: 0, boxShadow: '0 0px 0px rgba(0, 255, 255, 0.3)' }}
        >
          Start
        </motion.a>
      </nav>
    </motion.header>
  );
}; 