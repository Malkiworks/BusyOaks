import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type MousePosition = {
  x: number;
  y: number;
};

export const handleMagneticEffect = (
  e: React.MouseEvent<HTMLElement>,
  ref: React.RefObject<HTMLElement>,
  strength: number = 40
) => {
  if (!ref.current) return;

  const { clientX, clientY } = e;
  const { left, top, width, height } = ref.current.getBoundingClientRect();

  const x = clientX - (left + width / 2);
  const y = clientY - (top + height / 2);

  ref.current.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
};

export const handleMagneticReset = (ref: React.RefObject<HTMLElement>) => {
  if (!ref.current) return;
  ref.current.style.transform = 'translate(0px, 0px)';
};

export const handleCursorFollow = (
  e: MouseEvent,
  cursorRef: React.RefObject<HTMLDivElement>
) => {
  if (!cursorRef.current) return;
  
  cursorRef.current.style.left = `${e.clientX}px`;
  cursorRef.current.style.top = `${e.clientY}px`;
};

export const triggerConfetti = () => {
  if (typeof window !== 'undefined') {
    // Dynamic import for the canvas-confetti library
    import('canvas-confetti').then((confetti) => {
      confetti.default({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0ff', '#50fa7b', '#ff79c6', '#bd93f9'],
      });
    });
  }
};

export const getRandomDelay = (min: number = 0, max: number = 1): number => {
  return Math.random() * (max - min) + min;
};

export const getRandomPosition = (): MousePosition => {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100
  };
};

export const calculateTiltTransform = (
  e: React.MouseEvent<HTMLElement>,
  tiltStrength: number = 10
): string => {
  if (typeof window === 'undefined') return 'none';
  
  const { clientX, clientY } = e;
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
  
  const x = (clientX - left) / width;
  const y = (clientY - top) / height;
  
  const tiltX = (y - 0.5) * tiltStrength;
  const tiltY = (0.5 - x) * tiltStrength;
  
  return `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
}; 