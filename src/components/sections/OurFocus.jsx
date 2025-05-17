import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';

const focusAreas = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Cutting-Edge Technology",
    description: "We stay at the forefront of technological innovation to deliver solutions that give our clients a competitive edge."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Performance Optimization",
    description: "We create solutions that not only look great but also perform exceptionally well, ensuring optimal user experiences."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Security First",
    description: "We prioritize security in everything we build, protecting your business and customer data from potential threats."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Scalable Solutions",
    description: "We design with growth in mind, building scalable systems that can evolve alongside your business."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "User-Centered Design",
    description: "We create intuitive, accessible interfaces that delight users and drive engagement with your products."
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: "Data-Driven Strategy",
    description: "We leverage analytics and insights to inform our strategies and maximize the impact of our solutions."
  },
];

const OurFocus = () => {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Focus"
          title="What Sets Us Apart"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <Card className="h-full flex flex-col" hover padding="md">
                <div className="mb-5">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-secondary-600 text-sm">{area.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.3} className="mt-16">
          <div className="bg-secondary-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="mb-8 md:mb-0 md:mr-12 md:w-2/3">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your digital presence?</h3>
                <p className="text-secondary-300">
                  Let's discuss how Cadium can help you achieve your business goals through innovative digital solutions. Our team is ready to bring your vision to life.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="#contact" className="inline-block bg-white text-secondary-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get in Touch
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OurFocus;