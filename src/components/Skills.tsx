
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const programmingLanguages = [
    'Python',
    'Java', 
    'C',
    'SQL'
  ];

  const frontendTechnologies = [
    'HTML',
    'CSS',
    'React'
  ];

  const backendTechnologies = [
    'Django',
    'Node.js',
    'PostgreSQL',
    'MySQL'
  ];

  const additionalSkills = [
    'Git & GitHub',
    'Problem Solving',
    'Leadership & Team Management',
    'Project Planning & Coordination',
    'Decision Making',
    'Robotics & Automation',
    'Effective Communication',
    'Public Speaking & Presentation'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise in programming languages and backend technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Programming Languages */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center text-sm">💻</span>
                Programming Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {programmingLanguages.map((lang, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frontend Technologies */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center text-sm">🎨</span>
                Frontend Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {frontendTechnologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Backend Technologies */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center text-sm">⚙️</span>
                Backend Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {backendTechnologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Skills */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center text-sm">🚀</span>
                Additional Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;