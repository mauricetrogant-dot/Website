import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Instagram } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'maurice.trogant@gmail.com',
      link: 'mailto:maurice.trogant@gmail.com',
    },
    /*{
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Maurice Trogant',
      link: 'https://linkedin.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@maxmustermann',
      link: 'https://github.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@maxmustermann',
      link: 'https://instagram.com',
    },
    {
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.188 0c-.517 0-.741.325-.927.66-.246.446-.201.547-.091 1.133.066.349.157.671.166.771l.003.04c.015.231-.047.398-.2.563-.129.138-.218.25-.27.335-.246.414-.326.672-.326 1.073 0 .57.27 1.04.683 1.44.277.269.667.528 1.073.69.717.286 1.567.424 2.49.424.924 0 1.773-.138 2.489-.424.407-.162.797-.421 1.074-.69.413-.4.683-.87.683-1.44 0-.401-.08-.659-.326-1.073-.052-.085-.141-.197-.27-.335-.153-.165-.215-.332-.2-.563l.003-.04c.009-.1.1-.422.166-.771.11-.586.155-.687-.091-1.133-.186-.335-.41-.66-.927-.66h-5.812zm-6.188 0c-.517 0-.741.325-.927.66-.246.446-.201.547-.091 1.133.066.349.157.671.166.771l.003.04c.015.231-.047.398-.2.563-.129.138-.218.25-.27.335-.246.414-.326.672-.326 1.073 0 .57.27 1.04.683 1.44.277.269.667.528 1.073.69.717.286 1.567.424 2.49.424.924 0 1.773-.138 2.489-.424.407-.162.797-.421 1.074-.69.413-.4.683-.87.683-1.44 0-.401-.08-.659-.326-1.073-.052-.085-.141-.197-.27-.335-.153-.165-.215-.332-.2-.563l.003-.04c.009-.1.1-.422.166-.771.11-.586.155-.687-.091-1.133-.186-.335-.41-.66-.927-.66h-5.812zm-6 0c-.517 0-.741.325-.927.66-.246.446-.201.547-.091 1.133.066.349.157.671.166.771l.003.04c.015.231-.047.398-.2.563-.129.138-.218.25-.27.335-.246.414-.326.672-.326 1.073 0 .57.27 1.04.683 1.44.277.269.667.528 1.073.69.717.286 1.567.424 2.49.424.924 0 1.773-.138 2.489-.424.407-.162.797-.421 1.074-.69.413-.4.683-.87.683-1.44 0-.401-.08-.659-.326-1.073-.052-.085-.141-.197-.27-.335-.153-.165-.215-.332-.2-.563l.003-.04c.009-.1.1-.422.166-.771.11-.586.155-.687-.091-1.133-.186-.335-.41-.66-.927-.66h-5.812z"/>
        </svg>
      ),
      label: 'Xing',
      value: 'Max Mustermann',
      link: 'https://xing.com',
    },
    */{
      icon: MapPin,
      label: 'Standort',
      value: 'Essen, Deutschland',
      link: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-center mb-8 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Kontakt
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Haben Sie ein Projekt im Kopf oder möchten Sie einfach nur Hallo sagen? 
            Ich freue mich auf Ihre Nachricht!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                {method.link ? (
                  <motion.a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all"
                    whileHover={{ backgroundColor: "rgb(249, 250, 251)" }}
                  >
                    <motion.div 
                      className="bg-gray-100 p-3 rounded-full"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <method.icon className="w-6 h-6 text-gray-700" />
                    </motion.div>
                    <div>
                      <motion.p 
                        className="text-gray-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {method.label}
                      </motion.p>
                      <motion.p 
                        className="text-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {method.value}
                      </motion.p>
                    </div>
                  </motion.a>
                ) : (
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md">
                    <motion.div 
                      className="bg-gray-100 p-3 rounded-full"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <method.icon className="w-6 h-6 text-gray-700" />
                    </motion.div>
                    <div>
                      <motion.p 
                        className="text-gray-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {method.label}
                      </motion.p>
                      <motion.p 
                        className="text-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {method.value}
                      </motion.p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-6 rounded-xl">
    <a
      href="mailto:maurice.trogant@gmail.com?subject=Kontakt%20Portfolio&body=Hi%20Maurice%2C%0D%0A"
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mail className="w-5 h-5 mr-2" />
      </motion.div>
      Nachricht senden
    </a>
  </Button>
</motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}