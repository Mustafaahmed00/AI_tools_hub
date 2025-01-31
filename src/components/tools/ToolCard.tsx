// src/components/tools/ToolCard.tsx

import React from 'react';
import Link from 'next/link';
import { Star, ArrowUpRight, Code, MessageSquare, Brain, Activity } from 'lucide-react';

interface ToolProps {
  tool: {
    name: string;
    description: string;
    category: string;
    pricing: string;
    features: string[];
    useCases: string[];
    strengths: string[];
    website: string;
    apiAvailable: boolean;
    rating: number;
    documentationUrl?: string;
    tutorialVideo?: string;
    alternativeTo?: string[];
  }
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'chat':
      return <MessageSquare className="w-6 h-6" />;
    case 'research':
      return <Brain className="w-6 h-6" />;
    case 'health':
      return <Activity className="w-6 h-6" />;
    default:
      return <Code className="w-6 h-6" />;
  }
};

export default function ToolCard({ tool }: ToolProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            {getCategoryIcon(tool.category)}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{tool.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>{tool.rating}</span>
              <span>•</span>
              <span>{tool.category}</span>
            </div>
          </div>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {tool.pricing}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{tool.description}</p>

      {/* Use Cases */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Best For</h4>
        <div className="flex flex-wrap gap-2">
          {tool.useCases.slice(0, 3).map(useCase => (
            <span key={useCase} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {useCase}
            </span>
          ))}
        </div>
      </div>

      {/* Key Strengths */}
      <div className="mb-4">
        <h4 className="font-semibold mb-2">Key Strengths</h4>
        <ul className="text-gray-600 text-sm space-y-1">
          {tool.strengths.slice(0, 3).map(strength => (
            <li key={strength} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              {strength}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link 
          href={`/tools/${tool.name.toLowerCase()}`}
          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
        >
          View Details
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <div className="text-sm text-gray-600">
          {tool.apiAvailable ? (
            <span className="text-green-600">API Available</span>
          ) : (
            <span className="text-gray-500">No API</span>
          )}
        </div>
      </div>
    </div>
  );
}