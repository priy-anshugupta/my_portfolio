import { GraduationCap, Calendar, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            My <span className="hero-gradient bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic foundation building the future of technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl hero-gradient text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-gray-900">
                    Bachelor of Technology - Information Technology
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 mt-1">
                    Vidyalankar Institute of Technology
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Academic Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Duration</p>
                      <p className="text-gray-600">Currently in 2nd Year • Graduation: 2028</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Current CGPA</p>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">9.82/10</span>
                        <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                          Excellent
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Academic Excellence</p>
                    <p className="text-gray-600 leading-relaxed">
                      Excelling academically while engaging in real-world problem-solving through coding contests and hackathons.
                    </p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;