import { Code, Brain, Rocket, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/profile-image.jpg';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "IT Student",
      description: "Second-year at Vidyalankar Institute of Technology"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Passion",
      description: "Aspiring AI/ML engineer with hands-on project experience"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Focus",
      description: "Specializing in backend web development and databases"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description: "Building impactful solutions with cutting-edge technology"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intelligent solutions through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image and Bio */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src={profileImage}
                alt="Priyanshu Gupta"
                className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl border-2 border-primary/20 shadow-lg object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 hero-gradient rounded-full opacity-20 blur-xl"></div>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a second-year Information Technology student at Vidyalankar Institute of Technology, 
                with a passion for AI/ML and a strong aspiration to become an AI/ML engineer. I'm currently 
                focused on mastering backend web development, building impactful projects, and continuously 
                exploring new technologies to enhance my skills and create innovative solutions.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="card-hover border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg hero-gradient text-primary-foreground">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;