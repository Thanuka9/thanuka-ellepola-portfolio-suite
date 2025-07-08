import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from '@/components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <About />
      </div>
    </div>
  );
};

export default AboutPage;