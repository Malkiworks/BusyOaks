import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Portfolio } from './components/sections/Portfolio';
import { Packages } from './components/sections/Packages';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-deep-navy min-h-screen">
      <Navbar />
      <Hero />
      <Portfolio />
      <Packages />
      <Contact />
      <Footer />
    </main>
  );
} 