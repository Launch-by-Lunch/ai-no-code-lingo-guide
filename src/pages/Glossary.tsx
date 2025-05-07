
import React, { useState, useMemo } from 'react';
import GlossaryHeader from '@/components/GlossaryHeader';
import GlossaryCard from '@/components/GlossaryCard';
import { glossaryTerms } from '@/data/glossaryTerms';

const GlossaryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      // Filter by category
      const categoryMatch = 
        activeCategory === 'all' || 
        term.category === activeCategory;
      
      // Filter by search term
      const searchMatch = 
        !searchTerm ||
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
        term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      
      return categoryMatch && searchMatch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="container py-8 px-4 md:py-12 md:px-6 max-w-7xl mx-auto">
      <GlossaryHeader 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {filteredTerms.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No matching terms found. Try adjusting your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map(term => (
            <GlossaryCard key={term.id} term={term} />
          ))}
        </div>
      )}

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>This glossary is continuously updated with new industry terms.</p>
      </footer>
    </div>
  );
};

export default GlossaryPage;
