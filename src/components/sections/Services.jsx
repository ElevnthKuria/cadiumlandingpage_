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
        description: "We specialise in creating **seamless, high-performance web applications** using cutting-edge technologies like React, Angular, .NET, and JavaScript-based alternatives. We offer **custom web app development**."
      },
      {
        title: "Mobile App Development",
        description: "Our expertise extends to developing **mobile applications**. We have team members proficient in technologies like Kotlin for Android development."
      },
      {
        title: "API Development & Integration",
        description: "We develop robust **APIs** and provide **integration services** to connect your systems and enable seamless data flow. This is a key task in software projects."
      },
      {
        title: "Legacy System Modernisation",
        description: "Our senior consultants excel in **modernising legacy systems**, transforming outdated systems into modern, efficient, and secure applications."
      }
    ]
  },
  {
    id: "data-management",
    name: "Data Analytics and Management",
    description: "We implement strategic marketing solutions that increase your online presence and drive meaningful engagement.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    offerings: [
      {
        title: "Data Analytics Services",
        description: "We provide **tailored data analytics solutions** that deliver actionable insights from complex datasets. Our specialists use **cutting-edge tools like predictive analytics, machine learning, and AI**."
      },
      {
        title: "Comprehensive Data Management",
        description: "We cover every step of the **data management process**, from data collection and processing to analysis, to give our clients the most accurate and useful information. This includes **Data Lifecycle Management** and **Data Quality**."
      },
      {
        title: "Big Data & Data Lake Solutions",
        description: "We set up reliable and expandable **big data infrastructures and data lakes** to store, process, and analyze structured and unstructured data sets. We ensure **seamless integration** with existing systems."
      },
      {
        title: "Data Visualisation & Business Intelligence",
        description: "We use a **design-thinking approach** to delivering powerful **data visualisations**. We integrate natural language generation (NLG) models for **automated insights** and provide **self-service analytics**."
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
        title: "Project Scoping and Planning",
        description: "We assist in creating detailed **Scope of Work (SOW)** documents to define project objectives, deliverables, and requirements. This sets clear expectations and guides the project from the beginning."
      },
      {
        title: "Agile Development Management",
        description: "We leverage **Agile methodologies** and **DevOps practices** to enable your teams to work iteratively and efficiently, fostering continuous integration and delivery that drives faster, more reliable software releases."
      },
      {
        title: "Risk Assessment and Management",
        description: "We implement a **risk management framework** to identify potential risks, assess their impact, and develop plans to mitigate them . This is a key consideration in project planning."
      },
      {
        title: "Project Monitoring and Reporting",
        description: "We provide insight into project progress through monitoring and reporting. The SOW can include specific reporting requirements to keep all stakeholders informed."
      }
    ]
  },
  {
    id: "AI",
    name: "Artificial Intelligence",
    description: "We create custom software solutions tailored to your unique business needs.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    offerings: [
      {
        title: "AI Strategy & Consulting",
        description: "Our AI consulting services empower businesses to harness the full potential of AI for **sustainable growth and innovation**. We help in identifying key areas for **AI-driven improvement**."
      },
      {
        title: "Custom AI/ML Development",
        description: "We develop **custom AI solutions** tailored to your unique needs. This involves integrating data aggregation technologies and employing **machine learning algorithms**. We offer **Machine Learning Development**."
      },
      {
        title: "Generative AI Solutions",
        description: "We develop **Generative AI applications** which can be used for tasks like **content creation**, generating design variations, and product design optimisation."
      },
      {
        title: "Computer Vision and NLP",
        description: "Our AI capabilities include **Computer Vision** and **Natural Language Processing (NLP)** for tasks such as analysing content effectiveness and audience engagement."
      }
    ]
  },
  {
    id: "storage",
    name: "Storage and Backup Solutions",
    description: "We implement strategic marketing solutions that increase your online presence and drive meaningful engagement.",
    image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    offerings: [
      {
        title: "Data Backup Strategies & Implementation",
        description: "We implement comprehensive **backup policies** that specify which data to back up, how frequently, and the type of backups to use (full, incremental, differential)."
      },
      {
        title: "Data Recovery Services",
        description: "We provide solutions for **recovering your important data** in case of loss or corruption ."
      },
      {
        title: "Cloud Storage Solutions",
        description: "We offer solutions leveraging **cloud technology for data storage** and file sharing, including options like Dropbox."
      },
      {
        title: "Data Security Measures",
        description: "We incorporate essential **security measures** to protect your data during storage and transfer, implementing best practices for data security."
      }
    ]
  },
  {
    id: "Consulting",
    name: "Consulting Services",
    description: "We ensure your projects are delivered on time, within budget, and according to specifications.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     offerings: [
      {
        title: "AI Consulting",
        description: "We provide consulting services to help businesses understand and implement **AI solutions** for sustainable growth and innovation. We identify key areas for AI-driven improvement."
      },
      {
        title: "Data Analytics Consulting",
        description: "We offer tailored **data analytics consulting services** to help clients unlock the full value of their data and gain actionable insights for strategic decision-making."
      },
      {
        title: "Software Development Consulting",
        description: "Our consulting services provide **technical expertise** and strategic insight to guide your software development projects. We help evaluate options and select the right frameworks or service-based solutions."
      },
      {
        title: "IT Strategy & Digital Transformation",
        description: "We offer consulting to support **digital transformation**, helping businesses evaluate options and transition operations, including leveraging **cloud migration services**."
      }
    ]
  },
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
                    {activeService.id === "data-management" && "Data-management Approach"}
                    {activeService.id === "project" && "Agile Methodologies"}
                    {activeService.id === "AI" && "Modern Artificial Intelligence"}
                    {activeService.id === "storage" && "Storage and Backup Solutions"}
                    {activeService.id === "consulting" && "Consulting Services"}
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