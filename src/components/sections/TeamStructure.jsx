import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';

const teamMembers = [
  {
    name: "Kuria Ken",
    role: "Founder & Leader ",
    image: "data:image/jpeg;base64,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",
    bio: "Working in tech, data, and business leadership, Kuria leads Cadium's vision and strategy."
  },
  {
    name: "Emmanuel Mwaele",
    role: "CTO",
    // image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Tech Lead, Emmanuel oversees all technical operations and ensures we stay at the cutting edge."
  },
  {
    name: "Derrick Lilumbi",
    role: "Information Officer",
    // image: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Derrick crafts our Info strategies and leads our information management, upholding compliance policy and regulations."
  },
  {
    name: "James Kalia",
    role: "Lead Business Operations",
    // image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "James is at the forefront of Business Operations and Business strategies."
  },
  {
    name: "Lacton Kirimi",
    role: "Lead Project Manager",
    // image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Lacton ensures all projects are delivered on time, on budget, and exceed expectations."
  },
];

const departments = [
  {
    name: "Software Development",
    description: "Our engineers build robust, scalable solutions using cutting-edge technologies.",
    members: "3 team members"
  },
  {
    name: "AI and Data Analytics",
    description: "Our data scientists work with data to uncover insights and drive business growth.",
    members: "2 team members"
  },
  {
    name: "Digital Marketing",
    description: "Our marketers implement data-driven strategies that drive growth.",
    members: "4 team members"
  },
  {
    name: "Project Management",
    description: "Our PMs ensure smooth execution and delivery of all client projects.",
    members: "6 team members"
  },
  {
    name: "Business Development",
    description: "Our BD team identifies opportunities and builds lasting partnerships.",
    members: "3 team members"
  },
  {
    name: "Client Support",
    description: "Our support team provides ongoing assistance to ensure client success.",
    members: "3 team members"
  },
];

const TeamStructure = () => {
  return (
    <section id="team" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Team"
          title="The People Behind Cadium"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full flex flex-col text-center" hover={false} padding="none">
                <div className="relative h-60 overflow-hidden rounded-t-xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-secondary-600 text-sm flex-grow">{member.bio}</p>
                  <div className="flex justify-center mt-4 space-x-3">
                    <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-secondary-400 hover:text-primary-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.2}>
          <div className="bg-secondary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">Organizational Structure</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-lg font-semibold mb-2">{dept.name}</h4>
                  <p className="text-secondary-600 text-sm mb-3">{dept.description}</p>
                  <span className="inline-block bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full">
                    {dept.members}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-secondary-700 mb-4">Want to join our growing team?</p>
              <a href="#" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                View Career Opportunities
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TeamStructure;