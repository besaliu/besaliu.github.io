import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Cog, Palette } from 'lucide-react';

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
        { name: "Python", level: 95 },
        { name: "C/C++", level: 80 },
        { name: "Java", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Bash", level: 80 }
      ]
    },
    {
      title: "AI/ML & Deep Learning",
      icon: Cog,
      color: "text-cyber-purple",
      skills: [
        { name: "LangChain", level: 90 },
        { name: "LangGraph", level: 90 },
        { name: "Google ADK", level: 90 },
        { name: "PyTorch", level: 80 },
        { name: "LLM Fine-tuning (LoRA)", level: 85 },
        { name: "RAG", level: 85 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Database,
      color: "text-cyber-green",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Node.js", level: 90 },
        { name: "REST API Design", level: 95 },
        { name: "PostgreSQL (SQL)", level: 85 },
        { name: "Pydantic", level: 85 }
      ]
    },
    {
      title: "Frontend / Web",
      icon: Palette,
      color: "text-cyber-pink",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "TailwindCSS", level: 90 },
        { name: "Server-Sent Events (SSE)", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-cyber-blue",
      skills: [
        { name: "GCP", level: 90 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 95 },
        { name: "GitHub Actions", level: 85 },
        { name: "CI/CD", level: 85 },
        { name: "Prometheus", level: 80 }
      ]
    }
  ];

  const certifications = [
    "Nebius AI Hackathon 2026 Finalist"
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
                "Agentic AI Systems",
                "LLM Orchestration (ADK/LangGraph)",
                "Prompt Engineering & RAG",
                "Model Fine-tuning (LoRA)",
                "Full-Stack Application Development",
                "Production AI Evaluation Pipelines"
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
                "Agentic Workflow Design",
                "Test-Driven Evaluation",
                "REST API Design & Integration",
                "CI/CD Pipeline Integration",
                "MCP Server Development",
                "Responsive Web Design"
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
          <h3 className="text-2xl font-bold gradient-text mb-6">Recognition</h3>
          <p className="text-gray-400 mb-6">Competing and building at the cutting edge of AI</p>
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