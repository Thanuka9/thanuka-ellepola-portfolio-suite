import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, FileText, Users, Brain, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Collective RCM Website',
      description: 'A comprehensive full-stack application for healthcare revenue cycle management featuring advanced database integrations, user management, and real-time analytics dashboard.',
      icon: Users,
      type: 'Featured Project',
      technologies: ['Flask', 'Python', 'CSS', 'Java', 'HTML', 'CosmosDB', 'SQLAlchemy'],
      highlights: [
        'Healthcare revenue cycle automation',
        'Advanced database integrations',
        'Real-time analytics dashboard',
        'Multi-user role management',
        'Payment processing workflows'
      ],
      status: 'Production',
      year: '2024',
      category: 'Full Stack Development'
    },
    {
      title: 'Predictive Analytics for Payment Prediction in RCM',
      description: 'Master\'s thesis research project developing machine learning models to predict payment outcomes in healthcare revenue cycle management, improving collection efficiency.',
      icon: Brain,
      type: 'Research Project',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Power BI', 'Statistical Analysis'],
      highlights: [
        'Predictive modeling for payment outcomes',
        'Healthcare data analysis',
        'Machine learning algorithms optimization',
        'Business impact assessment',
        'Research methodology design'
      ],
      status: 'Thesis Defense',
      year: '2024-2025',
      category: 'Data Science Research'
    }
  ];

  const additionalProjects = [
    {
      title: 'Healthcare Analytics Dashboard',
      description: 'Power BI dashboard for healthcare KPI monitoring',
      technologies: ['Power BI', 'SQL', 'Excel'],
      category: 'Data Visualization'
    },
    {
      title: 'Database Optimization Project',
      description: 'Performance optimization for large-scale healthcare databases',
      technologies: ['PostgreSQL', 'MongoDB', 'Snowflake'],
      category: 'Database Management'
    },
    {
      title: 'Training Management System',
      description: 'Web application for employee training coordination',
      technologies: ['Flask', 'JavaScript', 'MySQL'],
      category: 'Web Development'
    }
  ];

  const scrollToThesis = () => {
    const element = document.getElementById('thesis');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Showcasing innovative solutions in healthcare analytics, full-stack development, 
            and predictive modeling that deliver real-world business impact.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="border-0 shadow-large bg-gradient-card overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Project Info */}
                  <div className="lg:col-span-2 p-8">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {project.type}
                        </Badge>
                        <span className="text-sm text-neutral-500">{project.year}</span>
                      </div>
                      <CardTitle className="font-display text-2xl lg:text-3xl text-neutral-900 mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-neutral-600 leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      {/* Key Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-neutral-900 mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-neutral-700 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-neutral-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3">
                        {project.title.includes('Predictive Analytics') ? (
                          <Button variant="gradient" onClick={scrollToThesis}>
                            <FileText className="mr-2 h-4 w-4" />
                            Read Research
                          </Button>
                        ) : (
                          <>
                            <Button variant="gradient">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              View Live
                            </Button>
                            <Button variant="outline">
                              <Github className="mr-2 h-4 w-4" />
                              Source Code
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </div>

                  {/* Project Visual/Icon */}
                  <div className="lg:col-span-1 bg-gradient-primary p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-12 w-12 text-white" />
                      </div>
                      <div className="text-white/90">
                        <div className="font-semibold mb-1">{project.category}</div>
                        <div className="text-sm bg-white/10 px-3 py-1 rounded-full">
                          {project.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="font-display font-semibold text-2xl text-neutral-900 mb-8 text-center">
            Additional Projects & Experience
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={index} className="border-0 shadow-soft bg-gradient-card hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Code2 className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-neutral-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-neutral-600 mb-6">
            Interested in discussing a project or collaboration?
          </p>
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;