"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import { useAnimation } from '@/app/lib/animation-context';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const { enableCustomCursor, disableCustomCursor } = useAnimation();
  
  const navbarHeight = useTransform(scrollY, [0, 100], [100, 80]);
  const navbarBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(10, 25, 41, 0)', 'rgba(10, 25, 41, 0.8)']
  );
  const navbarBorderOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  // Enable custom cursor when page loads
  useEffect(() => {
    enableCustomCursor();
    
    return () => {
      disableCustomCursor();
    };
  }, [enableCustomCursor, disableCustomCursor]);
  
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-transparent flex items-center justify-between px-6 lg:px-12"
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
            className="relative w-10 h-10 bg-gradient-to-br from-electric-teal to-lime-green rounded-lg flex items-center justify-center"
            whileHover={{ rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-deep-navy font-bold text-xl">&lt;/&gt;</span>
            <motion.div 
              className="absolute inset-0 rounded-lg z-[-1]" 
              animate={{ 
                boxShadow: ['0 0 5px rgba(0, 255, 255, 0.5)', '0 0 20px rgba(0, 255, 255, 0.7)', '0 0 5px rgba(0, 255, 255, 0.5)'] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-space font-bold text-lg leading-tight text-white">Busy Oaks</span>
            <span className="text-xs text-electric-teal opacity-80">Coding for Busy Oaks</span>
          </div>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
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
          className="btn-primary ml-4"
          whileHover={{ y: -5, boxShadow: '0 10px 15px rgba(0, 255, 255, 0.3)' }}
          whileTap={{ y: 0, boxShadow: '0 0px 0px rgba(0, 255, 255, 0.3)' }}
        >
          Start Your Project
        </motion.a>
      </nav>
      
      {/* Mobile Menu Button */}
      <button 
        className="block md:hidden relative w-10 h-10 z-50"
        onClick={toggleMenu}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-8 h-0.5 bg-electric-teal mb-2"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          />
          <motion.div
            className="w-8 h-0.5 bg-electric-teal"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.div
            className="w-8 h-0.5 bg-electric-teal mt-2"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
          />
        </div>
      </button>
      
      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-deep-navy/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          {['Services', 'Portfolio', 'Packages', 'About', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Link 
                href={`/#${item.toLowerCase()}`}
                className="text-2xl text-white hover:text-electric-teal transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="#packages"
            className="btn-primary mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          >
            Start Your Project
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
}; 