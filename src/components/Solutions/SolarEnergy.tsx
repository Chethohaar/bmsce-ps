import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Home, Battery, Factory } from 'lucide-react';

export const SolarEnergy = () => {
  const solutions = [
    {
      icon: Home,
      title: "Residential Solar",
      description: "Transform your home with rooftop solar panels. Save on electricity bills while reducing carbon emissions.",
      benefits: ["30-50% reduction in bills", "25-year warranty", "Government incentives"]
    },
    {
      icon: Factory,
      title: "Commercial Solar",
      description: "Large-scale solar solutions for businesses and industries. Maximize efficiency and sustainability.",
      benefits: ["ROI within 5-7 years", "Enhanced brand value", "Tax benefits"]
    },
    {
      icon: Battery,
      title: "Solar Storage",
      description: "Advanced battery systems to store solar energy for use during non-sunny hours.",
      benefits: ["24/7 power availability", "Grid independence", "Emergency backup"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Sun className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
            Solar Energy Solutions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Harness the power of the sun with our cutting-edge solar technologies.
            Sustainable, efficient, and future-ready solutions for homes and businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <solution.icon className="w-12 h-12 text-yellow-500 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {solution.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.benefits.map((benefit, idx) => (
                  <li 
                    key={idx}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};