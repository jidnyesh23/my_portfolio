import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaAward, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Experience: React.FC = () => {
  const { certifications } = portfolioData;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const achievements = [
    {
      title: "Genie Badge",
      description: "Earned a Badge from Infosys Springboard for successfully completing multiple assessments and demonstrating proficiency across various modules on the platform",
      icon: React.createElement(FaAward, { className: "text-gray-500" }),
      color: "from-gray-400 to-gray-500",
      link: "https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=HG7V34BITK" // Add your link here
    },
    {
      title: "Academic Excellence",
      description: "Maintaining consistent academic performance with 7.4 SGPA in Masters and 7.6 CGPA in Bachelor's",
      icon: React.createElement(FaAward, { className: "text-yellow-500" }),
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Project Innovation",
      description: "Developed AI-powered solutions and modern web applications using cutting-edge technologies",
      icon: React.createElement(FaCertificate, { className: "text-blue-500" }),
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Continuous Learning",
      description: "Completed multiple industry certifications from leading tech companies like TCS and Infosys",
      icon: React.createElement(FaCertificate, { className: "text-green-500" }),
      color: "from-green-400 to-teal-500"
    },
  ];
  

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Experience & <span className="gradient-text">Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey of continuous learning and professional development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <FaAward className="text-yellow-500" />
                Key Achievements
              </h3>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-blue-500"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                        <div className="text-white text-xl">
                          {achievement.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <FaCertificate className="text-blue-500" />
                Certifications
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <FaCertificate className="text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {cert.title}
                            </h4>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <FaCalendarAlt />
                            {cert.date}
                          </div>
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 text-sm"
                          >
                            <FaExternalLinkAlt />
                            View Certificate
                          </a>
                        </div>
                      </div>

                      {/* Progress bar animation */}
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: '100%' } : {}}
                          transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                          className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                variants={cardVariants}
                className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center"
              >
                <h4 className="text-xl font-semibold mb-2">Ready for New Challenges</h4>
                <p className="mb-4 opacity-90">
                  Always eager to learn new technologies and take on exciting projects
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Let's Work Together
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline Visualization */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Learning Journey Timeline
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              
              <div className="space-y-12">
                {[
                  { year: '2021', event: 'Started Bachelor of Computer Science', side: 'left' },
                  { year: '2024', event: 'Completed Multiple Certifications', side: 'right' },
                  { year: '2024', event: 'Started Masters in Computer Application', side: 'left' },
                  { year: '2025', event: 'Continuing to Build Amazing Projects', side: 'right' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`flex items-center ${item.side === 'right' ? 'flex-row-reverse' : ''}`}
                  >
                    <div className={`w-5/12 ${item.side === 'right' ? 'text-right' : ''}`}>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg">
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">
                          {item.year}
                        </div>
                        <div className="text-gray-700 dark:text-gray-300">
                          {item.event}
                        </div>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                    </div>
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;