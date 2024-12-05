import React from 'react';
import ParallaxHero from '../components/Hero/ParallaxHero';
import { motion } from 'framer-motion';
import { Wind, Sun, Droplets } from 'lucide-react';


const Home = () => {
  return (
    <div className="relative">
      <ParallaxHero />
      
      {/* Embedded Website Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[800px] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 via-blue-50 to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 p-1">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-500/5 dark:to-blue-500/5" />
            <iframe
              src="https://famous-bunny-47bdd0.netlify.app/"
              title="Interactive Energy Visualization"
              className="w-full h-full rounded-lg border-0 relative z-10 bg-white dark:bg-gray-900"
              style={{ 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
              loading="lazy"
              allowFullScreen
            />
          </div>
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
            {[
              {
                icon: Sun,
                title: 'Solar Energy',
                description:
                  'Harness the power of the sun with our advanced solar solutions',
              },
              {
                icon: Wind,
                title: 'Wind Power',
                description:
                  'Clean, efficient wind energy systems for sustainable power generation',
              },
              {
                icon: Droplets,
                title: 'Hydroelectric',
                description:
                  'Reliable hydroelectric solutions for continuous renewable energy',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;