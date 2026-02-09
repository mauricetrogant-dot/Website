import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Cog, 
  Database, 
  BarChart3, 
  Code2, 
  Server, 
  Globe 
} from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Automatisierung',
      description: 'Optimierung von Geschäftsprozessen durch intelligente Automatisierungslösungen.',
      icon: Cog,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Digitalisierung',
      description: 'Transformation analoger Prozesse in moderne digitale Workflows.',
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Datenanalyse',
      description: 'Aufbereitung und Analyse komplexer Datenstrukturen für fundierte Entscheidungen.',
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Frontend Development',
      description: 'Entwicklung moderner, benutzerfreundlicher Oberflächen mit React und TypeScript.',
      icon: Code2,
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Backend Development',
      description: 'Aufbau skalierbarer Server-Architekturen und APIs.',
      icon: Server,
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Webdevelopment',
      description: 'Ganzheitliche Entwicklung von Webanwendungen von der Konzeption bis zum Deployment.',
      icon: Database,
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-50 py-20 px-4">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-center mb-16 text-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Erfahrungen
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 bg-white border-gray-200 group">
                    <CardHeader>
                      <div className="mb-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.15 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${experience.color} flex items-center justify-center shadow-lg`}
                        >
                          <motion.div
                            animate={{ 
                              scale: [1, 1.1, 1],
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              delay: index * 0.2,
                              ease: "easeInOut" 
                            }}
                          >
                            <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                          </motion.div>
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <CardTitle className="text-gray-800 group-hover:text-gray-900 transition-colors">
                          {experience.title}
                        </CardTitle>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <CardDescription className="text-gray-600 mt-2">
                          {experience.description}
                        </CardDescription>
                      </motion.div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow flex flex-col justify-end">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.4, duration: 0.8, ease: "easeOut" }}
                        className={`h-1 rounded-full bg-gradient-to-r ${experience.color}`}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}