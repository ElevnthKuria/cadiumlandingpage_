import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-secondary-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/90 to-primary-900/20" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]" />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Welcome to CADIUM.
              <span className="text-primary-400 block">Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-300 mb-8 max-w-xl">
              We craft custom software solutions, implement strategic digital marketing, and deliver expert project management to help your business thrive in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="contact" smooth={true} duration={500}>
                <Button variant="primary" size="lg">
                  Get Started
                </Button>
              </Link>
              <Link to="services" smooth={true} duration={500}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Our Servicesgi
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-secondary-800 p-8 rounded-2xl">
                <div className="bg-secondary-900 h-80 rounded-lg flex items-center justify-center">
                  <div className="p-6 space-y-6 w-full">
                    <div className="h-10 w-2/3 bg-secondary-800 rounded-lg"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-secondary-800 rounded"></div>
                      <div className="h-4 bg-secondary-800 rounded w-5/6"></div>
                      <div className="h-4 bg-secondary-800 rounded w-4/6"></div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="h-10 w-24 bg-primary-600 rounded"></div>
                      <div className="h-10 w-24 bg-secondary-800 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="w-1/3 h-2 bg-primary-500 rounded"></div>
                  <div className="w-1/4 h-2 bg-secondary-800 rounded"></div>
                  <div className="w-1/5 h-2 bg-secondary-800 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-secondary-400 text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;