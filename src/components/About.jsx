import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Rocket, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const highlights = [
    {
      icon: Brain,
      title: "AI Engineer",
      description: "Shipping intelligent agents with Google ADK, LangGraph, and LLM APIs at enterprise scale",
      color: "text-cyber-green"
    },
    {
      icon: Award,
      title: "Hackathon Finalist",
      description: "Nebius AI Hackathon 2026 — built autonomous NOC agent remediating DDoS attacks in under 15 seconds",
      color: "text-cyber-purple"
    },
    {
      icon: Code,
      title: "Software Engineer",
      description: "Python, TypeScript, React, FastAPI — shipping production systems with real business impact",
      color: "text-cyber-blue"
    },
    {
      icon: Rocket,
      title: "Automation Specialist",
      description: "Consolidated manual workflows into AI agents, cutting setup times by 80%+",
      color: "text-cyber-pink"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AI engineer who has built and shipped AI-powered automation for two companies, integrating
            intelligent agents and task automation pipelines into production systems.
          </p>
        </motion.div>

                 <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
           {/* Personal Story */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={inView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="space-y-6"
           >
             {/* Mobile Profile Picture */}
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={inView ? { opacity: 1, scale: 1 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="lg:hidden mb-6 flex justify-center"
             >
               <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-cyber-blue/30 shadow-xl bg-dark-card/20 p-1">
                 <img 
                   src="/profile.png" 
                   alt="Benjamin Liu" 
                   className="w-full h-full object-cover rounded-xl"
                 />
               </div>
             </motion.div>
             
             <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              Computer Science student at UC Santa Cruz (graduating June 2026) with a track record of
              shipping AI-powered automation into production at multiple companies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently an AI Engineer Intern at Keysight Technologies, where I built a Python MCP server
              exposing 45 tools and a Google ADK agentic system that replaces multi-step manual test
              workflows with natural language — cutting setup from 30+ minutes to under 5. Previously, I
              deployed a Google ADK agent on GCP Cloud Run at Movement Labs handling 500+ daily conversations,
              and redesigned Beyond Computer's website end-to-end to double their inbound leads.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I also architected an autonomous NOC agent that detects and remediates network incidents in
              under 15 seconds with zero human intervention using LangGraph and a 12-container stack. I'm
              driven by building intelligent systems that automate away manual toil.
            </p>
          </motion.div>

        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="cyber-card text-center group cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-bg/50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Educational Background */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 cyber-card"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">Education</h3>
            <div className="text-xl font-semibold text-white mb-2">
              University of California, Santa Cruz
            </div>
            <div className="text-cyber-blue mb-2">
              B.S. in Computer Science — GPA: 3.6
            </div>
            <div className="text-gray-400">
              Aug. 2022 – June 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 