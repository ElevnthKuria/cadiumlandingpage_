import React from 'react';
import AnimatedSection from './AnimatedSection';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '',
  delay = 0,
}) => {
  return (
    <AnimatedSection 
      className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}
      delay={delay}
    >
      {subtitle && (
        <span className="block text-primary-600 font-semibold mb-2 uppercase tracking-wider text-sm">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
        {title}
      </h2>
    </AnimatedSection>
  );
};

export default SectionTitle;