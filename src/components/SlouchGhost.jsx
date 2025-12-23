import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Apple, Monitor, Shield, Zap, Lock } from 'lucide-react';

const SlouchGhost = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
      description: "Works completely offline after first launch. Camera feed never sent anywhere—processed locally only."
    }
  ];

  const downloads = [
    {
      platform: "macOS",
      icon: Apple,
      filename: "Slouch Ghost_0.1.0_aarch64.dmg",
      description: "Apple Silicon & Intel",
      downloadUrl: "https://github.com/besaliu/Slouch/releases/download/v0.1.0/Slouch Ghost.dmg",
      available: true
    },
    {
      platform: "Windows",
      icon: Monitor,
      filename: "Slouch Ghost_0.1.0_x64-setup.exe",
      description: "Windows 10 & 11",
      downloadUrl: "https://github.com/besaliu/Slouch/releases/download/v0.1.0/Slouch Ghost_0.1.0_x64-setup.exe",
      available: false // Will be available when built on Windows
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

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
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
                <div className="text-2xl font-bold text-cyber-blue mb-2">📹</div>
                <p className="text-sm">Camera feed processed locally on your device</p>
              </div>
              <div className="bg-dark-bg/50 rounded-lg p-4 border border-cyber-blue/20">
                <div className="text-2xl font-bold text-cyber-green mb-2">🧠</div>
                <p className="text-sm">AI model bundled in app—no cloud calls</p>
              </div>
              <div className="bg-dark-bg/50 rounded-lg p-4 border border-cyber-blue/20">
                <div className="text-2xl font-bold text-cyber-pink mb-2">🔔</div>
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

        {/* Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-4 text-center">Download Now</h3>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Get started in seconds. Choose your platform and download the latest version.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {downloads.map((download, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={download.available ? { y: -5 } : {}}
                className={`cyber-card group relative overflow-hidden ${!download.available && 'opacity-60'}`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 opacity-0 ${download.available && 'group-hover:opacity-100'} transition-opacity duration-300`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-lg bg-dark-bg/50 border flex items-center justify-center transition-all duration-300 ${download.available ? 'border-cyber-blue/30 group-hover:border-cyber-blue/60' : 'border-gray-500/30'}`}>
                      <download.icon className={`w-7 h-7 transition-colors duration-300 ${download.available ? 'text-cyber-blue group-hover:text-cyber-green' : 'text-gray-500'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className={`text-2xl font-bold transition-colors ${download.available ? 'text-white group-hover:text-cyber-blue' : 'text-gray-500'}`}>
                          {download.platform}
                        </h4>
                        {!download.available && (
                          <span className="px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded text-amber-400 text-xs font-semibold">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{download.description}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 font-mono mb-4 mt-auto">
                    {download.filename}
                  </p>

                  {download.available ? (
                    <motion.a
                      href={download.downloadUrl}
                      download
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      Download
                    </motion.a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3 px-6 bg-gray-700/30 rounded-lg font-semibold text-gray-500 flex items-center justify-center gap-2 cursor-not-allowed"
                    >
                      <Download className="w-5 h-5" />
                      Coming Soon
                    </button>
                  )}

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Version 0.1.0
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 cyber-card bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 text-center">
            <p className="text-gray-300">
              <span className="text-cyber-green font-semibold">🔒 No permissions required beyond camera access.</span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Slouch Ghost is open-source and respects your privacy by design. Your data stays on your device.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center py-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to improve your posture?
          </h3>
          <p className="text-gray-400 mb-8">
            Download Slouch Ghost and start getting real-time feedback on your posture.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-lg font-bold text-white hover:shadow-lg hover:shadow-cyber-blue/50 transition-all duration-300"
          >
            Download for Your Platform
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SlouchGhost;
