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

export const tools: Tool[] = [
    {
        id: 'blackbox-ai',
        name: 'BlackBox AI',
        description: 'Advanced AI coding assistant that helps developers write, review, and debug code with high accuracy',
        category: 'Code',
        pricing: 'Freemium',
        features: [
            'Code completion',
            'Code explanation',
            'Bug detection',
            'Code conversion between languages',
            'AI code reviews'
        ],
        useCases: [
            'Software development',
            'Code debugging',
            'Code documentation',
            'Learning programming',
            'Code optimization'
        ],
        strengths: [
            'Accurate code suggestions',
            'Multiple programming language support',
            'VS Code integration',
            'GitHub copilot alternative',
            'Fast response time'
        ],
        limitations: [
            'Limited free tier',
            'Requires internet connection',
            'Some advanced features are premium'
        ],
        website: 'https://www.useblackbox.io',
        apiAvailable: true,
        apiPricing: 'Custom pricing available',
        documentationUrl: 'https://www.useblackbox.io/docs',
        rating: 4.7,
        reviewCount: 1250,
        imageUrl: '/images/blackbox.png',
        tutorialVideo: 'dQw4w9WgXcQ',
        alternativeTo: ['GitHub Copilot', 'Amazon CodeWhisperer']
    },
    {
        id: 'sona',
        name: 'Sona',
        description: "OpenAI's latest image and video generation model, offering high-quality creative content generation",
        category: 'Image & Video',
        pricing: 'Paid',
        features: [
            'Image generation',
            'Video creation',
            'Style customization',
            'High resolution output',
            'Animation capabilities'
        ],
        useCases: [
            'Digital art creation',
            'Marketing content',
            'Social media content',
            'Video production',
            'Creative projects'
        ],
        strengths: [
            'High-quality outputs',
            'Advanced style control',
            'Video generation capability',
            'Consistent style across frames',
            'User-friendly interface'
        ],
        limitations: [
            'Paid service only',
            'Processing time for videos',
            'Limited animation duration'
        ],
        website: 'https://openai.com/sona',
        apiAvailable: true,
        apiPricing: 'Pay per generation',
        rating: 4.8,
        reviewCount: 890,
        imageUrl: '/images/sona.png',
        tutorialVideo: 'dQw4w9WgXcQ',
        alternativeTo: ['Midjourney', 'DALL-E 3', 'Stable Diffusion']
    },
    {
        id: 'gemini',
        name: 'Gemini',
        description: "Google's most advanced AI model, offering multimodal capabilities including text, code, image, and audio processing",
        category: 'Multimodal',
        pricing: 'Freemium',
        features: [
            'Text generation',
            'Code assistance',
            'Image understanding',
            'Multimodal processing',
            'Real-time analysis'
        ],
        useCases: [
            'Content creation',
            'Programming assistance',
            'Research and analysis',
            'Education',
            'Creative projects'
        ],
        strengths: [
            'Advanced multimodal capabilities',
            'Strong reasoning abilities',
            'Integration with Google services',
            'Fast processing speed',
            'Accurate responses'
        ],
        limitations: [
            'Some features require subscription',
            'API usage limitations',
            'Region availability'
        ],
        website: 'https://gemini.google.com',
        apiAvailable: true,
        apiPricing: 'Based on usage',
        documentationUrl: 'https://ai.google.dev/docs/gemini',
        rating: 4.9,
        reviewCount: 2100,
        imageUrl: '/images/gemini.png',
        tutorialVideo: 'dQw4w9WgXcQ',
        alternativeTo: ['GPT-4', 'Claude 3']
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'AI-powered image generation tool that creates stunning visuals based on text prompts.',
        category: 'Image & Video',
        pricing: 'Paid',
        features: [
            'AI-generated artwork',
            'Style customization',
            'High-resolution outputs',
            'Fast rendering',
            'Community-driven improvements'
        ],
        useCases: [
            'Concept art',
            'Marketing materials',
            'Illustrations',
            'Social media graphics',
            'Creative experimentation'
        ],
        strengths: [
            'Extremely detailed outputs',
            'Fast iteration',
            'Supports artistic customization',
            'Discord-based community support',
            'Regular updates'
        ],
        limitations: [
            'Requires Discord account',
            'No free tier',
            'Limited commercial use rights'
        ],
        website: 'https://www.midjourney.com',
        apiAvailable: false,
        rating: 4.6,
        reviewCount: 3200,
        imageUrl: '/images/midjourney.png',
        tutorialVideo: 'dQw4w9WgXcQ',
        alternativeTo: ['DALL-E 3', 'Stable Diffusion']
    },
    {
        id: 'mistral-ai',
        name: 'Mistral AI',
        description: 'Open-weight AI model providing powerful text and code generation capabilities.',
        category: 'Text & Code',
        pricing: 'Freemium',
        features: [
            'High-performance text generation',
            'Code assistance',
            'Multilingual support',
            'Open-source API',
            'Low-latency responses'
        ],
        useCases: [
            'Chatbot development',
            'Content creation',
            'Software development',
            'Language translation',
            'Scientific research'
        ],
        strengths: [
            'Strong open-source support',
            'Competitive accuracy',
            'No API lock-in',
            'Fast and lightweight',
            'Suitable for edge deployment'
        ],
        limitations: [
            'Smaller ecosystem than GPT-4',
            'Limited fine-tuning options',
            'Less training data'
        ],
        website: 'https://mistral.ai',
        apiAvailable: true,
        apiPricing: 'Based on usage',
        documentationUrl: 'https://mistral.ai/docs',
        rating: 4.5,
        reviewCount: 700,
        imageUrl: '/images/mistral.png',
        tutorialVideo: 'dQw4w9WgXcQ',
        alternativeTo: ['GPT-4', 'Claude 3']
    },
    {id: 'github-copilot',
        name: 'GitHub Copilot',
        description: 'AI pair programmer that helps you write code faster and with less work',
        category: 'Code',
        pricing: 'Paid',
        features: ['Code completion', 'Code generation', 'Natural language to code', 'Multi-language support'],
        useCases: ['Software development', 'Code assistance', 'Learning programming'],
        strengths: ['GitHub integration', 'IDE support', 'Real-time suggestions'],
        website: 'https://github.com/features/copilot',
        apiAvailable: true,
        rating: 4.8,
        reviewCount: 3500},
        {
          id: 'amazon-codewhisperer',
          name: 'Amazon CodeWhisperer',
          description: 'AI-powered code companion that generates code suggestions based on your comments and existing code',
          category: 'Code',
          pricing: 'Freemium',
          features: ['Code suggestions', 'Security scans', 'AWS integration', 'Multi-language support'],
          useCases: ['AWS development', 'General coding', 'Security-first development'],
          strengths: ['AWS services knowledge', 'Security focus', 'Free tier available'],
          website: 'https://aws.amazon.com/codewhisperer/',
          apiAvailable: true,
          rating: 4.6,
          reviewCount: 2200
        },
        {
          id: 'tabnine',
          name: 'Tabnine',
          description: 'AI code completion assistant that helps developers write code faster with whole-line and full-function code completion',
          category: 'Code',
          pricing: 'Freemium',
          features: ['Code completion', 'Team learning', 'Private code models', 'Multi-language support'],
          useCases: ['Software development', 'Team coding', 'Code automation'],
          strengths: ['Privacy focus', 'Team collaboration', 'Local processing'],
          website: 'https://www.tabnine.com/',
          apiAvailable: true,
          rating: 4.5,
          reviewCount: 1800
        }
];
