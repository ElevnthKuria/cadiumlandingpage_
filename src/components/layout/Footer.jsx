import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-md bg-primary-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl text-white">Cadium</span>
            </div>
            <p className="text-secondary-300 mb-6">
              Transforming ideas into exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="about" smooth={true} duration={500} className="text-secondary-300 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="team" smooth={true} duration={500} className="text-secondary-300 hover:text-white transition-colors cursor-pointer">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} className="text-secondary-300 hover:text-white transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                  UX/UI Design
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-secondary-300">
                123 Innovation Drive<br />
                San Francisco, CA 94103
              </li>
              <li>
                <a href="mailto:info@cadium.com" className="text-secondary-300 hover:text-white transition-colors">
                  info@cadium.com
                </a>
              </li>
              <li>
                <a href="tel:+1-555-123-4567" className="text-secondary-300 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Cadium. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-secondary-400 hover:text-white text-sm transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;