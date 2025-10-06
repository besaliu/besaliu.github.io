import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Cog, TestTube, Palette } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "text-cyber-blue",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "Go", level: 75 },
        { name: "SQL", level: 90 }
      ]
    },
    {
      title: "Frontend",
      icon: Palette,
      color: "text-cyber-pink",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TailwindCSS", level: 90 },
        { name: "Redux", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "SASS/SCSS", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: Database,
      color: "text-cyber-green",
      skills: [
        { name: "Node.js/Express", level: 90 },
        { name: "Django/Flask", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "RESTful APIs", level: 95 },
        { name: "GraphQL", level: 85 },
        { name: "gRPC", level: 75 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-cyber-purple",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 90 },
        { name: "Redis", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-cyber-blue",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 85 },
        { name: "Google Cloud Platform", level: 85 },
        { name: "Azure", level: 75 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "GitHub Actions (CI/CD)", level: 85 }
      ]
    },
    {
      title: "Testing & Tools",
      icon: TestTube,
      color: "text-cyber-green",
      skills: [
        { name: "Jest/Cypress", level: 85 },
        { name: "PyTest", level: 80 },
        { name: "Selenium", level: 75 },
        { name: "Postman", level: 90 },
        { name: "Git/GitHub", level: 95 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  const certifications = [
    "AWS Cloud Practitioner (In Progress)",
    "Google Cloud Associate (Planned)",
    "MongoDB Developer Associate (Planned)"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise across the full technology stack, from frontend frameworks 
            to cloud infrastructure and AI/ML technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="cyber-card hover:border-cyber-blue/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-xl flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className={`text-xs font-bold ${category.color}`}>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-bg/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${
                          category.color.includes('blue') ? 'from-cyber-blue to-cyber-purple' :
                          category.color.includes('pink') ? 'from-cyber-pink to-cyber-purple' :
                          category.color.includes('green') ? 'from-cyber-green to-cyber-blue' :
                          'from-cyber-purple to-cyber-pink'
                        }`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="cyber-card bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10">
            <h3 className="text-2xl font-bold gradient-text mb-6">Specializations</h3>
            <div className="space-y-4">
              {[
                "Full-Stack Web Development",
                "Machine Learning & AI",
                "Cloud Architecture & DevOps",
                "API Design & Integration",
                "Data Analysis & Visualization",
                "Security & Compliance"
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                  <span className="text-gray-300">{spec}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="cyber-card bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10">
            <h3 className="text-2xl font-bold gradient-text mb-6">Methodologies</h3>
            <div className="space-y-4">
              {[
                "Agile/Scrum Development",
                "Test-Driven Development (TDD)",
                "Microservices Architecture",
                "RESTful API Design",
                "Responsive Web Design",
                "Accessibility (a11y) Standards"
              ].map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                  <span className="text-gray-300">{method}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="cyber-card text-center"
        >
          <h3 className="text-2xl font-bold gradient-text mb-6">Certifications & Learning</h3>
          <p className="text-gray-400 mb-6">Continuously expanding knowledge through industry certifications</p>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-cyber-purple/20 to-cyber-pink/20 border border-cyber-purple/30 rounded-full text-cyber-purple font-medium"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 