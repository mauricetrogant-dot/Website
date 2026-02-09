import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profilbild from './assets/bewerbefoto_kleiner.png';




export function Hero() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden py-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1730036900477-09391e7a5414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwdGVjaCUyMGFic3RyYWN0fGVufDF8fHx8MTc2Nzc5OTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/60 to-gray-50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
          className="mb-4"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block rounded-full"
          >
            <ImageWithFallback
              src={profilbild}
              alt="Profilbild von Maurice Trogant"
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="mb-3 text-white"
        >
          Maurice Trogant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-200 max-w-2xl mx-auto"
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Full-Stack Softwareentwickler mit Leidenschaft für innovative Lösungen
          </motion.span>
        </motion.p>
      </motion.div>
    </section>
  );
}