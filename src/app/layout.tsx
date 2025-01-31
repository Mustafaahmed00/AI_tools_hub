// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Tools Hub - Find the Perfect AI Tool',
  description: 'Discover and compare AI tools for your needs. From coding to content creation, find the right AI assistant.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow bg-gray-50">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}