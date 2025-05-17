import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';
import { motion } from 'framer-motion';

const VisionMission = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary-200 blur-3xl opacity-20 z-0"></div>
      
      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Vision & Mission"
          title="Our Purpose and Direction"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-1">
                <div className="bg-primary-600 rounded-xl p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-primary-600"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 6,
                          ease: "easeInOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </motion.svg>
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Our Vision</h3>
                  </div>
                  <p className="text-primary-100 leading-relaxed">
                    To be the leading catalyst for digital innovation, empowering businesses worldwide to thrive in an ever-evolving technological landscape through forward-thinking solutions that transcend ordinary expectations.
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Innovation</h4>
                      <p className="text-sm text-primary-100">Pioneering new approaches that redefine industry standards</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Empowerment</h4>
                      <p className="text-sm text-primary-100">Enabling businesses to realize their full digital potential</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-1 bg-gradient-to-br from-secondary-900 to-secondary-700">
                <div className="bg-white rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-secondary-900 rounded-full flex items-center justify-center">
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-white"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 3,
                          ease: "easeInOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </motion.svg>
                    </div>
                    <h3 className="text-2xl font-bold ml-4 text-secondary-900">Our Mission</h3>
                  </div>
                  <p className="text-secondary-700 leading-relaxed">
                    To deliver transformative digital solutions through expert software development, strategic marketing, and masterful project management that drive exceptional business outcomes and create sustainable competitive advantages for our clients.
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    <div className="flex items-start">
                      <div className="bg-secondary-100 p-2 rounded-md mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900">Excellence in Execution</h4>
                        <p className="text-sm text-secondary-600">Delivering solutions that exceed expectations in quality and impact</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-secondary-100 p-2 rounded-md mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900">Client-Centered Approach</h4>
                        <p className="text-sm text-secondary-600">Building partnerships that prioritize our clients' success</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;