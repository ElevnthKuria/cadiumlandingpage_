import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  shadow = 'md',
  padding = 'lg',
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  return (
    <div 
      className={`
        bg-white rounded-xl ${shadowClasses[shadow]} overflow-hidden
        transition-all duration-300
        ${hover ? 'card-hover-effect' : ''}
        ${paddingClasses[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;