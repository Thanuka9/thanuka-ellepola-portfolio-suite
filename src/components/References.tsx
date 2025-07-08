import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Star, Briefcase, GraduationCap } from 'lucide-react';

const References = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Senior Healthcare Analytics Director',
      company: 'Metro Health Systems',
      relationship: 'Project Supervisor',
      text: 'Thanuka demonstrated exceptional analytical skills and technical expertise during our healthcare revenue cycle optimization project. His ability to translate complex data insights into actionable business strategies was remarkable. The predictive models he developed improved our collection efficiency by 35%.',
      rating: 5,
      icon: Briefcase,
      color: 'bg-tech-blue/10 text-tech-blue'
    },
    {
      name: 'Prof. Michael Chen',
      title: 'Professor of Business Analytics',
      company: 'University of Colombo',
      relationship: 'Academic Supervisor',
      text: 'As Thanuka\'s thesis supervisor, I have been consistently impressed by his research methodology and technical implementation skills. His work on predictive analytics in healthcare represents a significant contribution to the field. His ability to combine academic rigor with practical application is outstanding.',
      rating: 5,
      icon: GraduationCap,
      color: 'bg-tech-teal/10 text-tech-teal'
    }
  ];

  const recommendations = [
    {
      category: 'Technical Excellence',
      points: [
        'Advanced proficiency in Python and machine learning frameworks',
        'Exceptional database design and optimization skills',
        'Strong full-stack development capabilities',
        'Innovative approach to problem-solving'
      ]
    },
    {
      category: 'Leadership & Communication',
      points: [
        'Effective team leadership and project management',
        'Clear communication of technical concepts to stakeholders',
        'Mentoring and training team members',
        'Strategic thinking and business acumen'
      ]
    },
    {
      category: 'Professional Impact',
      points: [
        'Delivered measurable improvements in system efficiency',
        'Led successful digital transformation initiatives',
        'Contributed to academic research and publications',
        'Built scalable solutions for enterprise environments'
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
            References & Testimonials
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Feedback from colleagues, supervisors, and collaborators who have worked 
            closely with me on various projects and initiatives.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <Card key={index} className="border-0 shadow-large bg-gradient-card hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-16 w-16 text-primary" />
                </div>
                
                <CardContent className="p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${testimonial.color} mr-4`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-neutral-600 text-sm">
                          {testimonial.title}
                        </p>
                        <p className="text-neutral-500 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.relationship}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <blockquote className="text-neutral-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Professional Recommendations */}
        <div>
          <h3 className="font-display font-semibold text-2xl text-neutral-900 mb-8 text-center">
            Professional Recommendations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((category, index) => (
              <Card key={index} className="border-0 shadow-soft bg-gradient-card hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-display font-semibold text-lg text-neutral-900 mb-4">
                    {category.category}
                  </h4>
                  <ul className="space-y-3">
                    {category.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-neutral-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reference Contact Note */}
        <div className="mt-16">
          <Card className="border-0 shadow-soft bg-neutral-100 max-w-2xl mx-auto">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">
                Additional References Available
              </h3>
              <p className="text-neutral-600 text-sm">
                Professional references and recommendation letters are available upon request. 
                Please contact me directly for detailed reference information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default References;