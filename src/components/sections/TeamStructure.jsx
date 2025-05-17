import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';
import Card from '../ui/Card';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "With 15+ years in tech leadership, Sarah leads Cadium's vision and strategy."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Michael oversees all technical operations and ensures we stay at the cutting edge."
  },
  {
    name: "Amelia Rodriguez",
    role: "Director of Marketing",
    image: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Amelia crafts our marketing strategies and leads our digital campaigns."
  },
  {
    name: "David Park",
    role: "Lead Project Manager",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "David ensures all projects are delivered on time, on budget, and exceed expectations."
  },
];

const departments = [
  {
    name: "Software Development",
    description: "Our engineers build robust, scalable solutions using cutting-edge technologies.",
    members: "12 team members"
  },
  {
    name: "UI/UX Design",
    description: "Our designers create intuitive, beautiful interfaces that users love.",
    members: "8 team members"
  },
  {
    name: "Digital Marketing",
    description: "Our marketers implement data-driven strategies that drive growth.",
    members: "10 team members"
  },
  {
    name: "Project Management",
    description: "Our PMs ensure smooth execution and delivery of all client projects.",
    members: "6 team members"
  },
  {
    name: "Client Support",
    description: "Our support team provides ongoing assistance to ensure client success.",
    members: "7 team members"
  },
  {
    name: "Business Development",
    description: "Our BD team identifies opportunities and builds lasting partnerships.",
    members: "5 team members"
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