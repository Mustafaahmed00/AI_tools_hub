'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { tools } from '@/data/tools';
import ToolCard from '@/components/tools/ToolCard';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');

  const categories = ['All', 'Code', 'Chat', 'Research', 'Image & Video', 'Multimodal'];
  const pricingOptions = ['All', 'Free', 'Freemium', 'Paid', 'Enterprise'];

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = searchQuery === '' || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.useCases.some(useCase => useCase.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
      const matchesPricing = selectedPricing === 'All' || tool.pricing === selectedPricing;

      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchQuery, selectedCategory, selectedPricing]);

  // Add these code-specific tools when not already in the tools data
  const codeTools = [
    {
      id: 'microsoft-copilot',
      name: 'Microsoft Copilot',
      description: 'AI-powered code completion and generation tool integrated with Visual Studio and VS Code',
      category: 'Code',
      pricing: 'Paid',
      features: ['Code completion', 'Code generation', 'Natural language to code', 'Bug detection'],
      useCases: ['Software development', 'Code assistance', 'Pair programming'],
      strengths: ['Visual Studio integration', 'GitHub integration', 'Multiple language support'],
      website: 'https://github.com/features/copilot',
      apiAvailable: true,
      rating: 4.8,
      reviewCount: 2500
    },
    // Add more code tools if needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI Tools Directory</h1>
        <p className="text-gray-600">Find the perfect AI tool for your needs</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-6">
        {/* Search */}
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by task, use case, or tool name..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pricing Filter */}
        <select
          value={selectedPricing}
          onChange={(e) => setSelectedPricing(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {pricingOptions.map((option) => (
            <option key={option} value={option}>
              {option === 'All' ? 'All Pricing' : option}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-gray-600">
        Found {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">No tools found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedPricing('All');
            }}
            className="text-blue-600 hover:text-blue-800"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}