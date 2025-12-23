import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Apple, Monitor, Shield, Zap, Lock, Copy, Check, Github } from 'lucide-react';

const SlouchGhost = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [copiedMac, setCopiedMac] = useState(false);
  const [copiedWin, setCopiedWin] = useState(false);

  const macCommand = 'brew install --cask besaliu/tap/slouch-ghost';
  const winCommand = 'Coming soon';

  const copyToClipboard = (text, platform) => {
    navigator.clipboard.writeText(text);
    if (platform === 'mac') {
      setCopiedMac(true);
      setTimeout(() => setCopiedMac(false), 2000);
    } else {
      setCopiedWin(true);
      setTimeout(() => setCopiedWin(false), 2000);
    }
  };

  const features = [
    {
      icon: Shield,
      title: "100% Private",
      description: "All processing happens on your device. No data leaves your computer—no cloud, no servers, no tracking."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time pose detection using on-device AI. Runs locally on your CPU/GPU for instant feedback."
    },
    {
      icon: Lock,
      title: "Fully Offline",
      description: "Works completely offline after install. Camera feed never sent anywhere—processed locally only."
    }
  ];

  return (
    <section id="slouch-ghost" className="py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-blue blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-purple blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-7xl"
            >
              👻
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Slouch Ghost
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            An intelligent posture monitor that quietly watches over your desk.
            Get real-time alerts when you slouch, all while keeping your privacy intact.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-cyber-blue font-mono"
          >
            Private. Fast. Local. No Cloud. No Tracking.
          </motion.p>
        </motion.div>

        {/* Install Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-4 text-center">Install with Homebrew</h3>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Install with a single command. Open your terminal and paste the command below.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* macOS Install */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="cyber-card group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-blue/30 to-cyber-purple/30 flex items-center justify-center">
                  <Apple className="w-6 h-6 text-cyber-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">macOS</h4>
                  <p className="text-sm text-gray-400">Apple Silicon & Intel</p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-500 font-mono">Terminal</span>
                </div>
                <div className="bg-dark-bg/80 rounded-lg p-4 font-mono text-sm border border-cyber-blue/20 group-hover:border-cyber-blue/40 transition-colors">
                  <code className="text-cyber-green break-all">{macCommand}</code>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard(macCommand, 'mac')}
                  className="absolute top-8 right-2 p-2 bg-cyber-blue/20 hover:bg-cyber-blue/40 rounded-lg transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedMac ? (
                    <Check className="w-4 h-4 text-cyber-green" />
                  ) : (
                    <Copy className="w-4 h-4 text-cyber-blue" />
                  )}
                </motion.button>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Requires <a href="https://brew.sh" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:underline">Homebrew</a>. Installs to /Applications automatically.
              </p>
            </motion.div>

            {/* Windows Install */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="cyber-card group opacity-60"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-500/30 to-gray-600/30 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold text-gray-400">Windows</h4>
                    <span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded text-amber-400 text-xs font-semibold">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Windows 10 & 11</p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-gray-600" />
                  <span className="text-xs text-gray-600 font-mono">PowerShell</span>
                </div>
                <div className="bg-dark-bg/80 rounded-lg p-4 font-mono text-sm border border-gray-600/20">
                  <code className="text-gray-500 break-all">{winCommand}</code>
                </div>
              </div>

              <p className="text-xs text-gray-600 mt-3">
                Windows build in development.
              </p>
            </motion.div>
          </div>

          {/* Homebrew Install Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="bg-dark-bg/50 rounded-lg p-4 border border-cyber-blue/10">
              <p className="text-sm text-gray-400 mb-2">
                <span className="text-gray-300 font-medium">Don't have Homebrew?</span> Install it first with:
              </p>
              <code className="text-xs text-cyber-green font-mono break-all">
                /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
              </code>
              <p className="text-xs text-gray-500 mt-2">
                Learn more at <a href="https://brew.sh" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:underline">brew.sh</a>
              </p>
            </div>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-6"
          >
            <a
              href="https://github.com/besaliu/Slouch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-cyber-blue transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View source on GitHub</span>
            </a>
          </motion.div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20 cyber-card"
        >
          <h3 className="text-2xl font-bold text-white mb-6">How It Works</h3>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              <span className="text-cyber-green font-semibold">Slouch Ghost</span> uses <span className="text-cyber-blue font-semibold">MediaPipe Lite</span>,
              a lightweight AI model that runs entirely on your computer. Your webcam feed is processed locally using machine learning
              to detect your body's position and calculate your posture ratio.
            </p>

            <div className="my-6 grid md:grid-cols-3 gap-4">
              <div className="bg-dark-bg/50 rounded-lg p-4 border border-cyber-blue/20">
                <div className="text-2xl font-bold text-cyber-blue mb-2">1</div>
                <p className="text-sm">Camera feed processed locally on your device</p>
              </div>
              <div className="bg-dark-bg/50 rounded-lg p-4 border border-cyber-blue/20">
                <div className="text-2xl font-bold text-cyber-green mb-2">2</div>
                <p className="text-sm">AI model bundled in app—no cloud calls</p>
              </div>
              <div className="bg-dark-bg/50 rounded-lg p-4 border border-cyber-blue/20">
                <div className="text-2xl font-bold text-cyber-pink mb-2">3</div>
                <p className="text-sm">Alerts triggered locally when slouching detected</p>
              </div>
            </div>

            <p>
              Once you calibrate your ideal posture, the app monitors in the background using a zoom-invariant slouch ratio
              (normalized by shoulder width). When you slouch for 5+ seconds, you'll hear an audio chime and get a system notification—
              <span className="text-cyber-blue font-semibold"> all on your device, with zero data transmission</span>.
            </p>

            <p className="pt-4 border-t border-cyber-blue/20">
              <span className="text-cyber-blue font-semibold">Privacy guaranteed:</span> Your camera feed is never recorded,
              sent to servers, or stored anywhere. The model runs offline. Your settings are saved locally.
              This is a truly private posture monitor that works the way software should—with your data staying yours.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Key Features</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="cyber-card text-center group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyber-blue/30 to-cyber-purple/30 flex items-center justify-center group-hover:from-cyber-blue/50 group-hover:to-cyber-purple/50 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-cyber-blue" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Notice */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="cyber-card bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 text-center"
        >
          <p className="text-gray-300">
            <span className="text-cyber-green font-semibold">Open Source & Private by Design</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Slouch Ghost is fully open-source under the MIT license. Your camera access is used only for local pose detection.
            No data collection, no analytics, no accounts required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SlouchGhost;
