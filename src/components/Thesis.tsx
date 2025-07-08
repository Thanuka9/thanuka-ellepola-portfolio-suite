import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Calendar, GraduationCap, TrendingUp, AlertCircle } from 'lucide-react';

const Thesis = () => {
  const thesisAbstract = `This research investigates the application of predictive analytics in healthcare revenue cycle management, specifically focusing on payment prediction models to improve collection efficiency and reduce administrative overhead. The study employs machine learning algorithms including logistic regression, random forest, and neural networks to analyze historical payment data and identify patterns that predict payment likelihood.

The research addresses critical challenges in healthcare financial management, where unpredictable payment patterns significantly impact cash flow and operational efficiency. By developing robust predictive models, healthcare organizations can optimize their collection strategies, allocate resources more effectively, and improve overall financial performance.

Key findings demonstrate that predictive models can achieve up to 85% accuracy in payment prediction, enabling healthcare providers to implement data-driven collection strategies. The study also explores the integration of these models into existing revenue cycle management systems, providing practical implementation guidelines for healthcare organizations.

The research contributes to the growing field of healthcare analytics by providing empirical evidence of machine learning applications in financial operations, offering a framework for sustainable revenue cycle optimization.`;

  const keyContributions = [
    'Development of novel payment prediction algorithms for healthcare RCM',
    'Comprehensive analysis of payment patterns in healthcare settings',
    'Implementation framework for predictive analytics in RCM systems',
    'Evaluation of machine learning model performance in real-world scenarios',
    'Cost-benefit analysis of predictive analytics adoption'
  ];

  const methodology = [
    'Literature Review & Gap Analysis',
    'Data Collection from Healthcare Systems',
    'Feature Engineering & Data Preprocessing',
    'Model Development & Training',
    'Performance Evaluation & Validation',
    'Implementation Framework Design'
  ];

  return (
    <section id="thesis" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mb-6">
            Research Thesis
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Academic research contribution to healthcare analytics and predictive modeling 
            in revenue cycle management systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Thesis Overview */}
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Master's Thesis
                  </Badge>
                  <div className="flex items-center text-sm text-neutral-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    2024-2025
                  </div>
                </div>
                <CardTitle className="font-display text-2xl lg:text-3xl text-neutral-900">
                  Predictive Analytics for Payment Prediction in Revenue Cycle Management
                </CardTitle>
                <p className="text-neutral-600">
                  University of Colombo • Master's in Business Analytics
                </p>
              </CardHeader>
            </Card>

            {/* Abstract */}
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-display text-xl text-neutral-900 flex items-center">
                  <FileText className="h-5 w-5 text-primary mr-2" />
                  Abstract
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 leading-relaxed text-justify">
                  {thesisAbstract}
                </p>
              </CardContent>
            </Card>

            {/* PDF Viewer Placeholder */}
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-display text-xl text-neutral-900">
                  Thesis Document
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-neutral-100 border-2 border-dashed border-neutral-300 rounded-lg p-12 text-center">
                  <FileText className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-neutral-700 mb-2">
                    Thesis Document Available for Review
                  </h3>
                  <p className="text-neutral-500 mb-4">
                    The complete thesis document will be embedded here for online viewing once defense is completed.
                  </p>
                  <div className="flex items-center justify-center">
                    <AlertCircle className="h-4 w-4 text-amber-500 mr-2" />
                    <span className="text-sm text-amber-600">
                      Currently in review • Expected completion: Early 2025
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Research Details */}
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-display text-lg text-neutral-900 flex items-center">
                  <GraduationCap className="h-5 w-5 text-primary mr-2" />
                  Research Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm mb-2">Institution</h4>
                  <p className="text-neutral-700 text-sm">University of Colombo</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm mb-2">Program</h4>
                  <p className="text-neutral-700 text-sm">Master's in Business Analytics</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm mb-2">Research Area</h4>
                  <p className="text-neutral-700 text-sm">Healthcare Analytics & Predictive Modeling</p>
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 text-sm mb-2">Status</h4>
                  <Badge variant="outline" className="text-xs">
                    Thesis Defense Phase
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Key Contributions */}
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-display text-lg text-neutral-900 flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary mr-2" />
                  Key Contributions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {keyContributions.map((contribution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-neutral-700 text-sm">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Methodology */}
            <Card className="border-0 shadow-soft bg-gradient-card">
              <CardHeader>
                <CardTitle className="font-display text-lg text-neutral-900">
                  Research Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {methodology.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-semibold mr-3">
                        {index + 1}
                      </div>
                      <span className="text-neutral-700 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact for More Info */}
            <Card className="border-0 shadow-soft bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Interested in the Research?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Contact me to discuss the findings or potential collaborations.
                </p>
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get in Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thesis;