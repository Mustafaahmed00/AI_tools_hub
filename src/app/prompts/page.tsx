// src/app/prompts/page.tsx
'use client'
import React, { useState } from 'react';
import { Search, ThumbsUp, MessageSquare, Plus, Copy, Star } from 'lucide-react';

const categories = ['All', 'Development', 'Writing', 'Research', 'Analysis', 'Creative', 'Business'];
const tools = ['All', 'ChatGPT', 'Claude', 'Perplexity', 'Bard', 'Midjourney'];

interface Prompt {
  id: string;
  title: string;
  content: string;
  tool: string;
  category: string;
  votes: number;
  comments: number;
  author: string;
  createdAt: string;
  effectiveness: number;
}

const samplePrompts: Prompt[] = [
  {
    id: '1',
    title: 'Detailed Code Review',
    content: 'Please review this code with a focus on:\n1) Security vulnerabilities\n2) Performance optimizations\n3) Best practices\n4) Code organization.\nFor each issue found, explain why it\'s a problem and suggest a specific solution.',
    tool: 'Claude',
    category: 'Development',
    votes: 128,
    comments: 12,
    author: 'DevMaster',
    createdAt: '2024-01-15',
    effectiveness: 4.8
  },
  {
    id: '2',
    title: 'Research Paper Summary',
    content: 'Please analyze this research paper and provide:\n1) Main findings and conclusions\n2) Methodology overview\n3) Key limitations\n4) Potential applications.\nInclude relevant citations and explain complex terms.',
    tool: 'Perplexity',
    category: 'Research',
    votes: 95,
    comments: 8,
    author: 'ResearchPro',
    createdAt: '2024-01-20',
    effectiveness: 4.6
  }
];

export default function PromptsBrowser() {
  const [selectedTool, setSelectedTool] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('votes');

  const filteredPrompts = samplePrompts
    .filter(prompt => {
      const matchesTool = selectedTool === 'All' || prompt.tool === selectedTool;
      const matchesCategory = selectedCategory === 'All' || prompt.category === selectedCategory;
      const matchesSearch = prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           prompt.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTool && matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'votes') return b.votes - a.votes;
      if (sortBy === 'effectiveness') return b.effectiveness - a.effectiveness;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    // Could add a toast notification here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Browse Prompts</h1>
          <p className="text-gray-600">Find and share effective prompts for AI tools</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-5 h-5" />
          Add Prompt
        </button>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search prompts..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <select
            className="px-4 py-2 border rounded-lg bg-white"
            value={selectedTool}
            onChange={(e) => setSelectedTool(e.target.value)}
          >
            {tools.map(tool => (
              <option key={tool} value={tool}>{tool}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border rounded-lg bg-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            className="px-4 py-2 border rounded-lg bg-white"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="votes">Most Voted</option>
            <option value="effectiveness">Most Effective</option>
            <option value="recent">Most Recent</option>
          </select>
        </div>
      </div>

      {/* Prompts Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredPrompts.map(prompt => (
          <div key={prompt.id} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{prompt.title}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {prompt.tool}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full">
                    {prompt.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{prompt.effectiveness}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(prompt.content)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>

            <pre className="bg-gray-50 p-4 rounded-lg text-gray-700 text-sm mb-4 whitespace-pre-wrap">
              {prompt.content}
            </pre>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                  <ThumbsUp className="w-4 h-4" />
                  {prompt.votes}
                </button>
                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                  <MessageSquare className="w-4 h-4" />
                  {prompt.comments}
                </button>
              </div>
              <div className="text-gray-600">
                By {prompt.author} • {new Date(prompt.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}