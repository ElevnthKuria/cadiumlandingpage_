import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';

const services = [
  {
    id: "software",
    name: "Software Development",
    description: "We create custom software solutions tailored to your unique business needs.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    offerings: [
      {
        title: "Custom Web Applications",
        description: "Scalable web applications built with the latest technologies for optimal performance and user experience."
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that engage users and drive business growth."
      },
      {
        title: "API Development & Integration",
        description: "Robust APIs that connect your systems and enable seamless data flow and communication."
      },
      {
        title: "Legacy System Modernization",
        description: "Upgrade and transform outdated systems into modern, efficient, and secure applications."
      }
    ]
  },
  {
    id: "marketing",
    name: "Digital Marketing",
    description: "We implement strategic marketing solutions that increase your online presence and drive meaningful engagement.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    offerings: [
      {
        title: "SEO Optimization",
        description: "Comprehensive search engine optimization strategies that improve your visibility in search results."
      },
      {
        title: "Content Marketing",
        description: "Engaging, valuable content that attracts, informs, and converts your target audience."
      },
      {
        title: "Social Media Management",
        description: "Strategic social media campaigns that build brand awareness and foster community engagement."
      },
      {
        title: "PPC Advertising",
        description: "Targeted pay-per-click campaigns that drive qualified traffic and maximize ROI."
      }
    ]
  },
  {
    id: "project",
    name: "Project Management",
    description: "We ensure your projects are delivered on time, within budget, and according to specifications.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    offerings: [
      {
        title: "Agile Project Management",
        description: "Flexible, iterative approach to project delivery that adapts to changing requirements and priorities."
      },
      {
        title: "Digital Transformation",
        description: "Strategic guidance and implementation support for your organization's digital evolution."
      },
      {
        title: "Process Optimization",
        description: "Analysis and improvement of your business processes to increase efficiency and reduce costs."
      },
      {
        title: "Technical Consulting",
        description: "Expert advice on technology selection, architecture, and implementation strategies."
      }
    ]
  }
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("software");
  
  const activeService = services.find(service => service.id === activeTab);
  
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Services"
          title="What We Offer"
          centered
        />
        
        <div className="flex flex-wrap border-b border-gray-200 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              className={`relative px-6 py-4 text-left focus:outline-none ${
                activeTab === service.id
                  ? 'text-primary-600 font-semibold'
                  : 'text-secondary-600 hover:text-secondary-900'
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              {service.name}
              {activeTab === service.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                  initial={false}
                />
              )}
            </button>
          ))}
        </div>
        
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">{activeService.name}</h3>
              <p className="text-secondary-700 mb-8">{activeService.description}</p>
              
              <div className="space-y-6">
                {activeService.offerings.map((offering, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-1">{offering.title}</h4>
                      <p className="text-sm text-secondary-600">{offering.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button variant="primary">
                  Learn More About {activeService.name}
                </Button>
              </div>
            </div>
            
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-secondary-900 opacity-20"></div>
                <img 
                  src={activeService.image} 
                  alt={activeService.name}
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="inline-block px-4 py-2 bg-white text-secondary-900 rounded-full text-sm font-semibold mb-3">
                    {activeService.id === "software" && "Modern Tech Stack"}
                    {activeService.id === "marketing" && "Data-Driven Approach"}
                    {activeService.id === "project" && "Agile Methodologies"}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;