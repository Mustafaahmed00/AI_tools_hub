// src/components/layout/Sidebar.tsx

import React from 'react';
import Link from 'next/link';
import { 
  Home, 
  Search, 
  Sparkles, 
  BookOpen, 
  Code, 
  Image as ImageIcon, 
  MessageSquare,
  Settings,
  Star,
  Zap
} from 'lucide-react';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Explore Tools', icon: Search, path: '/tools' },
  { name: 'Prompt Generator', icon: Sparkles, path: '/generator' },
  { name: 'Guides', icon: BookOpen, path: '/guides' },
];

const categories = [
  { name: 'Coding', icon: Code, path: '/tools?category=coding' },
  { name: 'Writing', icon: MessageSquare, path: '/tools?category=writing' },
  { name: 'Image', icon: ImageIcon, path: '/tools?category=image' },
  { name: 'Research', icon: Star, path: '/tools?category=research' },
  { name: 'Audio', icon: Zap, path: '/tools?category=audio' },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <div className="w-64 bg-white border-r h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <Link href="/" className="flex items-center space-x-2 mb-8">
          <Sparkles className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">AI Tools Hub</span>
        </Link>

        {/* Main Menu */}
        <div className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="px-3 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Categories
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  pathname.includes(category.path)
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="pt-4 border-t">
          <Link
            href="/settings"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}