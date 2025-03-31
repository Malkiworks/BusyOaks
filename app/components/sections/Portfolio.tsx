"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TiltCard } from '../ui/TiltCard';
import { AnimatedButton } from '../ui/AnimatedButton';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  detailedDesc: string;
  features: string[];
  liveDemoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Bier Tempratuur',
    description: 'Premium lifestyle brand with limited-edition apparel',
    imageUrl: '/images/portfolio/biertempratuur.jpg',
    tags: ['React', 'Vite', 'TailwindCSS', 'Animation'],
    detailedDesc: 'BierTempratuur is a premium lifestyle brand established in 2024, focused on authentic, limited-edition apparel.',
    features: [
      'Responsive design',
      'Product showcases',
      'Animated UI elements',
      'E-commerce capabilities'
    ],
    liveDemoUrl: 'https://biertempratuur.onrender.com'
  },
  {
    id: 2,
    title: 'Beauty by Zandri',
    description: 'Professional nail care services website',
    imageUrl: '/images/portfolio/zandri.jpg',
    tags: ['React', 'Vite', 'TailwindCSS', 'Responsive'],
    detailedDesc: 'A professional website for Beauty by Zandri, offering nail care and beauty services.',
    features: [
      'Service listings',
      'Pricing information',
      'Booking system integration',
      'Mobile-friendly design'
    ],
    liveDemoUrl: 'https://zandri.onrender.com'
  },
  {
    id: 3,
    title: 'Danette\'s Aesthetic & Laser',
    description: 'Premier destination for advanced beauty treatments and skin rejuvenation',
    imageUrl: '/images/portfolio/danette.jpg',
    tags: ['React', 'Vite', 'TailwindCSS', 'Gallery'],
    detailedDesc: 'Danette\'s Aesthetic and Laser is Middelburg\'s premier destination for advanced beauty treatments and skin rejuvenation.',
    features: [
      'Treatment showcase',
      'Before/after gallery',
      'Testimonial section',
      'Contact form integration'
    ],
    liveDemoUrl: 'https://danette.onrender.com'
  },
  {
    id: 4,
    title: 'WealthCartel Trading',
    description: 'Premium forex signals and trading education platform',
    imageUrl: '/images/portfolio/wealthcartel.jpg',
    tags: ['React', 'Vite', 'TailwindCSS', 'Trading'],
    detailedDesc: 'WealthCartel Trading Experts provides premium quality trading signals, educational resources, and personalized mentorship to traders.',
    features: [
      'Subscription plans',
      'Educational courses',
      'Trading signals display',
      'Responsive dashboard'
    ],
    liveDemoUrl: 'https://wc-cbgl.onrender.com'
  },
  {
    id: 5,
    title: 'Capital Bulls Trading',
    description: 'Professional trading platform with advanced analysis tools',
    imageUrl: '/images/portfolio/capitalbulls.jpg',
    tags: ['React', 'Next.js', 'Tailwind', 'Trading API'],
    detailedDesc: 'Capital Bulls Trading is a professional trading platform offering advanced market analysis and trading signals.',
    features: [
      'Live market data',
      'Trading signals',
      'Membership plans',
      'Educational resources'
    ],
    liveDemoUrl: 'https://tradewithcapitalbulls.com'
  }
];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };
  
  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };
  
  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-deep-navy to-charcoal"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-teal/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-teal/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6 text-gradient">
            Our Showcase
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore our portfolio of high-impact websites featuring advanced animations,
            interactive elements, and stunning visual effects.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <TiltCard
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                tags={project.tags}
                onClick={() => handleProjectSelect(project)}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <AnimatedButton 
            size="lg" 
            variant="outline"
            href="https://wa.me/qr/QJE2LOGS7YK3G1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us For More Projects
          </AnimatedButton>
        </motion.div>
      </div>
      
      {/* Project Details Modal/Dialog */}
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl max-h-[85vh] overflow-auto glass-effect rounded-xl p-6 z-50 border border-electric-teal/30">
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <Dialog.Title className="text-2xl md:text-3xl font-space font-bold text-gradient">
                    {selectedProject.title}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="text-white/70 hover:text-white bg-charcoal/50 hover:bg-charcoal p-2 rounded-full">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </Dialog.Close>
                </div>
                
                <div className="relative h-64 md:h-80 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-electric-teal/10 text-electric-teal rounded-full border border-electric-teal/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-white/80 mb-6">
                  {selectedProject.detailedDesc}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-space font-medium mb-3 text-white">Key Features</h3>
                  <ul className="list-disc pl-5 text-white/70 space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                {selectedProject.liveDemoUrl && (
                  <div className="flex justify-center">
                    <a 
                      href={selectedProject.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-electric-teal to-lime-green text-deep-navy font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <span className="mr-2">View Live Site</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}; 