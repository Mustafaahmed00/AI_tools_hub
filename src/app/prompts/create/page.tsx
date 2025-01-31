// src/app/prompts/create/page.tsx

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AddPrompt() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tool: '',
    category: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the submission to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/prompts" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6">
        <ArrowLeft className="w-5 h-5" />
        Back to Prompts
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Add New Prompt</h1>
        <p className="text-gray-600">Share your effective prompts with the community</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prompt Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Detailed Code Review Prompt"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            AI Tool
          </label>
          <select
            name="tool"
            value={formData.tool}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select AI Tool</option>
            <option value="ChatGPT">ChatGPT</option>
            <option value="Claude">Claude</option>
            <option value="Perplexity">Perplexity</option>
            <option value="Bard">Bard</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Category</option>
            <option value="Development">Development</option>
            <option value="Writing">Writing</option>
            <option value="Research">Research</option>
            <option value="Analysis">Analysis</option>
            <option value="Creative">Creative</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prompt Content
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Enter your prompt here..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[200px]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description & Tips (optional)
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Add any additional context, tips, or best practices for using this prompt..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
          />
        </div>

        <div className="flex justify-end gap-4">
          <Link
            href="/prompts"
            className="px-6 py-2 border rounded-lg text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit Prompt
          </button>
        </div>
      </form>
    </div>
  );
}