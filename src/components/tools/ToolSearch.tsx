// src/components/tools/ToolSearch.tsx

import React from 'react';
import { Search } from 'lucide-react';

interface ToolSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ToolSearch({ searchQuery, onSearchChange }: ToolSearchProps) {
  const searchSuggestions = [
    { text: 'writing', description: 'Find tools for content creation and writing assistance' },
    { text: 'coding', description: 'Discover AI coding assistants and code generators' },
    { text: 'research', description: 'Tools for academic research and analysis' },
    { text: 'image', description: 'AI image generation and editing tools' },
  ];

  return (
    <div className="relative max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search AI tools by task or use case..."
          className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Search suggestions - show only when input is empty */}
      {!searchQuery && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 divide-y">
          {searchSuggestions.map((suggestion) => (
            <button
              key={suggestion.text}
              onClick={() => onSearchChange(suggestion.text)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 flex flex-col gap-1"
            >
              <span className="font-medium text-gray-800">
                Search "{suggestion.text}"
              </span>
              <span className="text-sm text-gray-500">
                {suggestion.description}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Quick filters */}
      <div className="flex gap-2 mt-2">
        {['Writing', 'Code', 'Research', 'Images'].map((filter) => (
          <button
            key={filter}
            onClick={() => onSearchChange(filter.toLowerCase())}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Example search hints */}
      <div className="mt-2 text-sm text-gray-500">
        Try searching for tasks like "writing blog posts" or "generating images"
      </div>
    </div>
  );
}