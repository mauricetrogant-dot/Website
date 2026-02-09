import { motion } from 'motion/react';
import { Code2, Sparkles, Rocket } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Wartbarer und skalierbarer Code mit Best Practices',
    },
    {
      icon: Sparkles,
      title: 'Moderne Technologien',
      description: 'React, TypeScript, Node.js und mehr',
    },
    {
      icon: Rocket,
      title: 'Schnelle Umsetzung',
      description: 'Agile Entwicklung und effiziente Lösungen',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Über mich
          </motion.h2>
          
          <motion.div 
            className="mb-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hallo! Ich bin ein leidenschaftlicher Softwareentwickler mit mehrjähriger Erfahrung 
              in der Entwicklung von Web- und Mobile-Anwendungen. Mein Fokus liegt auf der 
              Erstellung benutzerfreundlicher und performanter Lösungen.
            </motion.p>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Ich arbeite gerne mit modernen Frameworks und Technologien und bin stets bemüht, 
              mich weiterzuentwickeln und neue Skills zu erlernen.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-shadow"
              >
                <motion.div 
                  className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon className="w-8 h-8 text-gray-700" />
                </motion.div>
                <motion.h3 
                  className="mb-3 text-gray-800"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {skill.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {skill.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}