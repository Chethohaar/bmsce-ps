import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Sun, Droplets } from 'lucide-react';
import ParallaxHero from '../components/Hero/ParallaxHero';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      icon: Sun,
      title: 'Solar Energy',
      description: 'Harness the power of the sun with our advanced solar solutions',
      path: '/solutions/solar'
    },
    {
      icon: Wind,
      title: 'Wind Power',
      description: 'Clean, efficient wind energy systems for sustainable power generation',
      path: '/solutions/wind'
    },
    {
      icon: Droplets,
      title: 'Hydroelectric',
      description: 'Reliable hydroelectric solutions for continuous renewable energy',
      path: '/solutions/hydro'
    }
  ];

  return (
    <div className="relative">
      <ParallaxHero />

      <section className="relative mt-8 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-2xl border-2 border-green-500/20 
              bg-white dark:bg-gray-800 backdrop-blur-sm 
              hover:border-green-500/40 transition-all duration-300"
            style={{ height: '800px' }}
          >
            <div className="w-full bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-500/5 dark:to-blue-500/5 p-4 border-b border-green-500/20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <iframe
              src="https://famous-bunny-47bdd0.netlify.app/"
              title="Reference Website"
              className="w-full h-[calc(100%-48px)] border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Discover how we're making renewable energy accessible to everyone
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => navigate(item.path)}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center 
                  hover:shadow-lg transition-all cursor-pointer
                  transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <item.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                <div className="mt-4 text-green-500 dark:text-green-400 flex items-center justify-center group">
                  <span className="mr-2">Learn More</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;