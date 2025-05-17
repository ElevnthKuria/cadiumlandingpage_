import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 ease-in-out';
  
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white border border-slate-200 hover:border-slate-300 text-slate-800 shadow-sm hover:shadow',
    outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50',
    text: 'bg-transparent text-primary-600 hover:text-primary-700 hover:bg-primary-50 shadow-none',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;