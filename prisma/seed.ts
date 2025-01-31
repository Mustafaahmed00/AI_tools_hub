// prisma/seed.ts

const toolsData = [
    {
      name: 'Claude',
      description: 'Advanced AI assistant with exceptional capabilities in analysis, writing, and coding',
      category: 'Chat',
      pricing: 'Freemium',
      features: ['Text generation', 'Code generation', 'Document analysis', 'Math and reasoning'],
      useCases: [
        'Software development',
        'Data analysis',
        'Technical writing',
        'Research assistance',
        'Problem solving'
      ],
      strengths: [
        'Exceptional at complex reasoning',
        'Strong coding capabilities',
        'Accurate mathematical computations',
        'Detailed analytical responses',
        'Good at following specific instructions'
      ],
      limitations: [
        'No image generation',
        'No real-time data access',
        'May be slower than some alternatives'
      ],
      website: 'https://anthropic.com/claude',
      apiAvailable: true,
      apiPricing: '$11.02 per million tokens',
      rating: 4.8,
      reviewCount: 1250
    },
    {
      name: 'Perplexity',
      description: 'AI-powered search engine with real-time information and citation capabilities',
      category: 'Research',
      pricing: 'Freemium',
      features: ['Real-time search', 'Citation generation', 'Multi-modal responses', 'Follow-up questions'],
      useCases: [
        'Academic research',
        'Content writing',
        'Fact checking',
        'Current events analysis',
        'Literature review'
      ],
      strengths: [
        'Provides reliable sources',
        'Real-time information access',
        'Academic writing support',
        'Structured citations',
        'Interactive search refinement'
      ],
      limitations: [
        'Limited coding support',
        'May have search limitations',
        'Premium features require subscription'
      ],
      website: 'https://perplexity.ai',
      apiAvailable: true,
      apiPricing: 'Contact for pricing',
      rating: 4.7,
      reviewCount: 890
    },
    {
      name: 'FitAI Coach',
      description: 'AI-powered personal fitness and health coaching assistant',
      category: 'Health',
      pricing: 'Paid',
      features: ['Workout planning', 'Nutrition tracking', 'Progress monitoring', 'Health insights'],
      useCases: [
        'Personal fitness tracking',
        'Meal planning',
        'Workout routines',
        'Health monitoring',
        'Wellness goals'
      ],
      strengths: [
        'Personalized workout plans',
        'Nutrition recommendations',
        'Progress tracking',
        'Integration with health devices',
        'Community support'
      ],
      limitations: [
        'Requires premium for full features',
        'Limited medical advice',
        'Needs regular data input'
      ],
      website: 'https://fitai.coach',
      apiAvailable: false,
      rating: 4.6,
      reviewCount: 567
    }
    // Add more tools...
  ];