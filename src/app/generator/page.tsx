'use client';

import React, { useState } from 'react';
import { Copy, Sparkles } from 'lucide-react';

interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  template: string;
  variables: string[];
  category: string;
  aiTool: string;
}

const promptTemplates: PromptTemplate[] = [
  {
    id: '1',
    title: 'Code Review',
    description: 'Generate a comprehensive code review',
    template: 'Please review this {language} code with a focus on:\n1. Security vulnerabilities\n2. Performance optimizations\n3. Best practices\n4. Code organization\n\nCode:\n{code}\n\nProvide specific recommendations for each issue found.',
    variables: ['language', 'code'],
    category: 'Development',
    aiTool: 'Claude'
  },
  {
    id: '2',
    title: 'Blog Post',
    description: 'Generate an engaging blog post',
    template: 'Write a detailed blog post about {topic}. The post should be {tone} in tone and approximately {length} words. Include:\n1. An engaging introduction\n2. {numPoints} main points\n3. Relevant examples\n4. A strong conclusion\n\nTarget audience: {audience}',
    variables: ['topic', 'tone', 'length', 'numPoints', 'audience'],
    category: 'Writing',
    aiTool: 'ChatGPT'
  },
  // Add more templates...
];

export default function PromptGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const generatePrompt = () => {
    if (!selectedTemplate) return;

    let prompt = selectedTemplate.template;
    Object.entries(variables).forEach(([key, value]) => {
      prompt = prompt.replace(`{${key}}`, value);
    });
    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    // Could add a toast notification here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI Prompt Generator</h1>
        <p className="text-gray-600">Create effective prompts for your favorite AI tools</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Template Selection */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>
          <div className="space-y-4">
            {promptTemplates.map((template) => (
              <button
                key={template.id}
                onClick={() => {
                  setSelectedTemplate(template);
                  setVariables({});
                  setGeneratedPrompt('');
                }}
                className={`w-full p-4 rounded-lg border text-left transition-colors ${
                  selectedTemplate?.id === template.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{template.title}</h3>
                    <p className="text-sm text-gray-500">{template.description}</p>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                    {template.aiTool}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Variable Input and Generated Prompt */}
        <div>
          {selectedTemplate ? (
            <>
              <h2 className="text-xl font-semibold mb-4">Customize Your Prompt</h2>
              <div className="space-y-4 mb-6">
                {selectedTemplate.variables.map((variable) => (
                  <div key={variable}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {variable.charAt(0).toUpperCase() + variable.slice(1)}
                    </label>
                    <input
                      type="text"
                      value={variables[variable] || ''}
                      onChange={(e) => setVariables(prev => ({
                        ...prev,
                        [variable]: e.target.value
                      }))}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Enter ${variable}`}
                    />
                  </div>
                ))}
                <button
                  onClick={generatePrompt}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Sparkles className="w-5 h-5" />
                  Generate Prompt
                </button>
              </div>

              {generatedPrompt && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Generated Prompt</h3>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </button>
                  </div>
                  <pre className="p-4 bg-gray-50 rounded-lg whitespace-pre-wrap text-sm">
                    {generatedPrompt}
                  </pre>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a template to get started
            </div>
          )}
        </div>
      </div>
    </div>
  );
}