# Busy Oaks Portfolio Website

A modern, sleek, and ultra-professional website for Busy Oaks showcasing web design services, portfolio, and packages. Features high-impact animations, scroll effects, and interactive elements to emphasize creativity and technical prowess.

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type-safe code
- **TailwindCSS**: For utility-first styling
- **Framer Motion**: For advanced animations
- **GSAP**: For complex animation sequences
- **Three.js**: For 3D elements and effects
- **Radix UI**: For accessible UI components

## Features

- **Dark Mode Design**: Deep navy and charcoal base with neon accents
- **Interactive Animations**: 
  - Custom cursor
  - Magnetic buttons
  - Parallax effects
  - Hover 3D tilt effects
  - Text animations
- **Responsive Layout**: Fully responsive for all device sizes
- **Performance Optimized**: Lazy loading and optimized animations
- **Interactive Portfolio**: 3D hover effects and modal project details
- **Animated Pricing Cards**: With hover effects and tab interfaces

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd busy-oaks-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Next.js app directory
  - `components/`: React components
    - `ui/`: Reusable UI components
    - `sections/`: Page sections (Hero, Portfolio, etc.)
  - `lib/`: Utility functions and contexts
  - `styles/`: Global styles and CSS files
  - `page.tsx`: Main page component
  - `layout.tsx`: Root layout component

## Deployment

### Vercel Deployment
This project can be deployed to Vercel with minimal configuration:

```bash
npm run build
# or
yarn build
```

### Render Deployment
To deploy as a static site on Render:

1. Push your code to GitHub
2. Log in to Render and create a new Static Site
3. Connect your GitHub repository
4. Configure the build settings:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `out`
5. Click "Create Static Site"

## License

MIT 