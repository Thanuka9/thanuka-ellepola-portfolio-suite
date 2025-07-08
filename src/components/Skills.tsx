import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, BarChart3, GitBranch, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'bg-tech-blue/10 text-tech-blue',
      skills: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS', 'Flask']
    },
    {
      icon: Brain,
      title: 'Data Science & ML',
      color: 'bg-tech-teal/10 text-tech-teal',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Predictive Modeling', 'Statistical Analysis']
    },
    {
      icon: Database,
      title: 'Database Management',
      color: 'bg-accent/10 text-accent',
      skills: ['CosmosDB', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLAlchemy', 'Snowflake', 'Vector DBs']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Visualization',
      color: 'bg-primary/10 text-primary',
      skills: ['Power BI', 'Matplotlib', 'Excel', 'Data Visualization', 'Business Intelligence']
    },
    {
      icon: GitBranch,
      title: 'Development Tools',
      color: 'bg-neutral-600/10 text-neutral-600',
      skills: ['Git', 'GitHub', 'Version Control', 'CI/CD', 'Agile Methodologies']
    },
    {
      icon: Users,
      title: 'Leadership & Soft Skills',
      color: 'bg-accent/10 text-accent',
      skills: ['Team Leadership', 'Project Management', 'Training', 'Communication', 'Strategic Planning']
    }
  ];

  const expertise = [
    'Healthcare Revenue Cycle Management',
    'Predictive Analytics',
    'Full Stack Web Development',
    'Enterprise Database Design',
    'Business Process Optimization',
    'Technical Team Leadership'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            A comprehensive technical skill set developed through years of hands-on experience 
            in healthcare analytics, full-stack development, and team leadership.
          </p>
        </div>

        {/* Core Expertise */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-2xl text-neutral-900 mb-8 text-center">
            Core Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-soft bg-gradient-card hover:shadow-medium transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-neutral-900 ml-3">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-neutral-700 text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16">
          <h3 className="font-display font-semibold text-2xl text-neutral-900 mb-8 text-center">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-lg text-neutral-900 mb-4">Advanced</h4>
              <div className="space-y-2">
                {['Python', 'Flask', 'Healthcare Analytics', 'SQL', 'Power BI'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-neutral-700">{skill}</span>
                    <div className="w-32 bg-neutral-200 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-neutral-900 mb-4">Proficient</h4>
              <div className="space-y-2">
                {['JavaScript', 'MongoDB', 'Machine Learning', 'Team Leadership', 'Project Management'].map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-neutral-700">{skill}</span>
                    <div className="w-32 bg-neutral-200 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;