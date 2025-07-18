import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, TrendingUp, Shield, Database, Users } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "Software Engineer Intern & Network Security Engineer Intern",
      company: "Beyond Computer LLC",
      location: "Petaluma, CA",
      period: "June 2025 – Present",
      icon: Briefcase,
      highlights: [
        {
          icon: TrendingUp,
          text: "Engineered a full-stack onboarding and website modernization solution (React, Node.js, Microsoft Graph API), driving a 200% increase in client acquisitions",
          impact: "200% Growth"
        },
        {
          icon: Shield,
          text: "Automated device management with PowerShell and Datto RMM API, saving 10+ hours/month and enhancing security compliance",
          impact: "10+ hrs/month saved"
        },
        {
          icon: Database,
          text: "Reduced potential data breach impact by 10% through proactive monitoring and rapid incident response, aligning with industry benchmarks",
          impact: "10% Risk Reduction"
        }
      ],
      tags: ["React", "Node.js", "Microsoft Graph API", "PowerShell", "Datto RMM", "Security"]
    },
    {
      title: "Data Collection Researcher",
      company: "University of California, Santa Cruz",
      location: "Santa Cruz, CA",
      period: "August 2022 – December 2023",
      icon: Database,
      highlights: [
        {
          icon: Users,
          text: "Developed Python-based analytical tools utilizing Google Cloud Natural Language API to evaluate data literacy trends across diverse age cohorts",
          impact: "Multi-cohort Analysis"
        },
        {
          icon: TrendingUp,
          text: "Designed and implemented a scalable data collection pipeline with cookie and IP tracking, increasing user behavior analysis efficiency by 30%",
          impact: "30% Efficiency Gain"
        },
        {
          icon: Users,
          text: "Presented original research on technology and ethics to 40+ academic and industry attendees, sparking discussion and raising awareness of data privacy issues",
          impact: "40+ Attendees"
        }
      ],
      tags: ["Python", "Google Cloud", "Natural Language API", "Data Analytics", "Research"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building impactful solutions and driving measurable results across different domains
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="cyber-card hover:border-cyber-blue/40 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-xl flex items-center justify-center">
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-cyber-blue font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-gray-400 mb-2">{exp.location}</div>
                  <div className="text-gray-500 mb-4">{exp.period}</div>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-cyber-blue text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="lg:w-2/3 space-y-6">
                  {exp.highlights.map((highlight, highlightIndex) => (
                    <motion.div
                      key={highlightIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + highlightIndex * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-dark-bg/30 rounded-lg border border-gray-700/30 hover:border-cyber-blue/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <highlight.icon className="w-5 h-5 text-cyber-green" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 leading-relaxed mb-2">{highlight.text}</p>
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 rounded-full">
                          <span className="text-cyber-green font-semibold text-sm">{highlight.impact}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="cyber-card bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10">
            <h3 className="text-2xl font-bold gradient-text mb-6">Combined Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-green mb-2">200%</div>
                <div className="text-gray-400 text-sm">Client Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-blue mb-2">10+</div>
                <div className="text-gray-400 text-sm">Hours Saved/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-purple mb-2">30%</div>
                <div className="text-gray-400 text-sm">Efficiency Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-pink mb-2">40+</div>
                <div className="text-gray-400 text-sm">Research Attendees</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 