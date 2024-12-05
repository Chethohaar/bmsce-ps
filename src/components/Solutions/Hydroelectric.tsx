import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Waves, Power, Activity } from 'lucide-react';

export const Hydroelectric = () => {
  const solutions = [
    {
      icon: Waves,
      title: "Run-of-River",
      description: "Eco-friendly hydropower that uses natural river flow for continuous energy generation.",
      benefits: ["Minimal environmental impact", "Continuous power", "Natural flow"]
    },
    {
      icon: Power,
      title: "Storage Systems",
      description: "Reservoir-based systems for controlled power generation and water management.",
      benefits: ["On-demand power", "Flood control", "Water management"]
    },
    {
      icon: Activity,
      title: "Micro Hydro",
      description: "Small-scale hydroelectric solutions perfect for local communities and remote areas.",
      benefits: ["Low cost", "Easy maintenance", "Community powered"]
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
          <Droplets className="w-16 h-16 mx-auto text-cyan-500 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Hydroelectric Solutions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Convert the power of flowing water into clean, renewable energy.
            Reliable, sustainable, and environmentally conscious power generation.
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
              <solution.icon className="w-12 h-12 text-cyan-500 mb-6" />
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
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
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