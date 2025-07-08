import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import References from '@/components/References';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      <Navigation />
      <Hero />
      <References />
      <Footer />
    </div>
  );
};

export default Index;