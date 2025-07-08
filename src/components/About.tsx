import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: '5+ Years',
      description: 'Healthcare revenue operations & technical leadership'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Healthcare analytics & predictive modeling expertise'
    },
    {
      icon: Users,
      title: 'Team Leader',
      description: 'Experienced trainer and project manager'
    },
    {
      icon: GraduationCap,
      title: 'Advanced Education',
      description: 'Master\'s in Business Analytics (ongoing)'
    }
  ];

  const education = [
    {
      degree: 'Master\'s in Business Analytics',
      institution: 'University of Colombo',
      period: '2023 - 2025',
      status: 'In Progress'
    },
    {
      degree: 'BSc Computer Systems & Networking',
      institution: 'Greenwich University',
      period: 'Completed',
      status: 'Graduate'
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
            About Me
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            A passionate data scientist and full stack developer with a proven track record in healthcare analytics, 
            predictive modeling, and enterprise web applications. I specialize in transforming complex business 
            challenges into innovative technological solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Main Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-semibold text-2xl text-neutral-900 mb-4">
                Professional Journey
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                With over 5 years of leadership experience in healthcare revenue operations, I've developed 
                a unique blend of business acumen and technical expertise. My journey has taken me from 
                managing complex healthcare systems to developing predictive models that drive real-world impact.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                I'm passionate about bridging the gap between data science and practical business applications, 
                particularly in healthcare where technology can truly make a difference in people's lives. 
                My expertise spans from full-stack development to advanced analytics, always with a focus 
                on delivering measurable results.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="font-display font-semibold text-2xl text-neutral-900 mb-4">
                Core Values
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Innovation', 'Data-Driven Decisions', 'Healthcare Impact', 'Continuous Learning', 'Team Collaboration'].map((value) => (
                  <Badge key={value} variant="secondary" className="px-3 py-1 text-sm">
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights & Education */}
          <div className="space-y-8">
            {/* Achievement Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} className="border-0 shadow-soft bg-gradient-card hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">
                            {highlight.title}
                          </h4>
                          <p className="text-sm text-neutral-600">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Education */}
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-4 flex items-center">
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-neutral-900 text-sm">
                          {edu.degree}
                        </h4>
                        <Badge variant={edu.status === 'In Progress' ? 'default' : 'secondary'} className="text-xs">
                          {edu.status}
                        </Badge>
                      </div>
                      <p className="text-neutral-700 text-sm">
                        {edu.institution}
                      </p>
                      <p className="text-neutral-500 text-xs">
                        {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;