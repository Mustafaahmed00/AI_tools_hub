'use client';

import React from 'react';
import { 
  BarChart,
  Users,
  Wrench,
  MessageSquare,
  Star,
  TrendingUp,
  Code,
  Image as ImageIcon,
  Brain,
  Search
} from 'lucide-react';
import Link from 'next/link';
import { tools } from '@/data/tools';

export default function Dashboard() {
  // Calculate statistics
  const totalTools = tools.length;
  const avgRating = (tools.reduce((acc, tool) => acc + tool.rating, 0) / totalTools).toFixed(1);
  const totalReviews = tools.reduce((acc, tool) => acc + tool.reviewCount, 0);
  
  // Get tools by category
  const categories = [...new Set(tools.map(tool => tool.category))];
  const toolsByCategory = categories.reduce((acc, category) => {
    acc[category] = tools.filter(tool => tool.category === category).length;
    return acc;
  }, {} as Record<string, number>);

  // Get recently added tools (assuming they're ordered by date)
  const recentTools = tools.slice(0, 5);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'code':
        return <Code className="text-blue-600" />;
      case 'image & video':
        return <ImageIcon className="text-purple-600" />;
      case 'research':
        return <Brain className="text-green-600" />;
      default:
        return <Search className="text-gray-600" />;
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Overview of AI tools and usage</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Wrench className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600">Total Tools</p>
              <p className="text-2xl font-semibold">{totalTools}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-600">Average Rating</p>
              <p className="text-2xl font-semibold">{avgRating}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600">Total Reviews</p>
              <p className="text-2xl font-semibold">{totalReviews.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600">Categories</p>
              <p className="text-2xl font-semibold">{categories.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Tools */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
        <h2 className="text-xl font-semibold mb-4">Recently Added Tools</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Tool Name</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Rating</th>
                <th className="text-left py-3 px-4">Pricing</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentTools.map(tool => (
                <tr key={tool.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded">
                        {getCategoryIcon(tool.category)}
                      </div>
                      {tool.name}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tool.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span>{tool.rating}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {tool.pricing}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Link 
                      href={`/tools/${tool.id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Category Distribution */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Tools by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(toolsByCategory).map(([category, count]) => (
            <div key={category} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded">
                  {getCategoryIcon(category)}
                </div>
                <span className="font-medium">{category}</span>
              </div>
              <span className="text-gray-600">{count} tools</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}