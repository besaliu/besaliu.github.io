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
      icon: Rocket,
      title: "Client Growth Expert",
      description: "Engineered solutions that drove 200% increase in client acquisitions",
      color: "text-cyber-green"
    },
    {
      icon: Brain,
      title: "AI/ML Specialist",
      description: "Fine-tuned 4B parameter AI model achieving 95% personality consistency in email responses",
      color: "text-cyber-purple"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Expert in React, Node.js, Python, and modern cloud technologies",
      color: "text-cyber-blue"
    },
    {
      icon: Award,
      title: "Research Pioneer",
      description: "Published original research on data literacy and technology ethics",
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
            I'm a passionate Computer Science student at UCSC with a focus on building 
            innovative solutions that make a real impact. From increasing client growth 
            by 200% to developing cutting-edge AI models, I thrive on solving complex challenges.
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
              As a Computer Science student at UC Santa Cruz, I've built a track record of delivering 
              measurable impact across AI/ML, full-stack development, and cloud infrastructure. My journey 
              has taken me from research labs to production systems processing millions of interactions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently serving as a Software Engineering Fellow at Movement Labs, I architect and deploy 
              autonomous AI agent systems on Google Cloud Platform, driving 18% voter conversion increases 
              and processing 1M+ interactions. Previously, I engineered full-stack solutions at Beyond 
              Computer LLC that resulted in 200% client growth, and developed AI-powered investment tools 
              at RWA Inc. that reduced document review time by 60%.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise spans the full technology stack—from fine-tuning 4B parameter AI models to 
              building scalable cloud architectures. I'm passionate about creating solutions that deliver 
              real business value, whether it's automating workflows, optimizing conversion rates, or 
              enabling data-driven decision making at scale.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="cyber-card"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Client Growth Impact</span>
                <span className="text-cyber-green font-bold text-xl">+200%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">AI Model Consistency</span>
                <span className="text-cyber-blue font-bold text-xl">95%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Email Response Time Saved</span>
                <span className="text-cyber-purple font-bold text-xl">73%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Data Breach Reduction</span>
                <span className="text-cyber-pink font-bold text-xl">10%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Research Presentations</span>
                <span className="text-cyber-green font-bold text-xl">40+ attendees</span>
              </div>
            </div>
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
              B.S. in Computer Science, Minor in Technology and Information Management
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