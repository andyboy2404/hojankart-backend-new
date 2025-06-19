import React from 'react';

interface LogoProps {
  color?: string;
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled = false }) => {
  return (
    <a href="#" className="flex items-center">
      <img 
        src={scrolled ? "/BhojanKart logo V 2.2.png" : "/BhojanKart logo V 2.1.png"}
        alt="Bhojankart Logo" 
        className="h-10 md:h-12 w-auto transition-opacity duration-300" 
      />
    </a>
  );
};

export default Logo;