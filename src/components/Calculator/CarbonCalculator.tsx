import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
);

type TransportType = 'car' | 'bus' | 'train' | 'bicycle';

interface FootprintData {
  transport: number;
  electricity: number;
  waste: number;
  diet: number;
}

export const CarbonCalculator = () => {
  const [distance, setDistance] = useState<number>(0);
  const [transportType, setTransportType] = useState<TransportType>('car');
  const [electricityUsage, setElectricityUsage] = useState<number>(0);
  const [wasteProduction, setWasteProduction] = useState<number>(0);
  const [meatConsumption, setMeatConsumption] = useState<number>(0);
  const [footprint, setFootprint] = useState<FootprintData>({
    transport: 0,
    electricity: 0,
    waste: 0,
    diet: 0
  });

  const transportEmissions: Record<TransportType, number> = {
    car: 0.2,
    bus: 0.08,
    train: 0.04,
    bicycle: 0,
  };

  useEffect(() => {
    const transportFootprint = distance * transportEmissions[transportType];
    const electricityFootprint = electricityUsage * 0.5;
    const wasteFootprint = wasteProduction * 0.3;
    const dietFootprint = meatConsumption * 2.5;

    setFootprint({
      transport: transportFootprint,
      electricity: electricityFootprint,
      waste: wasteFootprint,
      diet: dietFootprint
    });
  }, [distance, transportType, electricityUsage, wasteProduction, meatConsumption]);

  const totalFootprint = Object.values(footprint).reduce((a, b) => a + b, 0);
  const yearlyFootprint = (totalFootprint * 12) / 1000; // Convert to tons per year

  const pieData = {
    labels: ['Transport', 'Electricity', 'Waste', 'Diet'],
    datasets: [
      {
        data: Object.values(footprint),
        backgroundColor: ['#3b82f6', '#ef4444', '#f59e0b', '#10b981'],
        borderColor: ['#2563eb', '#dc2626', '#d97706', '#059669'],
        borderWidth: 1,
      },
    ],
  };

  const getRecommendations = () => [
    {
      title: "Solar Energy",
      description: "Installing solar panels could reduce your electricity footprint by up to 80%",
      icon: "☀️",
      action: "Learn more about solar installation",
      impact: "Potential saving: 2-3 tons CO₂/year"
    },
    {
      title: "Electric Vehicle",
      description: "Switching to an electric vehicle can reduce transport emissions by 50%",
      icon: "🚗",
      action: "Explore EV options",
      impact: "Potential saving: 2.5 tons CO₂/year"
    },
    {
      title: "Smart Home Systems",
      description: "Smart thermostats and energy monitoring can optimize consumption",
      icon: "🏠",
      action: "Discover smart home solutions",
      impact: "Potential saving: 0.8 tons CO₂/year"
    },
    {
      title: "Wind Energy",
      description: "Consider community wind energy projects or green energy providers",
      icon: "🌪️",
      action: "Find green energy providers",
      impact: "Potential saving: 1.5 tons CO₂/year"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            Carbon Footprint Calculator
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Calculate your total environmental impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
              Transport
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Distance (km/day)
                </label>
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Transport Type
                </label>
                <select
                  value={transportType}
                  onChange={(e) => setTransportType(e.target.value as TransportType)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="car">Car</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                  <option value="bicycle">Bicycle</option>
                </select>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Electricity</h3>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Monthly Usage (kWh)
              </label>
              <input
                type="number"
                value={electricityUsage}
                onChange={(e) => setElectricityUsage(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Waste</h3>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Weekly Waste (kg)
              </label>
              <input
                type="number"
                value={wasteProduction}
                onChange={(e) => setWasteProduction(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Diet</h3>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Weekly Meat Consumption (kg)
              </label>
              <input
                type="number"
                value={meatConsumption}
                onChange={(e) => setMeatConsumption(Number(e.target.value))}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                min="0"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center text-gray-900 dark:text-white">
              Carbon Footprint Distribution
            </h3>
            <div className="w-full max-w-[300px] mx-auto">
              <Pie data={pieData} options={{ 
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      padding: window.innerWidth < 640 ? 10 : 20
                    }
                  }
                }
              }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg flex flex-col justify-center items-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              Environmental Impact
            </h3>
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Monthly Impact */}
              <div className="text-center border-r border-gray-200 dark:border-gray-700 pr-4">
                <div className="text-3xl sm:text-5xl font-bold text-green-500 mb-2">
                  {totalFootprint.toFixed(2)}
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  kg CO₂/Month
                </div>
              </div>

              {/* Yearly Impact */}
              <div className="text-center pl-4">
                <div className="text-3xl sm:text-5xl font-bold text-blue-500 mb-2">
                  {yearlyFootprint.toFixed(2)}
                </div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Tons CO₂/Year
                </div>
              </div>
            </div>

            {/* Status Message */}
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg w-full">
              <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-300 text-center">
                {yearlyFootprint > 10 
                  ? 'Your carbon footprint is above average. Consider our recommendations below.'
                  : 'Great job! Your footprint is below average. Check out ways to reduce it further.'}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-8">
            Renewable Energy Recommendations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {getRecommendations().map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{rec.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {rec.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                  {rec.description}
                </p>
                <div className="text-xs sm:text-sm text-green-500 dark:text-green-400 font-semibold mb-2">
                  {rec.impact}
                </div>
                <button className="text-xs sm:text-sm text-blue-500 hover:text-blue-600 font-medium">
                  {rec.action} →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarbonCalculator;