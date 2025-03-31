"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedButton } from '../ui/AnimatedButton';
import { cn } from '@/app/lib/utils';
import * as Tabs from '@radix-ui/react-tabs';

interface Package {
  id: string;
  name: string;
  price: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  popular?: boolean;
  codeSnippet?: string;
}

const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 'R1500',
    description: 'Perfect for small businesses and personal projects',
    features: [
      { text: 'Responsive Design', included: true },
      { text: '1 Page', included: true },
      { text: 'Basic Animations', included: true },
      { text: 'SEO Optimization', included: true },
      { text: '3D Elements', included: false },
      { text: 'Advanced Interactions', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'R3500',
    description: 'For growing businesses that need more features',
    features: [
      { text: 'Responsive Design', included: true },
      { text: 'Up to 4 Pages', included: true },
      { text: 'Advanced Animations', included: true },
      { text: 'SEO Optimization', included: true },
      { text: '3D Elements', included: true },
      { text: 'Advanced Interactions', included: true },
    ],
    popular: true,
    codeSnippet: `// Pro package includes custom animations
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Apply to any element
<motion.div {...fadeInAnimation}>
  Your content here
</motion.div>`,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'R5000',
    description: 'Complete solution for large businesses and complex projects',
    features: [
      { text: 'Responsive Design', included: true },
      { text: 'Unlimited Pages', included: true },
      { text: 'Premium Animations', included: true },
      { text: 'SEO Optimization', included: true },
      { text: '3D Elements', included: true },
      { text: 'Advanced Interactions', included: true },
    ],
  },
];

export const Packages = () => {
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('features');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  return (
    <section 
      id="packages" 
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-deep-navy rounded-full opacity-50 blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-6 text-gradient">
            Choose Your Package
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Select the perfect web design package for your needs.
            All packages include our signature animations and interactive elements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className={cn(
                'relative card-hover p-8 h-full flex flex-col',
                pkg.popular && 'border-electric-teal/50',
                hoveredPackage === pkg.id && 'scale-105 shadow-[0_0_30px_rgba(0,255,255,0.3)]'
              )}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPackage(pkg.id)}
              onMouseLeave={() => setHoveredPackage(null)}
              style={{
                transform: hoveredPackage === pkg.id ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 transform translate-x-[20%] -translate-y-[20%]">
                  <div className="relative">
                    <div className="absolute inset-0 bg-electric-teal/20 animate-pulse-subtle rounded-full blur-xl" />
                    <div className="relative bg-electric-teal/90 text-deep-navy font-medium py-1 px-4 rounded-full text-sm">
                      Most Popular
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-space font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                  <span className="text-white/60 ml-2">/ project</span>
                </div>
                <p className="text-white/70">{pkg.description}</p>
              </div>
              
              <Tabs.Root
                value={activeTab}
                onValueChange={setActiveTab}
                className="flex-1 flex flex-col"
              >
                <Tabs.List className="flex border-b border-white/10 mb-6">
                  <Tabs.Trigger
                    value="features"
                    className={cn(
                      'pb-2 text-sm font-medium mr-4 relative',
                      activeTab === 'features' ? 'text-electric-teal' : 'text-white/50'
                    )}
                  >
                    Features
                    {activeTab === 'features' && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-teal"
                        layoutId="activeTabIndicator"
                      />
                    )}
                  </Tabs.Trigger>
                  {pkg.codeSnippet && (
                    <Tabs.Trigger
                      value="code"
                      className={cn(
                        'pb-2 text-sm font-medium relative',
                        activeTab === 'code' ? 'text-electric-teal' : 'text-white/50'
                      )}
                    >
                      Sample Code
                      {activeTab === 'code' && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-teal"
                          layoutId="activeTabIndicator"
                        />
                      )}
                    </Tabs.Trigger>
                  )}
                </Tabs.List>
                
                <Tabs.Content value="features" className="flex-1">
                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <span className={cn(
                          'w-5 h-5 rounded-full flex items-center justify-center mr-3',
                          feature.included ? 'bg-electric-teal/20 text-electric-teal' : 'bg-white/5 text-white/40'
                        )}>
                          {feature.included ? '✓' : '×'}
                        </span>
                        <span className={cn(
                          feature.included ? 'text-white' : 'text-white/40'
                        )}>
                          {feature.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </Tabs.Content>
                
                {pkg.codeSnippet && (
                  <Tabs.Content value="code" className="flex-1">
                    <div className="bg-charcoal rounded-lg p-4 overflow-auto text-xs text-white/80 mb-8 h-[200px]">
                      <pre className="font-mono">{pkg.codeSnippet}</pre>
                    </div>
                  </Tabs.Content>
                )}
                
                <div className="mt-auto">
                  <AnimatedButton 
                    variant={pkg.popular ? 'primary' : 'outline'} 
                    size="md"
                    className="w-full"
                    triggerConfetti={pkg.popular}
                    href="https://wa.me/qr/QJE2LOGS7YK3G1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pkg.popular ? 'Get Started' : 'Learn More'}
                  </AnimatedButton>
                </div>
              </Tabs.Root>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center bg-charcoal/40 rounded-xl p-8 border border-white/5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-space font-bold mb-4 text-white">
            Need a Custom Solution?
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            We offer tailored packages for specific business needs.
            Contact us to discuss your project requirements.
          </p>
          <AnimatedButton 
            variant="primary" 
            size="lg"
            href="https://wa.me/qr/QJE2LOGS7YK3G1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}; 