// src/app/page.tsx

import Link from 'next/link';
import { Search, Sparkles, Code, Image, MessageSquare, Zap, BookOpen, Star } from 'lucide-react';

const categories = [
  {
    name: 'Coding',
    description: 'AI coding assistants and code generators',
    icon: <Code className="w-6 h-6 text-blue-600" />,
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Writing',
    description: 'Content creation and writing tools',
    icon: <MessageSquare className="w-6 h-6 text-green-600" />,
    bgColor: 'bg-green-100'
  },
  {
    name: 'Image',
    description: 'AI image generation and editing',
    icon: <Image className="w-6 h-6 text-purple-600" />,
    bgColor: 'bg-purple-100'
  },
  {
    name: 'Research',
    description: 'Research and analysis tools',
    icon: <BookOpen className="w-6 h-6 text-orange-600" />,
    bgColor: 'bg-orange-100'
  }
];

const features = [
  {
    title: 'Comprehensive Directory',
    description: 'Find and compare the best AI tools for your specific needs',
    icon: <Search className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Expert Insights',
    description: 'Get detailed reviews and usage tips from AI experts',
    icon: <Star className="w-6 h-6 text-yellow-600" />
  },
  {
    title: 'Quick Integration',
    description: 'Easy-to-follow tutorials and integration guides',
    icon: <Zap className="w-6 h-6 text-purple-600" />
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Find the Perfect</span>
              <span className="block text-blue-600">AI Tool for Your Needs</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover, compare, and learn about the best AI tools for your tasks. From coding to content creation, we help you find the right AI assistant.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-4">
              <Link
                href="/tools"
                className="rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Explore Tools
              </Link>
              <Link
                href="/guides"
                className="rounded-md bg-white px-8 py-3 text-base font-medium text-blue-600 border-2 border-blue-600 hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                View Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/tools?category=${category.name.toLowerCase()}`}
                className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use AI Tools Hub?</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="relative p-6 bg-white rounded-lg border hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-50 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to find your perfect AI tool?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Browse our comprehensive directory of AI tools and find the perfect match for your needs.
          </p>
          <Link
            href="/tools"
            className="inline-block bg-white px-8 py-3 text-blue-600 font-medium rounded-md hover:bg-blue-50"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}