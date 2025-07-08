import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Projects from '@/components/Projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 to-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;