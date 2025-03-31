"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn, calculateTiltTransform } from '@/app/lib/utils';
import Image from 'next/image';

interface TiltCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags?: string[];
  className?: string;
  tiltStrength?: number;
  onClick?: () => void;
}

export const TiltCard = ({
  imageUrl,
  title,
  description,
  tags = [],
  className,
  tiltStrength = 10,
  onClick
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState('none');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setTransform(calculateTiltTransform(e, tiltStrength));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('none');
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'card-hover overflow-hidden cursor-pointer max-w-sm w-full',
        className
      )}
      style={{
        transform,
        transition: 'transform 0.1s ease'
      }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-space font-bold mb-2 text-gradient">{title}</h3>
        <p className="text-sm text-white/80 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-deep-navy/80 text-electric-teal rounded-full border border-electric-teal/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {isHovered && (
        <div className="absolute top-3 right-3">
          <div className="w-10 h-10 rounded-full bg-electric-teal/20 flex items-center justify-center border border-electric-teal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );
}; 