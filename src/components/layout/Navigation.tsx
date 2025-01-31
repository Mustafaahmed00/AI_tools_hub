// src/components/layout/Navigation.tsx

import React from 'react';
import Link from 'next/link';
import { Home, Search, Sparkles, BookOpen } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">AI Tools Hub</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Home
              </Link>
              <Link 
                href="/tools"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Tools
              </Link>
              <Link 
                href="/guides"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-600"
              >
                Guides
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}