"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Web Design', href: '/#services' },
        { name: 'Web Development', href: '/#services' },
        { name: 'UI/UX Design', href: '/#services' },
        { name: 'Animation', href: '/#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/#about' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Packages', href: '/#packages' },
        { name: 'Contact', href: '/#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookies', href: '/cookies' },
      ],
    },
  ];
  
  return (
    <footer className="bg-deep-navy relative overflow-hidden pt-16 pb-8 px-6">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-teal/40 to-transparent" />
      
      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 morphing-blob opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 morphing-blob opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 bg-gradient-to-br from-electric-teal to-lime-green rounded-lg flex items-center justify-center">
                <span className="text-deep-navy font-bold text-xl">&lt;/&gt;</span>
                <div className="absolute inset-0 rounded-lg opacity-40 z-[-1]" 
                  style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)' }} 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-space font-bold text-lg leading-tight text-white">Busy Oaks</span>
                <span className="text-xs text-electric-teal opacity-80">Coding for Busy Oaks</span>
              </div>
            </Link>
            
            <p className="text-white/60 mb-6 max-w-md">
              We specialize in creating modern, sleek websites with high-impact animations and interactive elements
              that engage users and elevate brands.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {['GitHub', 'Twitter', 'LinkedIn', 'Discord'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full bg-charcoal/40 text-white/60 flex items-center justify-center hover:text-electric-teal hover:bg-charcoal transition-colors duration-300"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{platform}</span>
                  {/* Simple placeholders for social icons */}
                  {platform === 'GitHub' && <span className="text-sm">GH</span>}
                  {platform === 'Twitter' && <span className="text-sm">TW</span>}
                  {platform === 'LinkedIn' && <span className="text-sm">LI</span>}
                  {platform === 'Discord' && <span className="text-sm">DS</span>}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-space font-bold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/60 hover:text-electric-teal transition-colors duration-300 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {currentYear} Busy Oaks. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span className="text-white/40 text-sm mr-2">Made with</span>
            <motion.span
              className="text-electric-teal"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ❤
            </motion.span>
            <span className="text-white/40 text-sm ml-2">by Busy Oaks Team</span>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <motion.div 
          className="fixed bottom-8 right-8 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="w-12 h-12 rounded-full bg-charcoal/70 backdrop-blur-sm text-electric-teal flex items-center justify-center border border-electric-teal/30"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
            }}
            whileTap={{ y: 0 }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}; 