import React from 'react';
import { tools } from '@/data/tools';
import ToolDetail from '@/components/tools/ToolDetail';

interface Props {
  params: {
    id: string;
  };
}

export default function ToolPage({ params }: Props) {
  const tool = tools.find(t => t.id === params.id);

  if (!tool) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-gray-600 mb-6">The AI tool you're looking for doesn't exist or has been removed.</p>
          <a 
            href="/tools" 
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Browse All Tools
          </a>
        </div>
      </div>
    );
  }

  return <ToolDetail tool={tool} />;
}