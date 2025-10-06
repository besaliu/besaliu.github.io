import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Benjamin Liu";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const stats = [
    { value: '18%', label: 'Voter Conversion Lift' },
    { value: '1M+', label: 'Interactions Processed' },
    { value: '200%', label: 'Client Growth' },
    { value: '95%', label: 'AI Consistency' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/besaliu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/besaliu', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:besaliu@ucsc.edu', label: 'Email' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        
        {/* Floating Profile Picture */}
        <motion.div
          className="absolute top-20 right-20 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            className="relative"
            animate={{ 
              y: [-10, 10, -10],
              rotate: [0, 1, -1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-cyber-blue/30 shadow-2xl backdrop-blur-sm bg-dark-card/20 p-2">
              <img 
                src="/profile.png" 
                alt="Benjamin Liu" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 mix-blend-overlay"></div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-20 blur-lg"></div>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="gradient-text font-mono">
              {displayText}
              <span className="animate-blink border-r-2 border-cyber-blue ml-1"></span>
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="neon-text text-cyber-blue">Full-Stack Developer</span> & 
            <span className="neon-text text-cyber-pink ml-2">AI/ML Engineer</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            CS Student at UCSC building production AI agents and full-stack apps on GCP and React. 
            Recently shipped systems processing <span className="text-cyber-green font-semibold">1M+ interactions</span> and enabling 
            <span className="text-cyber-blue font-semibold"> 18% conversion lift</span>.
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="cyber-card text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-xl font-semibold text-white shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              <span>View My Work</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="/Ben's Resume.pdf"
              download="Benjamin_Liu_Resume.pdf"
              className="group px-8 py-4 border-2 border-cyber-blue/50 rounded-xl font-semibold text-cyber-blue hover:bg-cyber-blue/10 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-card/50 backdrop-blur-lg border border-cyber-blue/20 rounded-xl flex items-center justify-center hover:border-cyber-blue/40 hover:bg-cyber-blue/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-cyber-blue" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cyber-blue/50 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 