
import React from 'react';
import { Input } from '@/components/ui/input';
import { Brain, Workflow, Code } from 'lucide-react';

interface GlossaryHeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const GlossaryHeader: React.FC<GlossaryHeaderProps> = ({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="mb-8 space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          AI & No-Code Terminology Guide
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your comprehensive reference for understanding the language of artificial intelligence, 
          no-code, and low-code development platforms.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 ${
              activeCategory === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-accent'
            }`}
          >
            <span>All</span>
          </button>
          <button
            onClick={() => setActiveCategory('ai')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 ${
              activeCategory === 'ai' 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-accent'
            }`}
          >
            <Brain size={16} />
            <span>AI</span>
          </button>
          <button
            onClick={() => setActiveCategory('no-code')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 ${
              activeCategory === 'no-code' 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-accent'
            }`}
          >
            <Workflow size={16} />
            <span>No-Code</span>
          </button>
          <button
            onClick={() => setActiveCategory('low-code')}
            className={`px-4 py-2 rounded-md flex items-center gap-2 ${
              activeCategory === 'low-code' 
                ? 'bg-primary text-white' 
                : 'bg-muted hover:bg-accent'
            }`}
          >
            <Code size={16} />
            <span>Low-Code</span>
          </button>
        </div>
        
        <div className="relative w-full sm:w-64">
          <Input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GlossaryHeader;
