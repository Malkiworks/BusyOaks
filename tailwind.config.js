/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0a1929',
        'charcoal': '#1a202c',
        'electric-teal': '#0ff',
        'lime-green': '#50fa7b',
        'neon-pink': '#ff79c6',
        'neon-purple': '#bd93f9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'text-gradient': 'text-gradient 4s ease infinite',
        'typing': 'typing 2s steps(20) infinite alternate, blink .7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'morph-slow': 'morph 8s ease-in-out infinite alternate',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'glitch': 'glitch 1s linear infinite',
        'slide': 'slide 25s linear infinite',
      },
      keyframes: {
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink': {
          '50%': { borderColor: 'transparent' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        },
        'morph': {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '100%': { borderRadius: '40% 60% 70% 30%/30% 60% 40% 70%' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        'slide': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-glow': 'linear-gradient(to right, #0ff, #50fa7b)',
        'hero-pattern': 'linear-gradient(to bottom, rgba(10, 25, 41, 0.8), rgba(26, 32, 44, 0.9))',
      },
    },
  },
  plugins: [],
} 