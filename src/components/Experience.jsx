import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, TrendingUp, Shield, Database, Users, Cloud, Activity, Brain } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "Keysight Technologies",
      location: "Remote",
      period: "January 2026 – Present",
      icon: Brain,
      highlights: [
        {
          icon: Database,
          text: "Developed a Python MCP server exposing 45 tools across Keysight's KS8500B platform, allowing the entire test automation platform to be managed by an AI agent.",
          impact: "45 MCP Tools"
        },
        {
          icon: Activity,
          text: "Replaced multi-step manual test workflows with a Google ADK agentic system that executes tests from natural language, cutting average test setup from 30+ minutes to under 5.",
          impact: "6x Faster Setup"
        },
        {
          icon: Shield,
          text: "Designed a parametrized evaluation framework (pytest) measuring model accuracy, tool selection performance, and latency, achieving 93% accuracy across 30+ workflow scenarios.",
          impact: "93% Accuracy"
        }
      ],
      tags: ["Python", "Google ADK", "MCP", "pytest", "Pydantic", "LLM APIs"]
    },
    {
      title: "Software Engineer Fellow (Contract)",
      company: "Movement Labs",
      location: "Remote",
      period: "September 2025 – December 2025",
      icon: Cloud,
      highlights: [
        {
          icon: Activity,
          text: "Deployed a Google ADK based agent on GCP Cloud Run integrated with a messaging platform, handling 500+ daily conversations with persistent session state.",
          impact: "500+ Daily Conversations"
        },
        {
          icon: Shield,
          text: "Created a 49-case automated test suite integrated into CI/CD pipelines to gate every deployment, catching 12+ regressions before production and ensuring system robustness.",
          impact: "12+ Regressions Caught"
        },
        {
          icon: Users,
          text: "Consolidated 4 manual workflows into a single intelligent agent for campaign creation and SMS deployment, reducing setup time from 45 minutes to under 10.",
          impact: "78% Faster Setup"
        }
      ],
      tags: ["Google ADK", "GCP", "Cloud Run", "Python", "CI/CD", "Testing"]
    },
    {
      title: "Software Engineer Intern",
      company: "Beyond Computer LLC",
      location: "Petaluma, CA",
      period: "June 2025 – September 2025",
      icon: Briefcase,
      highlights: [
        {
          icon: TrendingUp,
          text: "Redesigned the company website end-to-end (React, Node.js) with responsive UI, delivering a product that increased monthly lead generation by 100%.",
          impact: "100% More Leads"
        },
        {
          icon: Shield,
          text: "Built REST API integrations with Datto RMM for automated device management, documenting findings and processes while saving 10+ hours/month on operations.",
          impact: "10+ hrs/mo Saved"
        }
      ],
      tags: ["React", "Node.js", "Datto RMM", "REST APIs"]
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
                <div className="text-3xl font-bold text-cyber-green mb-2">93%</div>
                <div className="text-gray-400 text-sm">Tool Routing Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-blue mb-2">500+</div>
                <div className="text-gray-400 text-sm">Daily Conversations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-purple mb-2">6x</div>
                <div className="text-gray-400 text-sm">Faster Test Setup</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-pink mb-2">100%</div>
                <div className="text-gray-400 text-sm">More Inbound Leads</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 