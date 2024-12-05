import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Factory, Gauge, CloudLightning } from 'lucide-react';

export const WindPower = () => {
  const solutions = [
    {
      icon: Wind,
      title: "Onshore Wind Farms",
      description: "Large-scale wind farms for maximum power generation in optimal wind conditions.",
      benefits: ["High power output", "Low maintenance costs", "Proven technology"]
    },
    {
      icon: CloudLightning,
      title: "Offshore Wind",
      description: "Harness powerful ocean winds with offshore turbine installations.",
      benefits: ["Consistent wind speeds", "No land use", "Higher efficiency"]
    },
    {
      icon: Gauge,
      title: "Wind Monitoring",
      description: "Advanced monitoring systems for optimal turbine performance.",
      benefits: ["Real-time data", "Predictive maintenance", "Performance optimization"]
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
          <Wind className="w-16 h-16 mx-auto text-blue-500 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
            Wind Power Solutions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Harness the power of wind with our innovative turbine technologies.
            Clean, efficient, and sustainable energy solutions for a better future.
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
              <solution.icon className="w-12 h-12 text-blue-500 mb-6" />
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
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
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