
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

interface GlossaryCardProps {
  term: GlossaryTerm;
}

const GlossaryCard: React.FC<GlossaryCardProps> = ({ term }) => {
  const [expanded, setExpanded] = useState(false);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'ai':
        return 'bg-blue-100 text-blue-800';
      case 'no-code':
        return 'bg-purple-100 text-purple-800';
      case 'low-code':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'ai':
        return 'AI';
      case 'no-code':
        return 'No-Code';
      case 'low-code':
        return 'Low-Code';
      default:
        return category;
    }
  };

  return (
    <Card 
      className={cn(
        "glossary-card cursor-pointer transition-all",
        expanded ? "border-primary" : "hover:border-primary/30"
      )}
      onClick={() => setExpanded(!expanded)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{term.term}</CardTitle>
          <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryBadgeClass(term.category)}`}>
            {getCategoryLabel(term.category)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className={cn(
          "text-sm text-muted-foreground",
          expanded ? "" : "line-clamp-2"
        )}>
          {term.definition}
        </CardDescription>
        
        {expanded && term.relatedTerms && term.relatedTerms.length > 0 && (
          <div className="mt-4 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Related terms:</p>
            <div className="flex flex-wrap gap-2">
              {term.relatedTerms.map((relatedTerm) => (
                <span 
                  key={relatedTerm} 
                  className="text-xs bg-muted px-2 py-1 rounded-md"
                >
                  {relatedTerm}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GlossaryCard;
