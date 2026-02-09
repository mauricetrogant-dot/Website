import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';

interface AllProjectsPageProps {
  onBack: () => void;
}

export function AllProjectsPage({ onBack }: AllProjectsPageProps) {
  const allProjects = [
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
    {
      title: 'Analytics Dashboard',
      description: 'Umfassendes Datenanalyse-Tool mit interaktiven Charts und Echtzeit-Monitoring.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyMDI4OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Vue.js', 'D3.js', 'Express'],
      githubUrl: 'https://github.com/username/analytics-dashboard',
      demoUrl: 'https://demo-analytics.example.com',
    },
    {
      title: 'Social Media Platform',
      description: 'Moderne Social-Media-Plattform mit Posts, Stories und Messaging-Funktionen.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcHxlbnwxfHx8fDE3NjIwNDI3NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'GraphQL', 'AWS'],
      githubUrl: 'https://github.com/username/social-platform',
      demoUrl: 'https://demo-social.example.com',
    },
    {
      title: 'Fitness Tracker',
      description: 'Personal Training App mit Workout-Planung, Fortschritts-Tracking und Ernährungsplan.',
      image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBhcHB8ZW58MXx8fHwxNzYxOTgwNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React Native', 'Redux', 'HealthKit'],
      githubUrl: 'https://github.com/username/fitness-tracker',
      demoUrl: 'https://demo-fitness.example.com',
    },
    {
      title: 'Weather Forecast App',
      description: 'Detaillierte Wettervorhersage mit Standortbasierung und interaktiven Karten.',
      image: 'https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwYXBwbGljYXRpb258ZW58MXx8fHwxNzYyMDkwODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Angular', 'OpenWeather API', 'Mapbox'],
      githubUrl: 'https://github.com/username/weather-app',
      demoUrl: 'https://demo-weather.example.com',
    },
    {
      title: 'Food Delivery Service',
      description: 'Komplette Lieferplattform mit Restaurant-Verwaltung und Echtzeit-Tracking.',
      image: 'https://images.unsplash.com/photo-1688668603700-c228fffe6910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzYyMDA0ODM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Next.js', 'Stripe', 'Socket.io'],
      githubUrl: 'https://github.com/username/food-delivery',
      demoUrl: 'https://demo-fooddelivery.example.com',
    },
    {
      title: 'Chat Messenger',
      description: 'Sichere Messaging-App mit End-to-End-Verschlüsselung und Gruppen-Chats.',
      image: 'https://images.unsplash.com/photo-1758525865627-afc184e0e2c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0JTIwbWVzc2FnaW5nJTIwYXBwfGVufDF8fHx8MTc2MjA5MDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'WebRTC', 'Firebase'],
      githubUrl: 'https://github.com/username/chat-messenger',
      demoUrl: 'https://demo-chat.example.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-b border-gray-200 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück
          </Button>
        </div>
      </motion.header>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-center mb-6 text-gray-800">Alle Projekte</h1>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Eine Übersicht über alle meine Projekte und Entwicklungen. Von Web-Applikationen 
              bis hin zu mobilen Lösungen.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
