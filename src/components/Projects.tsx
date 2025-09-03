import { ExternalLink, Github, Database, Globe, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "College Ground Booking System",
      description: "A comprehensive booking system for college sports facilities with user authentication and admin panel. Features include real-time availability checking, booking management, user profiles, and administrative controls for managing facilities and bookings.",
      technologies: ["Django", "HTML/CSS", "PostgreSQL", "Python"],
      icon: <Database className="w-6 h-6" />,
      githubUrl: "https://github.com/Aashutosh-Mahajan/Ground-Booking-System",
      features: [
        "User authentication & authorization",
        "Real-time facility availability",
        "Admin panel for facility management",
        "Booking history and analytics",
        "Responsive web design"
      ]
    },
    {
      title: "Gamestation",
      description: "A browser-based gaming platform offering fun and challenging casual games like puzzles, memory challenges, and reflex tests. Players can enjoy games instantly without downloads, featuring score tracking and competitive gameplay elements.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      icon: <Globe className="w-6 h-6" />,
      githubUrl: "https://github.com/priy-anshugupta/GameStation",
      features: [
        "Multiple casual game types",
        "No download required - browser-based",
        "Score tracking and leaderboards",
        "Memory and reflex challenges",
        "AI-powered game mechanics"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover border-border/50 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl hero-gradient text-primary-foreground">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a 
                      href={project.title === "Gamestation" ? "https://gamestation1.netlify.app/" : "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button 
            size="lg" 
            className="glow-effect"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;