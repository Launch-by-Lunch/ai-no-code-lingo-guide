
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/38d17c59-b7d9-4b4a-af26-62fb2538fb77.png" 
            alt="Launch By Lunch Logo" 
            className="h-32 mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to the Terminology Guide</h1>
        <p className="text-xl text-gray-600 mb-8">Start exploring the world of AI & No-Code terminology!</p>
        <Link 
          to="/glossary" 
          className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-primary/90 transition-colors"
        >
          View Glossary
        </Link>
      </div>
    </div>
  );
};

export default Index;
