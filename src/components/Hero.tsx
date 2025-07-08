import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import profileImage from '@/assets/thanuka-profile-new.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Thanuka
                <span className="block bg-gradient-to-r from-accent to-tech-teal bg-clip-text text-transparent">
                  Ellepola
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-6 font-medium">
                Data Scientist & Full Stack Developer
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                Transforming healthcare and business through data and technology. 
                Specialized in predictive modeling, enterprise applications, and innovative solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-6"
              >
                View My Work
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                onClick={() => window.open('https://drive.google.com/file/d/1-qfFUhpeUF8G_uWDhASd9qj3DI0suTyT/view?usp=drive_link', '_blank')}
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-large ring-4 ring-white/20 backdrop-blur-sm">
                <img
                  src={profileImage}
                  alt="Thanuka Ellepola - Data Scientist & Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-tech-teal rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;