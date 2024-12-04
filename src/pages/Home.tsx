import React from 'react';
import ParallaxHero from '../components/Hero/ParallaxHero';
import { motion } from 'framer-motion';
import { Wind, Sun, Droplets } from 'lucide-react';
import { Globe } from '../components/Globe/Globe';

const Home = () => {
  return (
    <>
      <ParallaxHero />
      <Globe />

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
    </>
  );
};

export default Home;