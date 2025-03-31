import './styles/globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { AnimationProvider } from './lib/animation-context';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'Busy Oaks - Modern Web Design & Development',
  description: 'High-impact web design & development with advanced animations and interactive elements. Perfect for businesses looking to stand out.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
} 