import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Cursor from '@/components/portfolio/Cursor';
import ParticleNetwork from '@/components/portfolio/ParticleNetwork';

import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://pujasree.com'), // Replace with actual domain
  title: {
    default: 'Dr. Puja Sree | Physiotherapy & Occupational Therapy Specialist',
    template: '%s | Dr. Puja Sree'
  },
  description: 'Specialized Physiotherapist & Occupational Therapist with 2+ years of clinical experience. Expert in Neuro-Rehab, Orthopedic Rehab, and Cardio-Pulmonary Therapy.',
  keywords: ['Physiotherapist', 'Occupational Therapist', 'Dr. Puja Sree', 'Neuro Rehabilitation', 'Orthopedic Rehab', 'Stroke Recovery', 'Andhra Pradesh', 'India'],
  authors: [{ name: 'Dr. Puja Sree' }],
  creator: 'Dr. Puja Sree',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pujasree.com',
    title: 'Dr. Puja Sree | Physiotherapy & Occupational Therapy Specialist',
    description: 'Restoring movement and enhancing lives through specialized clinical expertise and compassionate care.',
    siteName: 'Dr. Puja Sree Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Placeholder for OG image
        width: 1200,
        height: 630,
        alt: 'Dr. Puja Sree Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Puja Sree | Physiotherapy & Occupational Therapy Specialist',
    description: 'Expert Physiotherapy and Occupational Therapy for Neuro, Ortho, and Cardio-Pulmonary recovery.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  'name': 'Dr. Puja Sree',
  'description': 'Physiotherapist and Occupational Therapist specializing in neurological and orthopedic rehabilitation.',
  'image': 'https://pujasree.com/dr-puja-sri.jpg',
  'medicalSpecialty': [
    'Physiotherapy',
    'Occupational Therapy',
    'Neurological Rehabilitation',
    'Orthopedic Rehabilitation'
  ],
  'address': {
    '@type': 'PostalAddress',
    'addressRegion': 'Andhra Pradesh',
    'addressCountry': 'IN'
  },
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://pujasree.com'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="mesh-gradient" />
        <ParticleNetwork />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
