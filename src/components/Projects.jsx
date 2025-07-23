import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Brain, Calendar, Target, Database } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Canvas to Notion Integration",
      description: "Full-stack web application and Chrome extension that streamlines the synchronization of student Canvas assignments into customizable Notion templates.",
      period: "March 2025 – June 2025",
      icon: Calendar,
      image: "/api/placeholder/400/300",
      highlights: [
        "Integrated Canvas and Notion APIs for real-time updates",
        "Implemented OAuth authentication with Firebase",
        "Custom API endpoints for data transformation",
        "Seamless user experience for students"
      ],
      technologies: ["React", "Node.js", "Canvas API", "Notion API", "Firebase", "OAuth", "Chrome Extension"],
      github: "#",
      demo: "https://canvastonotion.io/",
      impact: "Student Productivity Tool",
      color: "from-cyber-blue to-cyber-purple"
    },
    {
      title: "Full-Stack Client Portal",
      description: "Comprehensive client onboarding and management system built for Beyond Computer LLC, resulting in 200% increase in client acquisitions.",
      period: "Current Project",
      icon: Target,
      image: "/api/placeholder/400/300",
      highlights: [
        "200% increase in client acquisitions",
        "Microsoft Graph API integration",
        "Automated onboarding workflows",
        "Modern responsive design"
      ],
      technologies: ["React", "Node.js", "Microsoft Graph API", "Express", "MongoDB", "Azure"],
      github: "#",
      demo: "www.beyondcomputer.com",
      impact: "200% Growth",
      color: "from-cyber-pink to-cyber-purple"
    },
    {
      title: "AI-Powered Email Response Assistant",
      description: "Fine-tuned a 4B parameter Gemma model using Unsloth and LoRA techniques on 500+ email-response training pairs, achieving 95% personality consistency across diverse business communication scenarios.",
      period: "June 2025 – July 2025",
      icon: Brain,
      image: "/api/placeholder/400/300",
      highlights: [
        "95% personality consistency achieved",
        "73% reduction in email response drafting time",
        "100+ email responses processed daily",
        "$200+/month cost savings vs cloud alternatives"
      ],
      technologies: ["Python", "Gemma Model", "Unsloth", "LoRA", "Machine Learning", "NLP", "JSON", "Tokenization"],
      github: "#",
      demo: "#",
      impact: "95% Consistency",
      color: "from-cyber-green to-cyber-blue"
    },
    {
      title: "Data Analytics Pipeline",
      description: "Scalable data collection and analysis system with cookie and IP tracking, improving user behavior analysis efficiency by 30%.",
      period: "Research Project",
      icon: Database,
      image: "/api/placeholder/400/300",
      highlights: [
        "30% efficiency improvement",
        "Google Cloud Natural Language API",
        "Multi-cohort data analysis",
        "Privacy-focused design"
      ],
      technologies: ["Python", "Google Cloud", "Natural Language API", "Data Pipeline", "Analytics"],
      github: "#",
      demo: "#",
      impact: "30% Efficiency",
      color: "from-cyber-purple to-cyber-pink"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions that showcase technical expertise and real-world impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group cyber-card hover:border-cyber-blue/40 transition-all duration-500 overflow-hidden"
            >
              {/* Project Header */}
              <div className="relative">
                <div className={`h-48 bg-gradient-to-br ${project.color} rounded-lg mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <project.icon className="w-16 h-16 text-white relative z-10" />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {project.impact}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.period}</p>
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-dark-bg/50 backdrop-blur-lg border border-gray-600 rounded-lg flex items-center justify-center hover:border-cyber-blue/50 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-gray-400 hover:text-cyber-blue transition-colors" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target={project.demo !== "#" ? "_blank" : "_self"}
                      rel={project.demo !== "#" ? "noopener noreferrer" : ""}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-dark-bg/50 backdrop-blur-lg border border-gray-600 rounded-lg flex items-center justify-center hover:border-cyber-blue/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-cyber-blue transition-colors" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyber-blue mb-3">Key Achievements</h4>
                  {project.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.2 + hIndex * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div>
                      <span className="text-gray-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-cyber-blue mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <motion.span
                        key={tIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.2 + tIndex * 0.05 }}
                        className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-cyber-blue text-xs font-medium hover:bg-cyber-blue/20 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="cyber-card bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10">
            <h3 className="text-2xl font-bold gradient-text mb-6">Project Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-green mb-2">200%</div>
                <div className="text-gray-400 text-sm">Client Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-blue mb-2">95%</div>
                <div className="text-gray-400 text-sm">AI Consistency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-purple mb-2">500+</div>
                <div className="text-gray-400 text-sm">Training Pairs</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 