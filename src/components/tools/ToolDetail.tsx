'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Star, 
  ExternalLink, 
  Code, 
  MessageSquare, 
  Copy, 
  ThumbsUp,
  CheckCircle,
  XCircle,
  Share2,
  Bookmark,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import type { Tool } from '@/data/tools';

interface ToolDetailProps {
  tool: Tool;
}

interface SamplePrompt {
  title: string;
  content: string;
}

const samplePrompts: SamplePrompt[] = [
  {
    title: 'Detailed Analysis',
    content: 'Please provide a detailed analysis of [topic] covering:\n1. Key concepts\n2. Main advantages\n3. Potential challenges\n4. Real-world applications',
  },
  {
    title: 'Step-by-Step Guide',
    content: 'Create a comprehensive step-by-step guide for [task] including:\n1. Prerequisites\n2. Detailed steps\n3. Common pitfalls\n4. Best practices',
  }
];

export default function ToolDetail({ tool }: ToolDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'prompts' | 'reviews' | 'tutorials'>('overview');
  const [isSaved, setIsSaved] = useState(false);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    // TODO: Add toast notification
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tool Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-6">
              {tool.imageUrl && (
                <img
                  src={tool.imageUrl}
                  alt={tool.name}
                  className="w-20 h-20 rounded-lg shadow-sm object-cover"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">{tool.rating}</span>
                    <span className="ml-1 text-gray-500">({tool.reviewCount} reviews)</span>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {tool.category}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {tool.pricing}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-lg border ${
                  isSaved ? 'bg-blue-50 border-blue-200' : 'border-gray-200 hover:bg-gray-50'
                }`}
                title={isSaved ? 'Remove from saved' : 'Save tool'}
              >
                <Bookmark className={`w-5 h-5 ${isSaved ? 'text-blue-600' : 'text-gray-600'}`} />
              </button>
              <button 
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                title="Share tool"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Try It Now
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-gray-600 text-lg max-w-4xl mb-8">{tool.description}</p>

          {/* Tab Navigation */}
          <div className="flex gap-8 border-b">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'prompts', label: 'Prompts' },
              { id: 'tutorials', label: 'Tutorials' },
              { id: 'reviews', label: 'Reviews' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 px-2 font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <section className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Use Cases */}
              <section className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-4">Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <ThumbsUp className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Strengths & Limitations */}
              <section className="bg-white rounded-lg shadow-sm border p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Strengths</h2>
                    <ul className="space-y-3">
                      {tool.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {tool.limitations && (
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Limitations</h2>
                      <ul className="space-y-3">
                        {tool.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="font-semibold mb-4">Quick Information</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600">API Available:</span>
                    <div className="flex items-center gap-2 mt-1">
                      {tool.apiAvailable ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span>Yes {tool.apiPricing && `(${tool.apiPricing})`}</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5 text-red-600" />
                          <span>No</span>
                        </>
                      )}
                    </div>
                  </div>
                  {tool.documentationUrl && (
                    <div>
                      <span className="text-gray-600">Documentation:</span>
                      <a
                        href={tool.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mt-1 text-blue-600 hover:text-blue-800"
                      >
                        <Code className="w-5 h-5" />
                        View Docs
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Tools */}
              {tool.alternativeTo && (
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="font-semibold mb-4">Alternative Tools</h3>
                  <div className="space-y-3">
                    {tool.alternativeTo.map((altTool, index) => (
                      <Link
                        key={index}
                        href={`/tools/${altTool.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                      >
                        <span>{altTool}</span>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'prompts' && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Example Prompts</h2>
              <Link
                href={`/generator?tool=${tool.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Create Custom Prompt
                <Sparkles className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {samplePrompts.map((prompt, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{prompt.title}</h3>
                    <button
                      onClick={() => handleCopyPrompt(prompt.content)}
                      className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                      title="Copy prompt"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600 mt-3 whitespace-pre-wrap">
                    {prompt.content}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tutorials' && (
          <div>
            {tool.tutorialVideo ? (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Getting Started Tutorial</h2>
                <div className="relative pt-[56.25%] rounded-lg overflow-hidden bg-gray-100">
                  <iframe
                    src={`https://www.youtube.com/embed/${tool.tutorialVideo}`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.documentationUrl && (
                    <a
                      href={tool.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-50"
                    >
                      <Code className="w-5 h-5" />
                      View Documentation
                    </a>
                  )}
                  <Link
                    href={`/guides?tool=${tool.id}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-50"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Community Guides
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No tutorials available yet.</p>
              </div>
            )}
          </div>
        )}
        {activeTab === 'reviews' && (
  <div className="bg-white rounded-lg shadow-sm border p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold">User Reviews</h2>
      <button 
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Write a Review
        <MessageSquare className="w-4 h-4" />
      </button>
    </div>

    {/* Overall Rating Summary */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <div className="flex justify-center items-center mb-4">
          <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          <span className="text-4xl font-bold ml-2">{tool.rating}</span>
        </div>
        <p className="text-gray-600">Average Rating</p>
        <p className="text-sm text-gray-500">Based on {tool.reviewCount} reviews</p>
      </div>

      {/* Rating Distribution */}
      <div className="col-span-2">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-3">
              <span className="w-12 text-right">{stars} Stars</span>
              <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-yellow-400 h-2.5 rounded-full" 
                  style={{
                    width: `${
                      stars === 5 ? '60%' : 
                      stars === 4 ? '25%' : 
                      stars === 3 ? '10%' : 
                      stars === 2 ? '3%' : '2%'
                    }`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Review Filters */}
    <div className="flex items-center gap-4 mb-6">
      <span className="text-gray-600">Filter by:</span>
      <select className="border rounded-lg px-3 py-2">
        <option>All Ratings</option>
        <option>5 Stars</option>
        <option>4 Stars</option>
        <option>3 Stars</option>
        <option>2 Stars</option>
        <option>1 Star</option>
      </select>
      <select className="border rounded-lg px-3 py-2">
        <option>Most Recent</option>
        <option>Highest Rated</option>
        <option>Lowest Rated</option>
      </select>
    </div>

    {/* Sample Reviews */}
    <div className="space-y-6">
      {[
        {
          name: 'Alex Thompson',
          rating: 5,
          date: 'January 15, 2024',
          text: 'An incredible tool that has significantly improved my workflow. The AI suggestions are spot on and have saved me countless hours of coding.',
          verified: true
        },
        {
          name: 'Sarah Lee',
          rating: 4,
          date: 'December 22, 2023',
          text: 'Great tool with powerful features. The integration is seamless, though there\'s room for improvement in handling more complex coding scenarios.',
          verified: true
        },
        {
          name: 'Michael Rodriguez',
          rating: 3,
          date: 'November 5, 2023',
          text: 'Decent tool with potential. The free tier is limited, and I found myself needing to upgrade to get the full benefits.',
          verified: false
        }
      ].map((review, index) => (
        <div key={index} className="border-b pb-6">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gray-300" />
                ))}
              </div>
              {review.verified && (
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  Verified
                </span>
              )}
            </div>
            <span className="text-gray-500 text-sm">{review.date}</span>
          </div>
          <p className="text-gray-700 mb-3">{review.text}</p>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span>{review.name}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination */}
    <div className="flex justify-center items-center gap-4 mt-6">
      <button 
        className="px-4 py-2 border rounded-lg hover:bg-gray-50"
        disabled={true}
      >
        Previous
      </button>
      <span className="text-gray-600">Page 1 of 5</span>
      <button 
        className="px-4 py-2 border rounded-lg hover:bg-gray-50"
        disabled={true}
      >
        Next
        </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
