import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onViewAll?: () => void;
}

export function Projects({ onViewAll }: ProjectsProps) {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Eine vollständige E-Commerce-Lösung mit Warenkorb, Zahlungsabwicklung und Admin-Dashboard.',
      image: 'https://images.unsplash.com/photo-1761305135267-892b33c19c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjIwOTAzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/username/ecommerce-platform',
      demoUrl: 'https://demo-ecommerce.example.com',
    },
    {
      title: 'Task Management App',
      description: 'Intuitive Projektmanagement-Anwendung mit Drag & Drop und Team-Kollaboration.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjIwOTAzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/username/task-manager',
      demoUrl: 'https://demo-taskmanager.example.com',
    },
    {
      title: 'Mobile Banking App',
      description: 'Sichere Mobile-Banking-Lösung mit Echtzeit-Transaktionen und Budgetplanung.',
      image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxOTk3NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Firebase', 'REST API'],
      githubUrl: 'https://github.com/username/banking-app',
      demoUrl: 'https://demo-banking.example.com',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-50 py-20 px-4">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-16 text-gray-800">Meine Projekte</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300 bg-white border-gray-200">
                  <div className="relative overflow-hidden h-48">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-gray-800">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              onClick={onViewAll}
              size="lg"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-6 rounded-xl group"
            >
              Alle Projekte ansehen
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
