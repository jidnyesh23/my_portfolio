import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaJs, FaNode, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { portfolioData } from '../data/portfolio';

const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.database,
    ...skills.tools,
  ];

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      'React': React.createElement(FaReact, { className: "text-blue-500" }),
      'JavaScript': React.createElement(FaJs, { className: "text-yellow-500" }),
      'Tailwind CSS': React.createElement(SiTailwindcss, { className: "text-teal-500" }),
      'Bootstrap': React.createElement(SiBootstrap, { className: "text-purple-600" }),
      'Node.js': React.createElement(FaNode, { className: "text-green-600" }),
      'Express.js': React.createElement(SiExpress, { className: "text-gray-600" }),
      'Java': React.createElement(FaJava, { className: "text-red-600" }),
      'MongoDB': React.createElement(SiMongodb, { className: "text-green-500" }),
      'SQL': React.createElement(SiMysql, { className: "text-blue-600" }),
      'Git': React.createElement(FaGitAlt, { className: "text-orange-600" }),
      'GitHub': React.createElement(FaGitAlt, { className: "text-gray-800" }),
      'GitLab': React.createElement(FaGitAlt, { className: "text-orange-500" }),
    };
    return iconMap[skillName] || React.createElement(FaDatabase, { className: "text-gray-500" });
  };

  const categories = [
    { key: 'frontend', label: 'Frontend', skills: skills.frontend },
    { key: 'backend', label: 'Backend', skills: skills.backend },
    { key: 'database', label: 'Database', skills: skills.database },
    { key: 'tools', label: 'Tools', skills: skills.tools },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };



  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {categories
              .find((cat) => cat.key === activeCategory)
              ?.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">
                        {getSkillIcon(skill.name)}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}
                    </span>
                  </div>

                    {/* <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          className="h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div> */}
                </motion.div>
              ))}
          </motion.div>

          {/* All Skills Overview */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Technology Stack Overview
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {allSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.1}}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-lg">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;