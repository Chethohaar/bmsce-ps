import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { FootprintData } from '../../types';

const CarbonCalculator = () => {
  const [data, setData] = useState<FootprintData>({
    electricity: 0,
    transportation: 0,
    waste: 0,
    diet: 0,
  });

  const calculateTotal = () => {
    return Object.values(data).reduce((acc, curr) => acc + curr, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Carbon Footprint Calculator
      </h2>

      <div className="space-y-6">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
              {key}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) =>
                setData({ ...data, [key]: parseInt(e.target.value) })
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>{value} units</span>
              <span>{value * 0.1} tons CO2/year</span>
            </div>
          </div>
        ))}

        <div className="mt-8 p-4 bg-green-50 dark:bg-green-900 rounded-lg">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-100">
            Your Total Carbon Footprint
          </h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-300">
            {(calculateTotal() * 0.1).toFixed(2)} tons CO2/year
          </p>
        </div>

        <div className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <h4 className="font-semibold mb-2">Recommendations:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Consider switching to renewable energy sources</li>
            <li>Use public transportation or bike when possible</li>
            <li>Reduce waste through recycling and composting</li>
            <li>Adopt a more plant-based diet</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default CarbonCalculator;