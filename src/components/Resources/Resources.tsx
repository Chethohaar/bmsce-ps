import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Lightbulb, GraduationCap, Briefcase, Leaf } from 'lucide-react';

export const Resources = () => {
  const roadmapSteps = [
    {
      id: 1,
      title: "Fundamentals",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Start with basic understanding of renewable energy and environmental science",
      resources: [
        {
          name: "Introduction to Renewable Energy (Coursera)",
          link: "https://www.coursera.org/learn/renewable-energy"
        },
        {
          name: "Environmental Science: Earth and Energy (edX)",
          link: "https://www.edx.org/learn/environmental-science"
        }
      ]
    },
    {
      id: 2,
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      description: "Learn relevant technical skills and tools used in green tech",
      resources: [
        {
          name: "Solar Energy Engineering (MIT OpenCourseWare)",
          link: "https://ocw.mit.edu/courses/mechanical-engineering/2-627-fundamentals-of-photovoltaics-fall-2013/"
        },
        {
          name: "Energy Systems Engineering (Stanford Online)",
          link: "https://online.stanford.edu/courses/cee-263f-energy-systems-i-fundamentals"
        }
      ]
    },
    {
      id: 3,
      title: "Specialization",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "Choose your focus area: Solar, Wind, Hydro, or Energy Storage",
      resources: [
        {
          name: "Wind Energy Technology (DTU Online)",
          link: "https://www.coursera.org/learn/wind-energy"
        },
        {
          name: "Energy Storage Technologies (TU Delft)",
          link: "https://www.edx.org/learn/engineering/delft-university-of-technology-energy-storage"
        }
      ]
    },
    {
      id: 4,
      title: "Certification",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Get certified in your chosen specialization",
      resources: [
        {
          name: "NABCEP Certification (Solar)",
          link: "https://www.nabcep.org/"
        },
        {
          name: "Renewable Energy Professional Certification",
          link: "https://www.aeecenter.org/certifications/rep"
        }
      ]
    },
    {
      id: 5,
      title: "Industry Experience",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Gain practical experience through internships and projects",
      resources: [
        {
          name: "Clean Energy Jobs Board",
          link: "https://www.cleanenergyjobboard.com/"
        },
        {
          name: "Green Energy Projects Network",
          link: "https://www.cleanenergyprojects.com/"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Leaf className="w-16 h-16 mx-auto text-green-500 mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500 bg-clip-text text-transparent mb-4">
              Green Tech Career Roadmap
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">
              Your journey to becoming a green tech professional starts here
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Connection Line */}
              {index !== roadmapSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-24 bg-gradient-to-b from-green-500 to-blue-500 opacity-20" />
              )}
              
              <div className="relative flex items-start space-x-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-600 dark:text-green-400">
                      Recommended Resources:
                    </h4>
                    {step.resources.map((resource, idx) => (
                      <motion.a
                        key={idx}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        → {resource.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 