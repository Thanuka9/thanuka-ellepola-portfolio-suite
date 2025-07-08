import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Linkedin, MapPin, Download, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thanuka.ellepola@email.com',
      href: 'mailto:thanuka.ellepola@email.com',
      color: 'bg-tech-blue/10 text-tech-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 77 670 5832',
      href: 'tel:+94776705832',
      color: 'bg-tech-teal/10 text-tech-teal'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/thanuka-ellepola',
      href: 'https://linkedin.com/in/thanuka-ellepola',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      href: null,
      color: 'bg-accent/10 text-accent'
    }
  ];

  const services = [
    'Data Science Consulting',
    'Healthcare Analytics Solutions',
    'Full Stack Web Development',
    'Predictive Modeling Projects',
    'Database Design & Optimization',
    'Team Training & Workshops'
  ];

  const availability = [
    'Full-time Opportunities',
    'Consulting Projects',
    'Research Collaborations',
    'Speaking Engagements',
    'Technical Mentoring'
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Ready to discuss your next project, explore collaboration opportunities, 
            or learn more about my experience? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-display text-xl text-neutral-900">
                  Get In Touch
                </CardTitle>
                <p className="text-neutral-600 text-sm">
                  Multiple ways to reach me for different types of opportunities.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={index} className="group">
                      {method.href ? (
                        <a
                          href={method.href}
                          className="flex items-center p-3 rounded-lg hover:bg-neutral-100 transition-colors duration-300"
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold text-neutral-900 text-sm">
                              {method.label}
                            </p>
                            <p className="text-neutral-600 text-sm">
                              {method.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center p-3 rounded-lg">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${method.color}`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold text-neutral-900 text-sm">
                              {method.label}
                            </p>
                            <p className="text-neutral-600 text-sm">
                              {method.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* CV Download */}
            <Card className="border-0 shadow-soft bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <Download className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="font-semibold text-lg mb-2">Download CV</h3>
                <p className="text-sm text-white/90 mb-4">
                  Get a detailed overview of my experience, skills, and achievements.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => window.open('https://drive.google.com/file/d/1-qfFUhpeUF8G_uWDhASd9qj3DI0suTyT/view?usp=drive_link', '_blank')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Services & Availability */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Contact Form */}
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-display text-xl text-neutral-900">
                  Quick Contact
                </CardTitle>
                <p className="text-neutral-600 text-sm">
                  Send me a message and I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Project Discussion / Job Opportunity / Collaboration"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                <Button variant="gradient" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Services */}
              <Card className="border-0 shadow-soft bg-gradient-card">
                <CardHeader>
                  <CardTitle className="font-display text-lg text-neutral-900">
                    Services Offered
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-neutral-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border-0 shadow-soft bg-gradient-card">
                <CardHeader>
                  <CardTitle className="font-display text-lg text-neutral-900">
                    Available For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {availability.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-neutral-700 text-sm">{item}</span>
                        <Badge variant="secondary" className="text-xs">
                          Open
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="border-0 shadow-soft bg-gradient-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-display font-semibold text-2xl text-neutral-900 mb-4">
                Ready to Start a Conversation?
              </h3>
              <p className="text-neutral-600 mb-6">
                Whether you're looking for a data scientist, full-stack developer, or research collaborator, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="gradient" 
                  size="lg"
                  onClick={() => window.open('mailto:thanuka.ellepola@email.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/thanuka-ellepola', '_blank')}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;