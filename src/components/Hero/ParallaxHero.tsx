import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import { useScroll } from 'framer-motion';
import TextReveal from './TextReveal';
import { useThemeStore } from '../../store/themeStore';
import { useNavigate } from 'react-router-dom';

const ParallaxHero = () => {
  const { scrollYProgress } = useScroll();
  const { isDarkMode } = useThemeStore();
  const navigate = useNavigate();

  return (
    <section className={`relative min-h-screen flex items-center ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90'
            : 'bg-gradient-to-r from-white/90 via-white/95 to-white opacity-90'
        }`} />
        <Suspense fallback={<div className="w-full h-full bg-gray-900" />}>
          <HeroBackground scrollProgress={scrollYProgress} isDarkMode={isDarkMode} />
        </Suspense>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <TextReveal>
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
              isDarkMode 
                ? 'bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-green-500' 
                : 'bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-green-600'
            }`}>
              Powering a
              <br />
              Sustainable Future
            </h1>
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-200' : 'text-gray-600'
            }`}
          >
            Join us in the revolution towards clean, renewable energy and a
            greener tomorrow.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/resources')}
            className="relative px-8 py-4 bg-green-500 rounded-full text-lg font-semibold overflow-hidden group text-white"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-green-400 blur-xl group-hover:animate-pulse-slow opacity-50" />
          </motion.button>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className={`w-6 h-10 border-2 rounded-full p-1 ${
          isDarkMode ? 'border-white' : 'border-gray-900'
        }`}>
          <div className={`w-1 h-3 rounded-full mx-auto animate-bounce ${
            isDarkMode ? 'bg-white' : 'bg-gray-900'
          }`} />
        </div>
      </motion.div>
    </section>
  );
};

export default ParallaxHero;