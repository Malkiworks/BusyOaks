"use client";

import React, { createContext, useContext, useRef, useEffect, useState, ReactNode } from 'react';
import { handleCursorFollow, triggerConfetti } from './utils';

interface AnimationContextType {
  customCursorRef: React.RefObject<HTMLDivElement>;
  isCustomCursorEnabled: boolean;
  enableCustomCursor: () => void;
  disableCustomCursor: () => void;
  triggerConfettiEffect: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const customCursorRef = useRef<HTMLDivElement>(null);
  const [isCustomCursorEnabled, setIsCustomCursorEnabled] = useState(false);
  
  const enableCustomCursor = () => {} // No-op function - disabled custom cursor
  const disableCustomCursor = () => setIsCustomCursorEnabled(false);
  
  const triggerConfettiEffect = () => {
    triggerConfetti();
  };
  
  useEffect(() => {
    if (isCustomCursorEnabled) {
      const handleMouseMove = (e: MouseEvent) => {
        handleCursorFollow(e, customCursorRef);
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isCustomCursorEnabled]);

  return (
    <AnimationContext.Provider 
      value={{
        customCursorRef,
        isCustomCursorEnabled,
        enableCustomCursor,
        disableCustomCursor,
        triggerConfettiEffect
      }}
    >
      {children}
      {isCustomCursorEnabled && (
        <div
          ref={customCursorRef}
          className="custom-cursor hidden md:block"
          style={{ left: '-100px', top: '-100px' }}
        />
      )}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}; 