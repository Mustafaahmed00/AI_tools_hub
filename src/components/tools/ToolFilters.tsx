// src/components/tools/ToolFilters.tsx

import React from 'react';

interface ToolFiltersProps {
  selectedCategory: string;
  selectedPricing: string;
  onCategoryChange: (category: string) => void;
  onPricingChange: (pricing: string) => void;
}

const categories = ['All', 'Chat', 'Research', 'Health', 'Code', 'Writing', 'Image', 'Video'];
const pricingOptions = ['All', 'Free', 'Freemium', 'Paid', 'Enterprise'];

export default function ToolFilters({ 
  selectedCategory, 
  selectedPricing, 
  onCategoryChange, 
  onPricingChange 
}: ToolFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
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
        onChange={(e) => onPricingChange(e.target.value)}
        className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-white"
      >
        {pricingOptions.map(option => (
          <option key={option} value={option}>
            {option === 'All' ? 'All Pricing' : option}
          </option>
        ))}
      </select>
    </div>
  );
}