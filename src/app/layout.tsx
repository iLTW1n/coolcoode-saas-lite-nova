import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Layout } from '@/layout/Layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Nova | CoolCoode — Minimal landing page ready to use',
  description:
    'Nova is a modern, minimal landing page built by CoolCoode. Perfect for showcasing SaaS products, startups, or digital services with a clean and adaptable design.',
  keywords: [
    'CoolCoode',
    'Nova landing',
    'minimal landing page',
    'SaaS template',
    'startup landing',
    'modern landing',
    'Next.js',
    'TailwindCSS',
  ],
  openGraph: {
    title: 'Nova — Minimal landing page by CoolCoode',
    description:
      'A modern and elegant landing page for your digital product. Customize it in minutes and make your online presence stand out.',
    url: 'https://coolcoode.com/nova',
    siteName: 'CoolCoode',
    images: [
      {
        url: 'https://coolcoode.com/og-nova.png',
        width: 1200,
        height: 630,
        alt: 'Nova — Minimal landing page by CoolCoode',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova | CoolCoode',
    description: 'A minimal and modern landing page ready to customize and deploy in minutes.',
    images: ['https://coolcoode.com/og-nova.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
