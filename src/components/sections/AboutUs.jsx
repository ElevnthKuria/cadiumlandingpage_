import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Link } from 'react-scroll';

const aboutPoints = [
  {
    title: "Innovation-Driven",
    description: "We continuously explore emerging technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    title: "Client-Focused",
    description: "We build lasting partnerships by understanding your unique needs and delivering tailored solutions.",
  },
  {
    title: "Quality Excellence",
    description: "We maintain rigorous quality standards throughout our development and delivery processes.",
  },
  {
    title: "Agile Approach",
    description: "We embrace flexibility and responsiveness to adapt quickly to changing requirements and timelines.",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute inset-0 bg-secondary-900 rounded-2xl transform rotate-3 scale-105 z-0"></div>
                <div className="relative z-10 overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Cadium team collaborating"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <span className="inline-block px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold mb-3">Established 2023</span>
                    <h3 className="text-white text-2xl md:text-3xl font-bold">Since then, we are pioneering digital excellence</h3>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionTitle
              subtitle="About Us"
              title="We're a team of digital experts"
              delay={0.1}
            />
            
            <AnimatedSection delay={0.2}>
              <p className="text-secondary-700 mb-8">
                At Cadium, we combine technical expertise, creative thinking, and strategic vision to transform businesses with technological solutions.   
                We are enthusiastic professionals who guide enterprises through the digital world and ensure long-term success.
                Our talented and experienced staff has expertise in software development, data science, research, and information consultation.   
                Every person provides a unique blend of talents and knowledge that matches our clients' demands, resulting in extraordinary solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                {aboutPoints.map((point, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">{point.title}</h4>
                      <p className="text-sm text-secondary-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="team" smooth={true} duration={500}>
                  <Button variant="primary">
                    Meet Our Team
                  </Button>
                </Link>
                <Link to="services" smooth={true} duration={500}>
                  <Button variant="secondary">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;