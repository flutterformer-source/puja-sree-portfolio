import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Cursor from '@/components/portfolio/Cursor';

export const metadata: Metadata = {
  title: 'Puja Sree | Portfolio',
  description: 'A production-ready portfolio built with Next.js, GSAP, and Framer Motion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="mesh-gradient" />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
