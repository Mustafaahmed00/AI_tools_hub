// types/tool.ts

export type ToolCategory = 
  | 'Text Generation'
  | 'Image Generation'
  | 'Code Assistant'
  | 'Chat'
  | 'Voice'
  | 'Video'
  | 'Other';

export type PricingModel = 
  | 'Free'
  | 'Freemium'
  | 'Paid'
  | 'Enterprise';

// src/types/tool.ts

export interface Tool {
    id: string;
    name: string;
    description: string;
    category: string;
    pricing: 'Free' | 'Freemium' | 'Paid' | 'Enterprise';
    features: string[];
    useCases: string[];
    strengths: string[];
    limitations?: string[];
    website: string;
    apiAvailable: boolean;
    apiPricing?: string;
    documentationUrl?: string;
    tutorialVideo?: string;
    imageUrl?: string;
    rating: number;
    reviewCount: number;
    alternativeTo?: string[];
  }
  
  export type Category = 'All' | 'Chat' | 'Code' | 'Image' | 'Video' | 'Audio' | 'Research' | 'Writing' | 'Translation';