
import React, { useState, useEffect } from 'react';
import { glossaryTerms } from '@/data/glossaryTerms';
import GlossaryCard from '@/components/GlossaryCard';
import GlossaryHeader from '@/components/GlossaryHeader';
import { Link } from 'react-router-dom';

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);

  useEffect(() => {
    let filtered = glossaryTerms;
    
    // Apply category filter if not 'all'
    if (activeCategory !== 'all') {
      filtered = filtered.filter(term => term.category === activeCategory);
    }
    
    // Apply search filter if search term exists
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(term => 
        term.term.toLowerCase().includes(searchLower) || 
        term.definition.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredTerms(filtered);
  }, [searchTerm, activeCategory]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 flex justify-center">
        <Link to="/">
          <img 
            src="/lovable-uploads/38d17c59-b7d9-4b4a-af26-62fb2538fb77.png" 
            alt="Launch By Lunch Logo" 
            className="h-28"
          />
        </Link>
      </div>
      
      <GlossaryHeader 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      {filteredTerms.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">
            No terms found matching your search. Try a different keyword or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map(term => (
            <GlossaryCard key={term.id} term={term} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GlossaryPage;
