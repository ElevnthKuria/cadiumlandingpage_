import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import { FiCode, FiBarChart2, FiClipboard } from 'react-icons/fi';

const features = [
  {
    id: 1,
    icon: <FiCode size={24} />,
    title: 'Software Development',
    description: 'We build custom software solutions that solve complex business challenges and drive digital transformation.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 2,
    icon: <FiBarChart2 size={24} />,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions that increase your online presence and drive meaningful customer engagement.',
    color: 'bg-green-50 text-green-600',
  },
  {
    id: 3,
    icon: <FiClipboard size={24} />,
    title: 'Project Management',
    description: 'Efficient project management methodologies ensuring on-time, on-budget delivery with maximum business value.',
    color: 'bg-amber-50 text-amber-600',
  },
];

const statsItems = [
  { id: 1, value: '98%', label: 'Client Retention' },
  { id: 2, value: '200+', label: 'Projects Delivered' },
  { id: 3, value: '15+', label: 'Years Experience' },
  { id: 4, value: '30+', label: 'Team Members' },
];

const Overview = () => {
  return (
    <section id="overview" className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="Company Overview"
          title="What We Do at Cadium"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.id} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-xl shadow-md h-full flex flex-col">
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-secondary-700 flex-grow">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-secondary-900 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  We help businesses thrive in the digital age
                </h3>
                <p className="text-secondary-300 mb-8">
                  At Cadium, we combine technical excellence with strategic thinking to deliver solutions that drive real business results. Our team of experts works closely with you to understand your unique challenges and create tailored solutions that exceed expectations.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {statsItems.map((stat) => (
                    <div key={stat.id}>
                      <div className="text-primary-400 text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-secondary-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:h-auto bg-secondary-800 relative overflow-hidden hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-600/5"></div>
                <div className="h-full w-full bg-[url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2.5,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Overview;