"use client";

import React, { useRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { handleMagneticEffect, handleMagneticReset, cn } from '@/app/lib/utils';
import { useAnimation } from '@/app/lib/animation-context';
import Link from 'next/link';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

interface AnimatedButtonProps extends Omit<ButtonProps, 'href'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  magnetic?: boolean;
  triggerConfetti?: boolean;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const AnimatedButton = ({
  variant = 'primary',
  size = 'md',
  magnetic = true,
  triggerConfetti = false,
  className,
  children,
  href,
  target,
  rel,
  ...props
}: AnimatedButtonProps) => {
  const elementRef = useRef<HTMLElement>(null);
  const { triggerConfettiEffect } = useAnimation();
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'bg-charcoal text-white border-2 border-neon-purple hover:border-electric-teal',
    outline: 'bg-transparent border-2 border-white/30 hover:border-electric-teal text-white',
  };
  
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (triggerConfetti) {
      triggerConfettiEffect();
    }
    if ('onClick' in props) {
      (props as ButtonProps).onClick?.(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  const commonProps = {
    className: cn(
      'font-medium rounded-lg relative transition-all duration-300',
      magnetic && 'magnetic-button',
      variantClasses[variant],
      sizeClasses[size],
      className
    ),
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    onMouseMove: magnetic ? (e: React.MouseEvent<HTMLElement>) => handleMagneticEffect(e, elementRef) : undefined,
    onMouseLeave: magnetic ? () => handleMagneticReset(elementRef) : undefined,
    onClick: handleClick,
  };

  // Render as anchor if href is provided
  if (href) {
    return (
      <motion.a
        ref={elementRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        {...commonProps}
        {...props as any}
      >
        {children}
      </motion.a>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      ref={elementRef as React.RefObject<HTMLButtonElement>}
      {...commonProps}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}; 