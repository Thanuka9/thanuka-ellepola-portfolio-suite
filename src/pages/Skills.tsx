import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Skills from '@/components/Skills';

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;